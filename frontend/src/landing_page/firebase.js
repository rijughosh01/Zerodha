import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDRn7A6fo9MK0UdctpusQ0iDLVY7GCLULI",
    authDomain: "news-aggregator-d4c9a.firebaseapp.com",
    projectId: "news-aggregator-d4c9a",
    storageBucket: "news-aggregator-d4c9a.firebasestorage.app",
    messagingSenderId: "540678123706",
    appId: "1:540678123706:web:60aac6896b0e67b78f9283",
    measurementId: "G-6BX46GM9D4"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
