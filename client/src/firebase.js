// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-marketplace-fe0ee.firebaseapp.com",
  projectId: "mern-marketplace-fe0ee",
  storageBucket: "mern-marketplace-fe0ee.appspot.com",
  messagingSenderId: "589595741558",
  appId: "1:589595741558:web:a715bfdd7f5bf1d0bbbe57",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
