// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpYnBq3Yi0g960XjU_WM7IPhnFbIc7AK0",
  authDomain: "speech-e9b78.firebaseapp.com",
  projectId: "speech-e9b78",
  storageBucket: "speech-e9b78.appspot.com",
  messagingSenderId: "652896139176",
  appId: "1:652896139176:web:01cb90c0669b170dea8f9d",
  measurementId: "G-06NPD06R3V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth(app);