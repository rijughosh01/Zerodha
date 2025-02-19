import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAZzE5VmZt_UqAt2GvG3FdTYdwaGf9NtrM",
  authDomain: "fitness-tracker-99f9e.firebaseapp.com",
  projectId: "fitness-tracker-99f9e",
  storageBucket: "fitness-tracker-99f9e.firebasestorage.app",
  messagingSenderId: "304135597636",
  appId: "1:304135597636:web:a26aabfa920ff60626d611",
  measurementId: "G-V7FRRWCFVE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
