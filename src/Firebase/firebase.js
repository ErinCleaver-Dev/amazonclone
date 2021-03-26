import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyCv8NEnlanLuKS4TCgWqv8zVGmeaJfaxac",
    authDomain: "clone-database-2a4ed.firebaseapp.com",
    projectId: "clone-database-2a4ed",
    storageBucket: "clone-database-2a4ed.appspot.com",
    messagingSenderId: "622104227652",
    appId: "1:622104227652:web:4707b2eb3a7290990cb111",
    measurementId: "G-T4GVTFFNZF"
  });

  const db = firebaseApp.firestore();

  export { db }