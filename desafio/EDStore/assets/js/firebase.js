var firebaseConfig = {
    apiKey: "AIzaSyAUq3rfngp67A69QgZ6j_BpT1zrcC-6qZ4",
    authDomain: "edstore-18556.firebaseapp.com",
    projectId: "edstore-18556",
    storageBucket: "edstore-18556.appspot.com",
    messagingSenderId: "530306676037",
    appId: "1:530306676037:web:04903b6f8257e1de317a2c"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

//? My code
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const db = firebase.firestore()

let trocarDeConta = false
let email
function login() {
    trocarDeConta = true
    auth.signInWithPopup(provider)
}

auth.onAuthStateChanged((val) => {
    if(trocarDeConta == true) {
        location.reload()
    }

    email = val.email

    let perfilEencontrado = false
    //? Caso o user n tenha conta, após logar em uma será criado o seu perfil no site
    db.collection('User').onSnapshot((data) => {
        data.docs.map(function(valCarrinho) {
            let User = valCarrinho.data()
            if(User.Email == email) {
                perfilEencontrado = true
            }

        })
    })

    setTimeout(() => {
        if(perfilEencontrado == false) {

            let Perquisa = []
            let objPesquisa = {
                Perquisa: Perquisa
            }

            let objPerfilUser = {
                APesquisaNaoEncontrada: objPesquisa,
                Carrinho: [],
                Chat: [],
                Email: email
            }

            db.collection('User').add(objPerfilUser)
        }
    }, 4000)
})