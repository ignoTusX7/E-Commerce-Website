// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJpF26uSRpvXVo_WWEHwx6UWZ6o6-Li3M",
  authDomain: "e-store-a9207.firebaseapp.com",
  projectId: "e-store-a9207",
  storageBucket: "e-store-a9207.appspot.com",
  messagingSenderId: "291280397595",
  appId: "1:291280397595:web:e40c61822712fc4afddfbe",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };
