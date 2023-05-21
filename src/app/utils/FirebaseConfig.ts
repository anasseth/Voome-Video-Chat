// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAOewzIaK_0vnixEsA5LkNzbHAXywxhmaU",
    authDomain: "voome-chat.firebaseapp.com",
    projectId: "voome-chat",
    storageBucket: "voome-chat.appspot.com",
    messagingSenderId: "520504044321",
    appId: "1:520504044321:web:0ce763e339e75b94c42c60",
    measurementId: "G-43G47B15G6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);