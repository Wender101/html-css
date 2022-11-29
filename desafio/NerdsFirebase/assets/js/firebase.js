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

let trocarDeConta = false
function login() {
    trocarDeConta = true
    auth.signInWithPopup(provider)
}

const db = firebase.firestore()

let email
let reload = false
auth.onAuthStateChanged((val) => {
    if(val.email) {
        if(email != undefined && trocarDeConta == true || reload == true) {
            location.reload()

        } else {
            //! Vai mostrar que vc está logado
            const btnLogin = document.getElementById('btnLogin')
            btnLogin.innerText = 'Conectado'
            document.getElementById('imgUser').src = val.photoURL

            email = val.email
            trocarDeConta = false
        }
    } 

     //! Vai add o link para a pág de Adms
    if(val.email == 'wendernatanael2019@gmail.com') {
        try {
        let a = document.createElement('a')
        let li = document.getElementById('li')

            a.innerText = 'Todos'
            a.href = 'todos-os-produtos.html'
            li.style.display = 'block'
            
            
            //! Vai acionar o hr apenas nos dispositivos mobiles
            if(window.visualViewport.width <= 480) {
                document.getElementById('hr').style.display = 'block'
            }
            li.appendChild(a)
        } catch {}
    }
})

try {
    document.getElementById('btnCarrinho').addEventListener('click', () => {
        if(email == undefined)  {
            reload = true

            localStorage.setItem('reload', reload)
        }
    })
} catch {}