// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAy9W6HjEfwF4zMX_e8g1YCGARWNEt0KKw",
  authDomain: "friend-test-49471.firebaseapp.com",
  projectId: "friend-test-49471",
  storageBucket: "friend-test-49471.appspot.com",
  messagingSenderId: "965818264385",
  appId: "1:965818264385:web:b97251d248b85d5c164fc0",
  measurementId: "G-9SN008DKQG"
};
  

// Initialize Firebase

initializeApp(firebaseConfig);

export const db= getFirestore();