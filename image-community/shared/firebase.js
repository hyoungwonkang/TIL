import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyC94jO080hWHX3gyTcwyldIbfk7Ic9iV1A",
    authDomain: "react-high.firebaseapp.com",
    projectId: "react-high",
    storageBucket: "react-high.appspot.com",
    messagingSenderId: "930425042382",
    appId: "1:930425042382:web:4702e09fc9315cefae279f",
    measurementId: "G-B2PNKD2S2Q"
};

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()

export {auth}