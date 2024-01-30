
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { initializeApp } from "firebase/app";
 import {getAuth} from "firebase/auth"
 import { getStorage } from 'firebase/storage';
 import {getFirestore} from "firebase/firestore"
 const firebaseConfig = {
  apiKey: "AIzaSyBqUe5XeAO5AbtaeRTOglt_vYwaLZw8exo",
  authDomain: "perfis-bd816.firebaseapp.com",
  projectId: "perfis-bd816",
  storageBucket: "perfis-bd816.appspot.com",
  messagingSenderId: "570334030530",
  appId: "1:570334030530:web:bfb7ce63fd751e524be95b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const fireDB = getFirestore(app)
const auth = getAuth()
const firebaseStorage = getStorage(app); // Add this line



export {fireDB,auth,firebaseStorage };