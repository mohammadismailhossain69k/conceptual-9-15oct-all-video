import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Todo: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyCw9uwdd00I2top2ipqmNte9UbZIxybyUo",
  authDomain: "conceptual-9-15-oct-project.firebaseapp.com",
  projectId: "conceptual-9-15-oct-project",
  storageBucket: "conceptual-9-15-oct-project.firebasestorage.app",
  messagingSenderId: "1064728725932",
  appId: "1:1064728725932:web:613b8d97356622a6409209",
  measurementId: "G-GQX6QC5TW1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
