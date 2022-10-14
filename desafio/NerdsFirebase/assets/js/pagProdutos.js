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
    
    if(val.email == 'wendernatanael2019@gmail.com') {
        let configs = document.getElementById('configs')
        let btnAdicionarProduto = document.createElement('button')
        let span = document.createElement('span')

        btnAdicionarProduto.id = 'btnAdicionarProduto'
        span.innerText = '+'

        //! AppendChild
        btnAdicionarProduto.appendChild(span)
        configs.appendChild(btnAdicionarProduto)

        //! Eventos de click
        btnAdicionarProduto.addEventListener('click', () => {
            document.getElementById('addProduto').style.display = 'flex'
        })

        addProduto.addEventListener('click', (e) => {
            let el = e.target.id
            if(el == 'addProduto') {
                document.getElementById('addProduto').style.display = 'none'
            }
        })

    }
})
//! Vai cancelar a ação de adiconar um produto
function cancelar() {
    document.getElementById('addProduto').style.display = 'none'
    document.getElementById('alert').style.display = 'none'
    for(let c = 0; c < 4; c++) {
        let obrigatorios = document.getElementsByClassName('obrigatorios')[c]
        obrigatorios.style.animation = 'none'
    }

    limpar()
}

function limpar() {
    let nomeProduto = document.getElementById('nomeProduto').value = ''
    let descProduto = document.getElementById('descProduto').value = ''
    let linkImg1 = document.getElementById('linkImg1').value = ''
    let linkImg2 = document.getElementById('linkImg2').value = ''
}

//! vai adicionar o produto
let id = 0
function construirProduto(classe, nome, desc, imagem1, imagem2 = imagem1, id) {
    if(classe == document.querySelector('title').innerText) {
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
}

//! Função q vai add
function adicionarProduto() {
    let select = document.getElementById('classe').value
    let nomeProduto = document.getElementById('nomeProduto').value
    let descProduto = document.getElementById('descProduto').value
    let linkImg1 = document.getElementById('linkImg1').value
    let linkImg2 = document.getElementById('linkImg2').value

    if(linkImg2 == '') {
        linkImg2 = linkImg1

    }
    
    if(nomeProduto == '' || descProduto == '' || linkImg1 == '') {
        document.getElementById('alert').style.display = 'block'
        for(let c = 0; c < 4; c++) {
            let obrigatorios = document.getElementsByClassName('obrigatorios')[c]
            obrigatorios.style.animation = '1s obrigatorios infinite linear'
        }
        return

    } else {
        id++
        addNoBancoDeDados(select, nomeProduto, descProduto, linkImg1, linkImg2, id)
        document.getElementById('addProduto').style.display = 'none'
    }

    limpar()
}

function addNoBancoDeDados(classe, nome, desc, imagem1, imagem2, id) {
    let objProdutos = {
        classe,
        imagem1,
        imagem2,
        nome,
        desc,
        id
    }
    db.collection('Produtos').add(objProdutos)
}

db.collection('Produtos').onSnapshot((data) => {
    const main = document.querySelector('main')
    main.innerHTML = ''
    data.docs.map(function(val) {
        let p = val.data()
        construirProduto(p.classe, p.nome, p.desc, p.imagem1, p.imagem2, p.id)
        id = p.id
    })
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