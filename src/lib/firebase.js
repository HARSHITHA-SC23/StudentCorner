import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig ={
  apiKey: "AIzaSyB4MoNSqJbZsY1w_Q92yCWOYjE28zDYmBc",
  authDomain: "studentcorner-4e505.firebaseapp.com",
  projectId: "studentcorner-4e505",
  storageBucket: "studentcorner-4e505.appspot.com",
  messagingSenderId: "105221251979",
  appId: "1:105221251979:web:897b6125b63d7136c3058e"
}

firebase.initializeApp(firebaseConfig);

const db=firebase.firestore();
const auth=firebase.auth()
const provider= new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage()

export {auth,provider,storage}
export default db;