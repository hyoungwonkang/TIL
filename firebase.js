// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCV2HP7ZgrNBmIYKBfNhTdjjHeAvjjVlSk",
  authDomain: "react-basic-luke.firebaseapp.com",
  projectId: "react-basic-luke",
  storageBucket: "react-basic-luke.appspot.com",
  messagingSenderId: "725750681681",
  appId: "1:725750681681:web:8f46ceb79ec2b287e76870",
  measurementId: "G-J6HYJWMJGE"
};

initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);

export const db = getFirestore();