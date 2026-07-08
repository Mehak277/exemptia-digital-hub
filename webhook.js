import express from 'express';
import cors from 'cors';
import { createHmac, timingSafeEqual } from 'crypto';
import { Octokit } from '@octokit/rest';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// We need the raw body to verify the HMAC signature correctly
app.use(express.json({
  verify: (req, res, buf) => {
    req.rawBody = buf;
  }
}));

app.use(cors());

const SECRET = process.env.NEUROSEO_SIGNING_SECRET || '';

function validSignature(rawBuffer, signatureHex) {
  if (!SECRET) return false;
  const expected = createHmac("sha256", SECRET).update(rawBuffer).digest("hex");
  const a = Buffer.from(signatureHex || '', 'utf8');
  const b = Buffer.from(expected, 'utf8');
  return a.length === b.length && timingSafeEqual(a, b);
}

// Calculate reading time
function getReadingTime(text) {
  const wordsPerMinute = 200;
  const words = text ? text.split(/\s+/).length : 0;
  return Math.max(1, Math.ceil(words / wordsPerMinute));
}

app.post('/api/neuroseo-webhook', async (req, res) => {
  const sig = req.headers['x-neuroseo-signature'];
  
  if (!validSignature(req.rawBody, sig)) {
    console.error('Invalid NeuroSEO signature');
    return res.status(401).send('bad signature');
  }

  const event = req.headers['x-neuroseo-event'];
  if (event === 'ping') {
    return res.json({ ok: true });
  }

  try {
    const payload = req.body;
    const slug = payload.slug;
    
    // Map NeuroSEO format to Exemptia Digital JSON Post format
    const postData = {
      slug: payload.slug,
      title: payload.title,
      excerpt: payload.excerpt || '',
      date: new Date().toISOString().split('T')[0], // YYYY-MM-DD
      readingTime: getReadingTime(payload.content),
      category: (payload.tags && payload.tags.length > 0) ? payload.tags[0] : 'Blog',
      image: payload.featured_image?.url || 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop',
      author: 'Exemptia Digital',
      content: payload.content || ''
    };

    const fileContent = JSON.stringify(postData, null, 2);
    const filePath = `src/content/blog/${slug}.json`;

    // Commit to GitHub
    const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
    const owner = process.env.GITHUB_REPO.split('/')[0];
    const repo = process.env.GITHUB_REPO.split('/')[1];
    
    // Check if file already exists to get its SHA (for updating)
    let sha;
    try {
      const existing = await octokit.rest.repos.getContent({
        owner,
        repo,
        path: filePath,
        ref: process.env.GITHUB_BRANCH || 'main'
      });
      sha = existing.data.sha;
    } catch (e) {
      // File doesn't exist yet, which is fine
    }

    await octokit.rest.repos.createOrUpdateFileContents({
      owner,
      repo,
      path: filePath,
      message: `content: publish "${payload.title}" via NeuroSEO`,
      content: Buffer.from(fileContent).toString('base64'),
      branch: process.env.GITHUB_BRANCH || 'main',
      ...(sha ? { sha } : {})
    });

    console.log(`Published ${slug} successfully to GitHub`);

    return res.json({
      id: slug,
      url: `${process.env.SITE_PUBLIC_URL || 'http://localhost:8080'}/article/${slug}`,
    });
  } catch (error) {
    console.error('Webhook error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`NeuroSEO Webhook receiver listening on port ${port}`);
});
