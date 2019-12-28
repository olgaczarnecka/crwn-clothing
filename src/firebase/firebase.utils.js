import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDhdpHn-12wAhLHRhSaj9MZc1UFSEgXs94",
  authDomain: "crwn-db-olga.firebaseapp.com",
  databaseURL: "https://crwn-db-olga.firebaseio.com",
  projectId: "crwn-db-olga",
  storageBucket: "crwn-db-olga.appspot.com",
  messagingSenderId: "940161535986",
  appId: "1:940161535986:web:9565e25fd5093d2adb656b",
  measurementId: "G-VDKLSZRNHH"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
