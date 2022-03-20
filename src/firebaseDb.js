import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDhTP6sNSs3c4n55V69tM1dH--pBgEjUtE",
  authDomain: "soft-kudos.firebaseapp.com",
  projectId: "soft-kudos",
  storageBucket: "soft-kudos.appspot.com",
  messagingSenderId: "272127081098",
  appId: "1:272127081098:web:622bb52ed1aaf7c8f20b73"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();