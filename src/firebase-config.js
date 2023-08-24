// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9qfH2LZ349KjMCIN3wNXKlC3iiJjdBOI",
  authDomain: "rmwd-bf436.firebaseapp.com",
  projectId: "rmwd-bf436",
  storageBucket: "rmwd-bf436.appspot.com",
  messagingSenderId: "301696867551",
  appId: "1:301696867551:web:b78013db0df4df98cc1d6a",
  measurementId: "G-8CHCS1QHMT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
