const produtoPesquisado1 = localStorage.getItem('produtoPesquisado')
const produtoPesquisado2 = JSON.parse(produtoPesquisado1)

// Vai mudar o titulo da pág para o nome da classe pesquisada
document.querySelector('title').innerText = produtoPesquisado2[0]
document.getElementById('classProduto').innerText = produtoPesquisado2[0]

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

//! vai adicionar o produto
let id = 0
db.collection('Produtos').onSnapshot((data) => {
    const main = document.querySelector('main')
    main.innerHTML = ''
    data.docs.map(function(val) {
        let p = val.data()

        if(p.classe == document.querySelector('title').innerText) {
            document.getElementById('carregando').style.display = 'none'
            construirProduto(p.classe, p.nome, p.desc, p.imagem1, p.imagem2, p.id)
            
            if(p.id > id) {
                id = p.id
            }
        }

        setTimeout(() => {
            let carregando = document.getElementById('carregando')
            if(carregando.style.display != 'none') {
                carregando.style.display = 'none'
                document.getElementById('classProduto').innerText = 'Parece que algo deu errado :('
            }
        }, 8000);
    })
}) 

function construirProduto(classe, nome, desc, imagem1, imagem2 = imagem1, id) {
    const main = document.querySelector('main')
    const containerProduto = document.createElement('div')
    const localImgProduto = document.createElement('a')
    const imgProduto = document.createElement('img')
    const strong = document.createElement('strong')
    const p = document.createElement('p')

    containerProduto.className = 'containerProduto'
    localImgProduto.className = 'localImgProduto'
    localImgProduto.href = 'sobre-o-produto.html'
    imgProduto.className = 'imgProduto'

    try {
        imgProduto.src = imagem1
        strong.innerHTML = nome
        p.innerText = desc
        
    } catch {
        imgProduto.src = 'assets/img/site/error.png'
        strong.innerText = 'Algo deu errado!'
        p.innerText = 'Parece que esse produto não foi carregado corretamente'
    }

    //! AppendChild
    localImgProduto.appendChild(imgProduto)
    containerProduto.appendChild(localImgProduto)
    containerProduto.appendChild(strong)
    containerProduto.appendChild(p)
    main.appendChild(containerProduto)

    //!Vai trocar a img do produto ao passar o mouse em cima
    imgProduto.addEventListener('mouseenter', () => {
        imgProduto.src = imagem2
    })

    imgProduto.addEventListener('mouseout', () => {
        imgProduto.src = imagem1
    })

    //! Ao clicar na img do produto
    localImgProduto.addEventListener('click', () => {
        localStorage.setItem('sobreProduto', id)
    })
}

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