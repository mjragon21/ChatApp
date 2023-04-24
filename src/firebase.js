import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAfOB3YxI43XSrQ3C0Shiee40LznPGQRrQ",
  authDomain: "chat-979c7.firebaseapp.com",
  projectId: "chat-979c7",
  storageBucket: "chat-979c7.appspot.com",
  messagingSenderId: "29396355972",
  appId: "1:29396355972:web:8e259cc17e4588a823ebd1",
  measurementId: "G-J08711YNRT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage()
export const db = getFirestore()
