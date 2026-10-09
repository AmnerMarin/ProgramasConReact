// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBmoguclYf3M_DrqnP04EBgwYYlX9L72UQ",
  authDomain: "amnershop-851a5.firebaseapp.com",
  projectId: "amnershop-851a5",
  storageBucket: "amnershop-851a5.firebasestorage.app",
  messagingSenderId: "393198675329",
  appId: "1:393198675329:web:0275778c3974e7cf94f480",
  measurementId: "G-N6ZCL72Q2W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);