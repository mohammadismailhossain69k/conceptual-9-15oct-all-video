import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Todo: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object

//akan teke amra file take hide korsi and hide kore amra file take raksi .env te 
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId, 
  appId: import.meta.env.VITE_appId,
  measurementId: import.meta.env.VITE_measurementId
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
