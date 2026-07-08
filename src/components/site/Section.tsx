export function SectionHeader({
  title,
  kicker,
  actionLabel,
  actionTo,
}: {
  title: string;
  kicker?: string;
  actionLabel?: string;
  actionTo?: string;
}) {
  return (
    <div className="mb-6 flex items-end justify-between gap-4 border-b border-border pb-3">
      <div>
        {kicker && (
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{kicker}</p>
        )}
        <h2 className="font-heading text-2xl font-bold tracking-tight md:text-3xl">{title}</h2>
      </div>
      {actionLabel && actionTo && (
        <a href={actionTo} className="hidden text-sm font-semibold text-primary hover:underline sm:inline-flex">
          {actionLabel} →
        </a>
      )}
    </div>
  );
}

export function AdBanner({ label = "Advertisement", size = "leaderboard" }: { label?: string; size?: "leaderboard" | "square" | "wide" }) {
  const h = size === "square" ? "h-64" : size === "wide" ? "h-28" : "h-24";
  return (
    <div className={`flex ${h} w-full items-center justify-center rounded-xl border border-dashed border-border bg-section text-xs uppercase tracking-widest text-muted-foreground`}>
      {label}
    </div>
  );
}
