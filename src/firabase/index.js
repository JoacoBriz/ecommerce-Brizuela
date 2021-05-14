import firebase from 'firebase'

const app = firebase.initializeApp({
  apiKey: "AIzaSyBsOlpFwg8uawb3nqHD7ruu6Nf9Ur_s5V0",
  authDomain: "clyde-860ec.firebaseapp.com",
  projectId: "clyde-860ec",
  storageBucket: "clyde-860ec.appspot.com",
  messagingSenderId: "348446131555",
  appId: "1:348446131555:web:e6f1e4d4772078b1f17f56",
  measurementId: "G-6K9TR45PFX"
})

export const getFirebase = () => app

export const getFireStore = () => firebase.firestore(app)