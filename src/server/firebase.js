import * as firebase from "firebase"
import "firebase/auth"
import "firebase/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBdwEGbl6JGyVu53lnBQYgU824RyMN7Qc4",
    authDomain: "react-chat-835ce.firebaseapp.com",
    projectId: "react-chat-835ce",
    storageBucket: "react-chat-835ce.appspot.com",
    messagingSenderId: "691662576328",
    appId: "1:691662576328:web:61b3f8505d6159b8e463fd",
    measurementId: "G-21WNSCHS3R"
};

const app = firebase.initializeApp(firebaseConfig)
const database = app.firestore()
const auth = app.auth()
const googleProvider = new firebase.auth.GoogleAuthProvider()

export { database, firebase, auth, googleProvider }
