// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDAOobDWy0aGtbvM4A659tzZJXdnAX-Eg",
  authDomain: "mern242-1-33daa.firebaseapp.com",
  projectId: "mern242-1-33daa",
  storageBucket: "mern242-1-33daa.appspot.com",
  messagingSenderId: "597283507790",
  appId: "1:597283507790:web:039705ded1cfe9e206bd1f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app