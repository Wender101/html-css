var firebaseConfig = {
    apiKey: "AIzaSyB2DmFER7XsCIrvYNcOucIccw7R-vaQD6w",
    authDomain: "socialmidia-d8f0b.firebaseapp.com",
    projectId: "socialmidia-d8f0b",
    storageBucket: "socialmidia-d8f0b.appspot.com",
    messagingSenderId: "942332600242",
    appId: "1:942332600242:web:51666a5706e87dced48eab"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

//? My code
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const db = firebase.firestore()

var logado = false
function login() {
    logado = true
    auth.signInWithPopup(provider)
}

var email
auth.onAuthStateChanged((val) => {
    if(logado == true) {
        //? Vai mandar o user para a pagina de personalização da conta
        const link = location.origin + location.pathname
        window.location.href = link.replace('login.html', '') + 'Personalizar.html'
    }

    try {
        email = val.email
    } catch {}
})
