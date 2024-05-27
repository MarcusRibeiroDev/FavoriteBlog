// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBphlva0pRDzIFzp-G9fa6kx7Y6poJ4LCI",
  authDomain: "blog-e0fe9.firebaseapp.com",
  projectId: "blog-e0fe9",
  storageBucket: "blog-e0fe9.appspot.com",
  messagingSenderId: "758133145398",
  appId: "1:758133145398:web:216941d6929b8813b6bd97",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
