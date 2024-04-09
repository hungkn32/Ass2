// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAd7kfaZFklxpDs04oqQag8qTlhSLJWOoE",
  authDomain: "md18306-firebasee.firebaseapp.com",
  projectId: "md18306-firebasee",
  storageBucket: "md18306-firebasee.appspot.com",
  messagingSenderId: "682395253463",
  appId: "1:682395253463:web:bd9e1be401f03a16cece92"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FRIEBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);