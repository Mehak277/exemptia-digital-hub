import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpK3BxN2bjImj3l3abcLUy0L43-x3FSyc",
  authDomain: "exemptiadigital.firebaseapp.com",
  projectId: "exemptiadigital",
  storageBucket: "exemptiadigital.firebasestorage.app",
  messagingSenderId: "551314878141",
  appId: "1:551314878141:web:d6ba581b9bd03f715751d4",
  measurementId: "G-2XL724DFNB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
