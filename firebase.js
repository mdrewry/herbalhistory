import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/functions";

export const firebaseConfig = {
  apiKey: "AIzaSyBX2B70KAPN2Ck0EgOR3QoapOZLvkl0nfk",
  authDomain: "herbalhistory-de543.firebaseapp.com",
  projectId: "herbalhistory-de543",
  storageBucket: "herbalhistory-de543.appspot.com",
  messagingSenderId: "515272764554",
  appId: "1:515272764554:web:b75eb9fb656c207f16d173",
  measurementId: "G-CQEKFZFC2D",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

export const Firebase = firebase;
export const fieldValues = firebase.firestore.FieldValue;
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const functions = firebase.functions();
export const storage = firebase.storage();
