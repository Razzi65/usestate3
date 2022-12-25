import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

import { getStorage } from "firebase/storage";

import { getAuth } from "firebase/auth";


// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration

const firebaseConfig = {
    apiKey: "AIzaSyAiERzrXGFpOwov40vN7LvcfRZRjWmyd6o",
    authDomain: "todo-app-9bdb3.firebaseapp.com",
    projectId: "todo-app-9bdb3",
    storageBucket: "todo-app-9bdb3.appspot.com",
    messagingSenderId: "772638839393",
    appId: "1:772638839393:web:eb71662540ea1e7f4d9020",
    measurementId: "G-R0XFKB0JWF"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app)
const auth = getAuth(app);


export {db}
export {storage, auth}