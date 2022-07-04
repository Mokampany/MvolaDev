import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBUHjL-8xy1e50EfNXkHQw4vknYbNlfGTY",
  authDomain: "mvoladev.firebaseapp.com",
  projectId: "mvoladev",
  storageBucket: "mvoladev.appspot.com",
  messagingSenderId: "1009323476753",
  appId: "1:1009323476753:web:add8b53a241a8fba462eb0",
  measurementId: "G-P5RMNRK3LJ",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
