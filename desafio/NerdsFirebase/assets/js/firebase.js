var firebaseConfig = {
apiKey: "AIzaSyASXflrIBeCuJNyBzj_PMLUK4ogiXNrRxM",
authDomain: "testefirebase-f5ba5.firebaseapp.com",
projectId: "testefirebase-f5ba5",
storageBucket: "testefirebase-f5ba5.appspot.com",
messagingSenderId: "74488269277",
appId: "1:74488269277:web:920d6da919c6fa2e1bce34"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

//? My code
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

function login() {
    auth.signInWithPopup(provider)
}

const db = firebase.firestore()

auth.onAuthStateChanged((val) => {
    if(val) {
        const btnLogin = document.getElementById('btnLogin')
        btnLogin.innerText = 'Logado'
        const msgLogin = document.getElementById('msgLogin')
        msgLogin.style.display = 'block'
        document.getElementById('pMsgLogin').innerText = `Bem Vindo(a) ${val.displayName}! ;)`

        setTimeout(() => {
            msgLogin.style.display = 'none'
        }, 3000);

        setInterval(() => {
            var viewport = visualViewport.width
            if(viewport > 535 && msgLogin.style.display == 'block') {
                window.document.getElementById("subir").style.bottom = '10%'

            } else if(viewport < 535 && msgLogin.style.display == 'block') {
                window.document.getElementById("subir").style.bottom = '15%'
            } 
        }, 10)

        fecharMenu()
    }
})

//! Fechar msg
function fecharMsg() {
    const msgLogin = document.getElementById('msgLogin')
    msgLogin.style.display = 'none'

    let title = document.querySelector('title').innerText
    if( title == 'Carrinho') {
        subir.style.bottom = '8%'
    } else {
        window.document.getElementById("subir").style.bottom = '2%'
    }
    
} fecharMsg()