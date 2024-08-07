// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBermfGv6mVyaH2345p-fGNhVKRrGdtLiU",
  authDomain: "besthubs.firebaseapp.com",
  projectId: "besthubs",
  storageBucket: "besthubs.appspot.com",
  messagingSenderId: "420153113649",
  appId: "1:420153113649:web:5b2b5469867fd6d3182910"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig); 

export default firebaseApp; 