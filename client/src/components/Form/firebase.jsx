// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";


// Firebase configuration using the credentials you provided
const firebaseConfig = {
  apiKey: "AIzaSyDGMVJGLfitVXibd_8UHSgnUm-nCZKpBtE",
  authDomain: "hack4humanity-39483.firebaseapp.com",
  projectId: "hack4humanity-39483",
  storageBucket: "hack4humanity-39483.appspot.com",
  messagingSenderId: "1023437540393",
  appId: "1:1023437540393:web:96f8dc4376c45f9857e038",
};

// Initialize Firebase with the provided config
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);  // Firestore database instance

// Export Firestore methods for use in components
export { db, collection, addDoc };
