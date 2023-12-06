// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCa-9vtgMY5DCYYJH7-K8R9ZEQek-dwPqA",
    authDomain: "thirstapp-c1a65.firebaseapp.com",
    projectId: "thirstapp-c1a65",
    storageBucket: "thirstapp-c1a65.appspot.com",
    messagingSenderId: "600626247899",
    appId: "1:600626247899:web:3c1b718372b89a428334fe",
    measurementId: "G-MLKJRH9DKG"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);