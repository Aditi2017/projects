import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAE6nro2_Nt2sxgPEIkawVXxVT5Y86kg88",
    authDomain: "fir-project-6dc63.firebaseapp.com",
    projectId: "fir-project-6dc63",
    storageBucket: "fir-project-6dc63.appspot.com",
    messagingSenderId: "532481546510",
    appId: "1:532481546510:web:d357881aa57eb4f0989f5f",
    measurementId: "G-K3EVZNJ947",
  
});


const auth = firebase.auth();

export { auth };