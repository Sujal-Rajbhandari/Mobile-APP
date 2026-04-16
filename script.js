// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getDatabase, set, get, ref, update, remove, push } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlRoKKH9XdZyNZtAKHcBeDSGJvFLaMEqQ",
  authDomain: "voicecall23-d57f6.firebaseapp.com",
  projectId: "voicecall23-d57f6",
  storageBucket: "voicecall23-d57f6.firebasestorage.app",
  messagingSenderId: "528194432546",
  appId: "1:528194432546:web:d57b2aabfd678a13ec247b",
  measurementId: "G-CKX3GJL36F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

console.log(db);

//Function to write user data to Firebase Realtime Database
function writeUserData(userId, name, email) {
    //Get the database instance
    //const db = getDatabase();
    //Create a reference/points to 'users/{userID}' and set the data (name and email)
  set(ref(db, 'users/' + userId), {
    name: name,
    email: email
  });
}
writeUserData(1, "sujal", "sujal@gmail.com")

