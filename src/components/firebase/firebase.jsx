// Import the functions you need from the SDKs you need
/* import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; */
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
/* const firebaseConfig = {

  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID
}; */

// Initialize Firebase
/* export const app = initializeApp(firebaseConfig);
export const db = getFirestore(); */



import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwvwv41P-9d8saWUzT7J5haMU0DCVFX7w",
  authDomain: "hackathom-7e6dc.firebaseapp.com",
  projectId: "hackathom-7e6dc",
  storageBucket: "hackathom-7e6dc.appspot.com",
  messagingSenderId: "124632157088",
  appId: "1:124632157088:web:8a0d40806dd1da952b32c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);