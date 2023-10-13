// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCkkk3vEaPnOcisoKoxB_QkH1CWKUgbbo0",
  authDomain: "adoptemall.firebaseapp.com",
  projectId: "adoptemall",
  storageBucket: "adoptemall.appspot.com",
  messagingSenderId: "198044004852",
  appId: "1:198044004852:web:da1880cfae5532a8a949a1",
  measurementId: "G-3EZHGLCE65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
