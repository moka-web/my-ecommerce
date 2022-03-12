// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_2OkF3DL3tKgXAySOjR4u5TcRCAA3f7M",
  authDomain: "my-ecommerce-45229.firebaseapp.com",
  projectId: "my-ecommerce-45229",
  storageBucket: "my-ecommerce-45229.appspot.com",
  messagingSenderId: "213174204147",
  appId: "1:213174204147:web:1a2149670f73882579a986"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;