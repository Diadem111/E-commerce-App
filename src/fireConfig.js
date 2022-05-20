// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth ,createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { addDoc,collection
 } from "firebase/firestore";
 import { getStorage, ref, uploadString } from"firebase/storage";
 const firebaseConfig = {
  apiKey: "AIzaSyDKKGMlkIZ8njutnfxeCmIpAHVFj3V8wSQ",
  authDomain: "commerceapp-5df92.firebaseapp.com",
  projectId: "commerceapp-5df92",
  storageBucket: "commerceapp-5df92.appspot.com",
  messagingSenderId: "835647657831",
  appId: "1:835647657831:web:f9ebd001b8e020b9adc1c2",
  measurementId: "G-VVEY5GSL3D"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Authentication start here
export const auth = getAuth(app);
const db = getFirestore()

export const colRef = collection(db,"products")

export const storage = getStorage(app)


export default db;
