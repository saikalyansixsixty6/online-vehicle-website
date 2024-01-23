
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { initializeApp } from "firebase/app";
 import {getAuth} from "firebase/auth"
 import {getFirestore} from "firebase/firestore"
 const firebaseConfig = {
  apiKey: "AIzaSyC12msdDLr8CaC_GO2Fyr48QM6PnUb4gBk",
  authDomain: "cra-vehicle-mart.firebaseapp.com",
  projectId: "cra-vehicle-mart",
  storageBucket: "cra-vehicle-mart.appspot.com",
  messagingSenderId: "1096117811466",
  appId: "1:1096117811466:web:24eaaced9e67e243efa2f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const fireDB = getFirestore(app)
const auth = getAuth()

export {fireDB,auth}