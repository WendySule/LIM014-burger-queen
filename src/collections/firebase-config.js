import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBsIOHh3FAlPRKcK4ZhyFVYjFibMkK4kyc",
    authDomain: "burger-queen-45750.firebaseapp.com",
    databaseURL: "https://burger-queen-45750-default-rtdb.firebaseio.com",
    projectId: "burger-queen-45750",
    storageBucket: "burger-queen-45750.appspot.com",
    messagingSenderId: "878739699956",
    appId: "1:878739699956:web:3cad077326f0170b9b06a1",
    measurementId: "G-8YXLXT7DFJ"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();
export const auth = firebaseApp.auth();

