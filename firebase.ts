// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "udemy-twitter-37781.firebaseapp.com",
  projectId: "udemy-twitter-37781",
  storageBucket: "udemy-twitter-37781.appspot.com",
  messagingSenderId: "610713940179",
  appId: "1:610713940179:web:40dba46eabcba1bcc72426",
  measurementId: "G-YEW66Q73LG",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
