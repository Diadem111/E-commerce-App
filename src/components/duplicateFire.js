import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyD9jucxy1p-WZ_ykW_Xw5iADoFVUC_etDA",
    authDomain: "e-commerce-1538a.firebaseapp.com",
    databaseURL: "https://e-commerce-1538a-default-rtdb.firebaseio.com",
    projectId: "e-commerce-1538a",
    storageBucket: "e-commerce-1538a.appspot.com",
    messagingSenderId: "566992224746",
    appId: "1:566992224746:web:08affcccb68e2769397293",
    measurementId: "G-1ZZ2TQ57SB"
  };

  export const app = initializeApp(firebaseConfig )
  export const storage = getStorage(app);
  export const db = getFirestore(app)