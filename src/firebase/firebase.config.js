// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjjIyB3t2Ah43bTM08L00D2BSbd-2sMwY",
  authDomain: "assignment-10-400fe.firebaseapp.com",
  projectId: "assignment-10-400fe",
  storageBucket: "assignment-10-400fe.appspot.com",
  messagingSenderId: "906586973928",
  appId: "1:906586973928:web:b648b210bfd9a169188b5d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;