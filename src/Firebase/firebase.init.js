// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzY-1g1-8riiAZ35o5rMeKwvH-lghuzc4",
  authDomain: "simplefirebase-353bd.firebaseapp.com",
  projectId: "simplefirebase-353bd",
  storageBucket: "simplefirebase-353bd.firebasestorage.app",
  messagingSenderId: "949586303981",
  appId: "1:949586303981:web:9bc2011097ff0a50e4e5e4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
