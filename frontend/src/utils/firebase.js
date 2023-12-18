
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { initializeApp } from "firebase/app";
 import {getAuth} from "firebase/auth"
 import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyArYv5qOjTC4ENIBhWIFWLKP-5rG5BPiyo",
  authDomain: "vehiclemart-212c2.firebaseapp.com",
  projectId: "vehiclemart-212c2",
  storageBucket: "vehiclemart-212c2.appspot.com",
  messagingSenderId: "782613351546",
  appId: "1:782613351546:web:87e3e920f3dfdb7d2c3fc3",
  measurementId: "G-JLXY73VJF2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const fireDB = getFirestore(app)
const auth = getAuth()

export {fireDB,auth}