import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDxOixbqRR55Kn05hbTUZq8ZB7RxIj8-HM",
  authDomain: "hyun9-s-portfolio.firebaseapp.com",
  databaseURL: "https://hyun9-s-portfolio-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "hyun9-s-portfolio",
  storageBucket: "hyun9-s-portfolio.firebasestorage.app",
  messagingSenderId: "619895039090",
  appId: "1:619895039090:web:d3f256b23a6891b4380eeb",
  measurementId: "G-Z3JRWTGZCN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
export const db = getDatabase(app);
