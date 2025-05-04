import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBP0Ga50dA74Jl_CzegORYTM1eWoIW3PZk",
  authDomain: "ai-interview-prep-d479c.firebaseapp.com",
  projectId: "ai-interview-prep-d479c",
  storageBucket: "ai-interview-prep-d479c.firebasestorage.app",
  messagingSenderId: "1051718099111",
  appId: "1:1051718099111:web:02a1b9537aa2d51c1d3b82",
  measurementId: "G-8SVRZ8WG4L"
};


const app = !getApps.length ?  initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
