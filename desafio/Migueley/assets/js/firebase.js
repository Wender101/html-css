const firebaseConfig = {
    apiKey: "AIzaSyB2L9DSpNkipXQFswkHImAmoqx4xK8Y0IM",
    authDomain: "flutterflowfirebase-d5651.firebaseapp.com",
    databaseURL: "https://flutterflowfirebase-d5651-default-rtdb.firebaseio.com",
    projectId: "flutterflowfirebase-d5651",
    storageBucket: "flutterflowfirebase-d5651.appspot.com",
    messagingSenderId: "887145766105",
    appId: "1:887145766105:web:fbd4332aea58cc7ca9f2c8"
}

firebase.initializeApp(firebaseConfig)

//? My code
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const db = firebase.firestore()
const storage = firebase.storage()

let email = undefined
let contaCriada = false

//? Vai logar na conta
auth.onAuthStateChanged((val) => {
    try {
        email = val.email
    } catch{}
})

function login() {
    auth.signInWithPopup(provider).then((result) => {
        auth.onAuthStateChanged((val) => {
            email = val.email
            checar()
        })
    })


    function checar() {

        let encontrado = false // Variável de controle para verificar se o dado foi encontrado
        let encontrado2 = false
        let temCargo = false
        let contaEncontrada = true //? Vai checar 1 vez se o user tem uma conta

        db.collection('UsersMigueley').onSnapshot((data) => {
        data.docs.map(function(valor) {
            let UsersMigueley = valor.data()

            if (UsersMigueley.EmailUser == email && contaEncontrada == true) {
                // Faça algo se encontrar o dado
                encontrado2 = true
                console.log('Tem conta')
                setTimeout(() => {
                    window.location.href = 'Noticias.html'
                }, 3000)
            }

            setTimeout(() => {
                contaEncontrada = false
            }, 3000)
        })

            //? Caso a conta não for encontrada
            if (!encontrado2) {
                // Faça algo se não encontrar o dado
                db.collection('ConfigMigueley').onSnapshot((data) => {
                data.docs.map(function(valor) {
                    let ConfigMigueley = valor.data()
        
                    for(let c = 0; c < ConfigMigueley.PessoalAltorizado.length; c++) {
                        if (ConfigMigueley.PessoalAltorizado[c].EmailUser == email) {
                            // Faça algo se encontrar o dado
                            encontrado = true
                            console.log('Email encontrada')
                            
                            if(ConfigMigueley.PessoalAltorizado[c].Cargo != 'User' && contaCriada == false) {
                                contaCriada = true
                                temCargo = true

                                //? Vai criar a conta para o user
                                let contaUser = {
                                    EmailUser: email,
                                    Cargo: ConfigMigueley.PessoalAltorizado[c].Cargo,
                                    Nome: document.querySelector('input').value,
                                    EstadoDaConta: 'Normal',
                                    Noticias: []
                                }

                                db.collection('UsersMigueley').add(contaUser)
                            }
                        }
                    }
                })
        
                    if (!encontrado) {
                        // Faça algo se não encontrar o dado
                        // window.location.href = 'Home.html'
                        alert('Esta conta não foi encontrada!')
                        console.log('Não tem conta')
                    } else if(!temCargo) {
                        alert('Entrada negada: esta conta não tem o cargo necessário.')
                    }
                })
            }
        })
    }
}
