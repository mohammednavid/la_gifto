import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

//Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBTp_ph25UxosdXekdRWpc996jvydDAlcY",
    authDomain: "lagifto-2f71f.firebaseapp.com",
    databaseURL: "https://lagifto-2f71f-default-rtdb.firebaseio.com",
    projectId: "lagifto-2f71f",
    storageBucket: "lagifto-2f71f.appspot.com",
    messagingSenderId: "510694154577",
    appId: "1:510694154577:web:aa00fbf1d813bd2ecf7370",
    measurementId: "G-EJ6SMMVG87"
};
// Initialize Firebase
const Firebase=firebase.initializeApp(firebaseConfig);
// export const db =firebaseApp.firestore()
// export const auth =firebaseApp.auth()
// firebase.firestore().settings({ timestampsInSnapshots: true})
export default Firebase
