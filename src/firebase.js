import firebase from "firebase/compat/app"
import "firebase/compat/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyBPaDxilVjO1wksAJcUJgZXfY8QvLzRn9I",

    authDomain: "auth-test-f0145.firebaseapp.com",
  
    projectId: "auth-test-f0145",
  
    storageBucket: "auth-test-f0145.appspot.com",
  
    messagingSenderId: "540599719620",
  
    appId: "1:540599719620:web:c97c9903128dad29ca9b91"
  
})

export const auth = app.auth()
export default app