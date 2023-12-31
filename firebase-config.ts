import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCrpe3ncaLEDA2OLdq2_oXFWKLjmWD7Jlw",
  authDomain: "robin-mobile-native.firebaseapp.com",
  projectId: "robin-mobile-native",
  storageBucket: "robin-mobile-native.appspot.com",
  messagingSenderId: "910768886969",
  appId: "1:910768886969:web:6df899eb5ca9ee48e6f768"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


export { db };
