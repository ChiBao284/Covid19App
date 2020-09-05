import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDv0QXBFpSI4JibdmTdyn3KYGOE_0CFhrA",
    authDomain: "covid19app-f4084.firebaseapp.com",
    databaseURL: "https://covid19app-f4084.firebaseio.com",
    projectId: "covid19app-f4084",
    storageBucket: "covid19app-f4084.appspot.com",
    messagingSenderId: "112694044940",
    appId: "1:112694044940:web:2972a3672e45f6c49e0129"
  };
  // Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);