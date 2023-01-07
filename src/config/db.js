import firebase from 'firebase'
import 'firebase/firestore'
let config = {
    apiKey: "AIzaSyDBPzqY45ecFXlx6pJfdupVa62kmhq9_sc",
    authDomain: "vsi-svoi-c8027.firebaseapp.com",
    databaseURL: "https://vsi-svoi-c8027-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "vsi-svoi-c8027",
    storageBucket: "vsi-svoi-c8027.appspot.com",
    messagingSenderId: "746253024276",
    appId: "1:746253024276:web:b0103122c47626f9b87b01",
    measurementId: "G-4MNZDRY0GC"
};
export const db = firebase.initializeApp(config).firestore()
