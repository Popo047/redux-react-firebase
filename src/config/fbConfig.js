import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyB9kkuP9N_8t5j_S8nzYoiLATd6Kty97_I",
  authDomain: "fir-react-redux-58941.firebaseapp.com",
  projectId: "fir-react-redux-58941",
  storageBucket: "fir-react-redux-58941.appspot.com",
  messagingSenderId: "594551799859",
  appId: "1:594551799859:web:3417e1983c57b6f5ea2346",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig); //can change if needed.
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
