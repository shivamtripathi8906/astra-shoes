import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBxfqKS4ZIjlqFGPae0FDe4YMxNRRkwz5c",
  authDomain: "astra-shoes.firebaseapp.com",
  projectId: "astra-shoes",
  storageBucket: "astra-shoes.appspot.com",
  messagingSenderId: "782543406718",
  appId: "1:782543406718:web:1666df3c3574e092647a2f",
  measurementId: "G-GYH293KM5P",
};
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };
