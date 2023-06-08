import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAszw3suDfxJ6cUhK5MwvZK7IRjuO3j3vk",
  authDomain: "peopl-7abf0.firebaseapp.com",
  projectId: "peopl-7abf0",
  storageBucket: "peopl-7abf0.appspot.com",
  messagingSenderId: "339950323030",
  appId: "1:339950323030:web:9d3e51b8442b6bf5f7c2f7",
  measurementId: "G-14LNQCVZY6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
