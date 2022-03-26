// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9POoSV2EvZev5v29fRt3WVABZ3S6ul1Y",
  authDomain: "softec-dfae2.firebaseapp.com",
  projectId: "softec-dfae2",
  storageBucket: "softec-dfae2.appspot.com",
  messagingSenderId: "1012106434279",
  appId: "1:1012106434279:web:b46dee4f2234fd2bb1f442",
  measurementId: "G-44CXQX0FSZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
