// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVdGZIlDHRLc5X3EZX93X_pKDdFW68_u8",
  authDomain: "ema-john-simple-d94a1.firebaseapp.com",
  projectId: "ema-john-simple-d94a1",
  storageBucket: "ema-john-simple-d94a1.appspot.com",
  messagingSenderId: "870181606187",
  appId: "1:870181606187:web:8e8bcbc867888061f6eb6e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;