import firebase from 'firebase/app';
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC2YqFrE7cYnSQX0HA02OF_nWl_kht8gsc",
    authDomain: "schooly-73851.firebaseapp.com",
    projectId: "schooly-73851",
    storageBucket: "schooly-73851.appspot.com",
    messagingSenderId: "214886662464",
    appId: "1:214886662464:web:1481ec0a154fce68c4faa5"
};

firebase.initializeApp(firebaseConfig);
export default firebase;