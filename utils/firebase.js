import firebase from 'firebase/app'
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyAjawNhZDHz6nMkPiz0YklLWehX2x4XgR8",
    authDomain: "maps-app-b39f5.firebaseapp.com",
    projectId: "maps-app-b39f5",
    storageBucket: "maps-app-b39f5.appspot.com",
    messagingSenderId: "605594769724",
    appId: "1:605594769724:web:198c3b927934f00cf66639"
  };
  
  // Initialize Firebase
  export const firebaseApp = initializeApp(firebaseConfig);