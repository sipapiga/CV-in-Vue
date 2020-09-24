import firebase from "firebase";
//import firestore from "firebase/firestore"
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDB8K0PK12OZEqj80b7HkWupdNWW_tFDbA",
    authDomain: "vue-cv-25be9.firebaseapp.com",
    databaseURL: "https://vue-cv-25be9.firebaseio.com",
    projectId: "vue-cv-25be9",
    storageBucket: "vue-cv-25be9.appspot.com",
    messagingSenderId: "1041650002434",
    appId: "1:1041650002434:web:9b100582b27c15a613951b",
    measurementId: "G-GQE7TWWJ64"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

export default firebaseApp.firestore()