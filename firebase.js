import firebase from "firebase";
import 'firebase/firestore';
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyBn62NxXC1ry7gnDuOKtPLK4TGd_jEGmWg",
    authDomain: "restaurant-bcb89.firebaseapp.com",
    projectId: "restaurant-bcb89",
    storageBucket: "restaurant-bcb89.appspot.com",
    messagingSenderId: "811412298989",
    appId: "1:811412298989:web:9079d738da7401e19c00e4"
};

let app;

if (firebase.apps.length === 0) {
    app= firebase.initializeApp(firebaseConfig);
}else{
    app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export {auth, db}