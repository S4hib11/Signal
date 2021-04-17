import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA0toStexBqjFv86QycgE92Xwu0paChHEA",
  authDomain: "signal-e1f0a.firebaseapp.com",
  projectId: "signal-e1f0a",
  storageBucket: "signal-e1f0a.appspot.com",
  messagingSenderId: "761883834056",
  appId: "1:761883834056:web:11f5d858ced111fa4317fd"
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
}
else{
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export {db, auth};