// lib/firebase.js
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, doc, setDoc, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAmBt_FDAgfiohNZg_tjLQgX2P8EA-APfg",
  authDomain: "angelhack-6978c.firebaseapp.com",
  projectId: "angelhack-6978c",
  storageBucket: "angelhack-6978c.appspot.com",
  messagingSenderId: "1033509358",
  appId: "1:1033509358:web:6a9944629fe2aa35d656ff",
  measurementId: "G-F01XECEX14",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  const db = getFirestore(app);
} else {
  firebase.app(); // if already initialized, use that one
}

const auth = firebase.auth();

export { auth, firebase, db };
