import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyA4ROx8THOSXOkEcP9nGj6qkwV-q8L8y3U",
  authDomain: "only-chat-3524e.firebaseapp.com",
  databaseURL: "https://only-chat-3524e-default-rtdb.firebaseio.com",
  projectId: "only-chat-3524e",
  storageBucket: "only-chat-3524e.appspot.com",
  messagingSenderId: "825669167548",
  appId: "1:825669167548:web:f96b47127448c014cbe3b9",
  measurementId: "G-P28DDT8PM1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider }

export default db
