import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAdS7AaqaGYqSGMh3ShnfwBIclpMaMp_ug",
    authDomain: "ratemy-3cd1e.firebaseapp.com",
    projectId: "ratemy-3cd1e",
    storageBucket: "ratemy-3cd1e.appspot.com",
    messagingSenderId: "716020254386",
    appId: "1:716020254386:web:88fd2f0b4f7007c4902bab"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const a = "A"