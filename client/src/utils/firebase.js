// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "taskmanager-b556b.firebaseapp.com",
  projectId: "taskmanager-b556b",
  storageBucket: "taskmanager-b556b.appspot.com",
  messagingSenderId: "541279733419",
  appId: "1:541279733419:web:0c32cc3f41c02082eb59ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);