var firebaseConfig = {
    apiKey: "AIzaSyCbbYQdKkfwptkSktPJA-YsAByLV_UfxvI",
    authDomain: "zapozapo2bigzero.firebaseapp.com",
    projectId: "zapozapo2bigzero",
    storageBucket: "zapozapo2bigzero.appspot.com",
    messagingSenderId: "1063410616159",
    appId: "1:1063410616159:web:a7de262ad38838530fd8ea"
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
