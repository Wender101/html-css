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

let email
auth.onAuthStateChanged((val) => {
    if(val.email) {
        if(email != undefined) {
            location.reload()

        } else {
            const btnLogin = document.getElementById('btnLogin')
            btnLogin.innerText = 'Conectado'
            document.getElementById('imgUser').src = val.photoURL

            email = val.email
    
            let a = document.createElement('a')
            let li = document.getElementById('li')
    
            a.innerText = 'Todos'
            a.href = 'todos-os-produtos.html'
            li.style.display = 'block'
    
            if(window.visualViewport.width <= 480) {
                document.getElementById('hr').style.display = 'block'
            }
            li.appendChild(a)
        }
    }
})
