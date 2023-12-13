// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoc2GBxmMtawK_yD5n1w5ZEAHI6_MAUpA",
  authDomain: "vehicles-selling-website.firebaseapp.com",
  projectId: "vehicles-selling-website",
  storageBucket: "vehicles-selling-website.appspot.com",
  messagingSenderId: "344509125695",
  appId: "1:344509125695:web:9e6b600925af65a3c6948a",
  measurementId: "G-KBMZCMB63L"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const fireDB = getFirestore(firebaseApp)
const auth = getAuth()

export {fireDB,auth}