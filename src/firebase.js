// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBF0ikQYOWGn0AjeSdVr7r54mhzJMTqldA",
  authDomain: "realtor-clone-react-59567.firebaseapp.com",
  projectId: "realtor-clone-react-59567",
  storageBucket: "realtor-clone-react-59567.appspot.com",
  messagingSenderId: "1084724390134",
  appId: "1:1084724390134:web:c7a1e8ebb243860649a4d7"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db= getFirestore();