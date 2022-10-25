// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDkNHM8VSF6j9Oqjivc3EbTXW2Tdnb4eOs",
    authDomain: "learning-website-react.firebaseapp.com",
    projectId: "learning-website-react",
    storageBucket: "learning-website-react.appspot.com",
    messagingSenderId: "139991343661",
    appId: "1:139991343661:web:811c2af5921397bd7b0ea4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;