// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDM_Wy5WW_PNCg09t8sGXqNlHDP6qYinRA",
  authDomain: "react-typescript-demo-37314.firebaseapp.com",
  databaseURL:
    "https://react-typescript-demo-37314-default-rtdb.firebaseio.com",
  projectId: "react-typescript-demo-37314",
  storageBucket: "react-typescript-demo-37314.appspot.com",
  messagingSenderId: "356767735418",
  appId: "1:356767735418:web:bff27e85c4df6e2a3ea5c3",
  measurementId: "G-MNRV7J10V2",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

async function getCities(db: any) {
  const citiesCol = collection(db, "cities");
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map((doc) => doc.data());
  return cityList;
}
// export const database = firebaseApp.database();
