import { initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore'

export const firebaseApp = initializeApp({
    apiKey: "AIzaSyDBPzqY45ecFXlx6pJfdupVa62kmhq9_sc",
    authDomain: "vsi-svoi-c8027.firebaseapp.com",
    projectId: "vsi-svoi-c8027",
    storageBucket: "vsi-svoi-c8027.appspot.com",
    messagingSenderId: "746253024276",
    appId: "1:746253024276:web:b0103122c47626f9b87b01",
    measurementId: "G-4MNZDRY0GC"
})
const db = getFirestore(firebaseApp)

// here we can export reusable database references
export const dbRef = collection(db, 'Flats')
