import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDiDA6Heyl5-vMdLzVg1cpoLEJW8YTldg0",
  authDomain: "christmas-47315.firebaseapp.com",
  projectId: "christmas-47315",
  storageBucket: "christmas-47315.appspot.com",
  messagingSenderId: "722198285636",
  appId: "1:722198285636:web:5d023e318ceebfdb87db11",
  measurementId: "G-FG23MREV37",
  databaseURL:
    "https://christmas-47315-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getDatabase(firebaseApp);

export default db;
