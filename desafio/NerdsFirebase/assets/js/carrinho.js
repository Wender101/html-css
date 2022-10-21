let total = 0

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

let arrayCarrinho = []
let carregado = false 
auth.onAuthStateChanged((valor) => {
    db.collection('Carrinho').onSnapshot((data) => {
        data.docs.map(function(val) {
            let p = val.data()
    
            if(p.email == valor.email) {
                for(let c = 0; c < 10; c++) {
                    try {
                        criaProdutos(p.carrinho[c].nome, p.carrinho[c].desc, p.carrinho[c].imagem1, p.carrinho[c].id)

                        let objCarrinhoBD = {
                            classe: p.carrinho[c].classe,
                            imagem1: p.carrinho[c].imagem1,
                            imagem2: p.carrinho[c].imagem2,
                            nome: p.carrinho[c].nome,
                            desc: p.carrinho[c].desc,
                            id: p.carrinho[c].id
                        }

                        arrayCarrinho.push(objCarrinhoBD)

                    } catch {
                        return
                    }   
                }

            } else {
                let footer = document.querySelector('footer')
                footer.style.position = 'absolute'
                footer.style.bottom = '0px'
            }
        })
    }) 
})

if(total <= 0) {
    document.querySelector('main').id = 'main'
}

let id = 0
let idSpan
function criaProdutos(nome, desc, imagem1, idproduto) {
    document.getElementById('recado').style.display = 'none'

    const main = document.querySelector('main')
    const containerProduto = document.createElement('div')
    const localImgProduto = document.createElement('a')
    const span = document.createElement('span')
    const imgProduto = document.createElement('img')
    const strong = document.createElement('strong')
    const p = document.createElement('p')
    
    containerProduto.classList = 'containerProduto'
    containerProduto.id = `containerProduto${id}`

    localImgProduto.className = 'localImgProduto'
    span.classList = 'x'
    span.id = id
    localImgProduto.href = 'sobre-o-produto.html'
    imgProduto.className = 'imgProduto'
    imgProduto.src = imagem1
    span.innerText = 'x'
    strong.innerHTML = nome
    p.innerText = desc

    //! AppendChild
    localImgProduto.appendChild(imgProduto)
    containerProduto.appendChild(span)
    containerProduto.appendChild(localImgProduto)
    containerProduto.appendChild(strong)
    containerProduto.appendChild(p)
    main.appendChild(containerProduto)

    //! Vai perguntar se o user realmente quer remover o produto do carrinho
    span.addEventListener('click', () => {
        document.getElementById('infRemover').style.display = 'flex'
        idSpan = span.id
    })

    //! Vai add a memoria qual produto vai ser analizado pelo usuario 
    localImgProduto.addEventListener('click', () => {
        localStorage.setItem('sobreProduto', idproduto)
    })

    id++
    document.getElementById('total').innerText = `Total de Produtos: ${id}`
}

// //! Vai remover o produto do carrinho
function removerDoCarrinho() {
    let feito = false
    auth.onAuthStateChanged((valEmail) => {
        db.collection('Carrinho').onSnapshot((data) => {
            data.docs.map(function(valCarrinho) {
                let p = valCarrinho.data()

                console.log(arrayCarrinho, arrayCarrinho.splice(idSpan, 1));

                if(p.email == valEmail.email && feito == false) {
                    db.collection('Carrinho').doc(valCarrinho.id).update({carrinho: arrayCarrinho.splice(idSpan, 1)})
                    feito = true
                }
            })
        })
    })
}

//! Vai fechar a msg "remover o produto do carrinho"
function fecharInfRemover() {
    document.getElementById('infRemover').style.display = 'none'
}

function limparCarrinho() {
    let feito = false
    auth.onAuthStateChanged((valEmail) => {
        db.collection('Carrinho').onSnapshot((data) => {
            data.docs.map(function(valCarrinho) {
                let p = valCarrinho.data()

                if(p.email == valEmail.email && feito == false) {
                    db.collection('Carrinho').doc(valCarrinho.id).update({carrinho: arrayCarrinho = []})
                    feito = true
                }
            })
        })
    })
}