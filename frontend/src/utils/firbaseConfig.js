// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
// import {getAnalytics } from "firebase/analytics";
import {getFirestore } from "firebase/firestore";
 // for Firestore
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAX95uQyHy6FNRxd7ZChfktoIVzyn8E4IM",
  authDomain: "tutoritechat.firebaseapp.com",
  projectId: "tutoritechat",
  storageBucket: "tutoritechat.firebasestorage.app",
  messagingSenderId: "607384664884",
  appId: "1:607384664884:web:cbd33a0d750c973ec54361",
  measurementId: "G-F514M387FM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app); 
export { db };