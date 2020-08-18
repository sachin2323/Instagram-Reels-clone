import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyDTL6BjO9FueyRqlxAXYJ6n336tVEIerEs",
    authDomain: "ig-reels-ea107.firebaseapp.com",
    databaseURL: "https://ig-reels-ea107.firebaseio.com",
    projectId: "ig-reels-ea107",
    storageBucket: "ig-reels-ea107.appspot.com",
    messagingSenderId: "676445208984",
    appId: "1:676445208984:web:2a59514fcb8cc13f03ebed",
    measurementId: "G-7QBNXYDR99"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;