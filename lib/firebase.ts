import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCVnbSEsHL324pJBmn-PFOJmqYRD-_NbKM",
  authDomain: "hospital-management-syst-2eff9.firebaseapp.com",
  projectId: "hospital-management-syst-2eff9",
  storageBucket: "hospital-management-syst-2eff9.appspot.com", // Fixed storage bucket URL
  messagingSenderId: "54867920812",
  appId: "1:54867920812:web:a00d8e4ae45d2d56cb5c09",
  measurementId: "G-4EX0LWH5SF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);

// Optional: Add debug logging
console.log("Firebase initialized. App name:", app.name);