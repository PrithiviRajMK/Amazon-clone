import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAYmsdJfyv5yLxqRLJJkxX6RaOcbZ8wYKc",
    authDomain: "akimo-71450.firebaseapp.com",
    databaseURL: "https://akimo-71450.firebaseio.com",
    projectId: "akimo-71450",
    storageBucket: "akimo-71450.appspot.com",
    messagingSenderId: "1079782547880",
    appId: "1:1079782547880:web:2b87557027db2005757d9d",
    measurementId: "G-WXMSMVME8V",
  });

  
  const auth = firebase.auth();

  export{ auth};