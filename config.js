// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDZhjXPCmX7E7Q2XQNWgkXlvHhsdJI-HjA",
    authDomain: "thirstapp-42ed5.firebaseapp.com",
    databaseURL: "https://thirstapp-42ed5-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "thirstapp-42ed5",
    storageBucket: "thirstapp-42ed5.appspot.com",
    messagingSenderId: "365226247256",
    appId: "1:365226247256:web:42d0ae02349f8edfb9f62d",
    measurementId: "G-77WS1CFLPF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };