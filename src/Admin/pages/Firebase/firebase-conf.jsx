import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// const firebaseConfig = {
//   apiKey: "AIzaSyBPY8Q7cv_Fbn_ynhtgljFMVBAxLdhgVXU",
//   authDomain: "local-2022.firebaseapp.com",
//   databaseURL: "https://local-2022-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "local-2022",
//   storageBucket: "local-2022.appspot.com",
//   messagingSenderId: "696611966846",
//   appId: "1:696611966846:web:f6dc716338c0c1bf5d2d2f"
// };

const firebaseConfig = {
  apiKey: process.env.REACT_APP_LOCAL_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_LOCAL_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_LOCAL_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_LOCAL_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_LOCAL_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_LOCAL_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_LOCAL_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
