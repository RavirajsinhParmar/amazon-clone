import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAFKFZ6N-0bSKfPWSdcp9GsPzf3NC7maJM",
  authDomain: "clone-26998.firebaseapp.com",
  projectId: "clone-26998",
  storageBucket: "clone-26998.appspot.com",
  messagingSenderId: "1042614622939",
  appId: "1:1042614622939:web:ed8eca867d41418b108afe",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
