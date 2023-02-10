import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGTuJAq-OC6vUvJrm8SzHrugGhg8DXAGw",
  authDomain: "ktern-s---chat-gpt.firebaseapp.com",
  projectId: "ktern-s---chat-gpt",
  storageBucket: "ktern-s---chat-gpt.appspot.com",
  messagingSenderId: "652855685983",
  appId: "1:652855685983:web:cfd6341bc71b953a88bcea",
  measurementId: "G-7V76R0EGW5",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
