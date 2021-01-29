import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDkKFZ-k_57GfbmxkVdWLBHHukhY-PsTjU",
  authDomain: "clothing-shop-db-9c428.firebaseapp.com",
  projectId: "clothing-shop-db-9c428",
  storageBucket: "clothing-shop-db-9c428.appspot.com",
  messagingSenderId: "741354685546",
  appId: "1:741354685546:web:0c5432fbb838f380cb3613",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
