/* === Firebase Setup === */
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const apiKey = import.meta.env.VITE_API_KEY;

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "cyclos-8a3a2.firebaseapp.com",
  projectId: "cyclos-8a3a2",
  storageBucket: "cyclos-8a3a2.appspot.com",
  messagingSenderId: "272890756542",
  appId: "1:272890756542:web:b7414fe52bf1b683798def",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

/* === Firebase Setup === */
