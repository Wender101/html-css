//! Vai pegar do browser o produto que foi salvo
const sobreProduto1 = localStorage.getItem('sobreProduto')
const sobreProduto2 = JSON.parse(sobreProduto1)
let idp
let okay = false

//! Vai usar a URL da pág como guía para encontrar o produto
function urlPage() {
    let url = window.location.href

    if (sobreProduto2 != null && url.substr(-1) == 'l') {
        let url = `${window.location.href}#${sobreProduto2}`
        window.location.href = url
        location.reload()

    } else if(sobreProduto2 == null && url.substr(-1) == 'l' || url.substr(-1) == 'r') {
        if(url.substr(-1) != 'r') {
            let url = `${window.location.href}#error`
            window.location.href = url
        }
        
    } else if(sobreProduto2 == null && url.substr(-1) != 'l') {
        for(let c = 0; c < 20; c++) {
            let a = url.substr(-c)
            let ab = c.toString()
            let ac = ab.length + 1
            let a2 = a.substr(-ac)
            let a3 = `#${c}`
            
            if(a2 == 1) {
                a2 = `#${a2}`
            }
            
            if(a2 == a3 ) {
                let gg = ac - 1
                b = a2.substr(-gg)
                idp = b
                localStorage.setItem('sobreProduto', idp)
                return
            }
        }

    } else {
        for(let c = 0; c < 20; c++) {
            let a = url.substr(-c)
            let ab = c.toString()
            let ac = ab.length + 1
            let a2 = a.substr(-ac)
            let a3 = `#${c}`
            
            if(a2 == 1) {
                a2 = `#${a2}`
            }

            if(a2 == a3 ) {
                let gg = ac - 1
                b = a2.substr(-gg)
                idp = b
                localStorage.setItem('sobreProduto', idp)
                return
            }
        }
    }
} urlPage()

setTimeout(() => {
    let desc = document.getElementById('desc').innerText
    if(desc == 'Conectando ao banco de dados ;)') {
        document.getElementById('titulo').innerText = 'Algo deu errado :('
        document.getElementById('desc').innerText = 'Parece que nenhum produto foi encotrado. Volte para página anterior e tente novamente.'
        document.getElementById('otherImgs').style.display = 'none'
        let imgProduto = document.getElementById('imgProduto')
        imgProduto.src = 'assets/img/site/error.png'
        imgProduto.style.right = 'auto'
        imgProduto.style.top = '30%'
        imgProduto.style.marginLeft = '50%'
        imgProduto.style.transform = 'translate(-35%)'

        let btnContato = document.getElementById('btnContato')
        
        btnContato.target = '_self'

        document.getElementById('btns').style.display = 'flex'
        document.getElementById('btns').getElementsByTagName('a')[0].querySelector('button').innerText = 'Voltar'
        btnContato.style.margin = 'auto'
        btnContato.addEventListener('click', () => {
            window.history.back()
        })
        document.getElementById('btnCarrinho').style.display = 'none'
        return
    }
}, 8000);

// //! Vai pegar do browser o carrinho
// const carrinho1 = localStorage.getItem('carrinho')
// const carrinho2 = JSON.parse(carrinho1)
// let carrinho = []

// try {
//     for (let c = 0; c < carrinho2.length; c++) {
//         carrinho.push(carrinho2[c])
//     }
    
// } catch {
//     carrinho = []
// }

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
db.collection('Produtos').onSnapshot((data) => {
    data.docs.map(function(val) {
        let p = val.data()

        if(p.id == idp) {
            construirProduto(p.nome, p.desc, p.imagem1, p.imagem2, p.id)
            localStorage.setItem('sobreProduto', p.id)
        }
    })
}) 

//! Vai checar se o produto2 tem algum valor salvo
function construirProduto(nome, desc, imagem1, imagem2, id) {
    if(sobreProduto2 == null) {
        
        document.getElementById('titulo').innerText = 'Algo deu errado :('
        document.getElementById('desc').innerText = 'Parece que nenhum produto foi encotrado. Volte para página anterior e tente novamente.'
        document.getElementById('otherImgs').style.display = 'none'
        let imgProduto = document.getElementById('imgProduto')
        imgProduto.src = 'assets/img/site/error.png'
        imgProduto.style.right = 'auto'
        imgProduto.style.top = '30%'
        imgProduto.style.marginLeft = '50%'
        imgProduto.style.transform = 'translate(-35%)'

        let btnContato = document.getElementById('btnContato')
        
        btnContato.target = '_self'

        document.getElementById('btns').getElementsByTagName('a')[0].querySelector('button').innerText = 'Voltar'
        btnContato.style.margin = 'auto'
        btnContato.addEventListener('click', () => {
            window.history.back()
        })
        document.getElementById('btnCarrinho').style.display = 'none'


    } else {

        let title = document.querySelector('title').innerText = nome


        const imgProduto = document.getElementById('imgProduto')
        imgProduto.src = imagem1
        
        //! img1
        let img1 = document.getElementById('img1')
        img1.src = imagem1

        // * Vai alterar a img principal para a img1
        img1.addEventListener('click', () => {
            imgProduto.src = img1.src
            zoom()
        })

        //! img2
        let img2 = document.getElementById('img2')
        img2.src = imagem2

        // * Vai alterar a img principal para a img2
        img2.addEventListener('click', () => {
            imgProduto.src = img2.src
            zoom() 
        })
        

        //! Vai add o titulo e a descrição
        let titulo = document.getElementById('titulo')
        titulo.className = ''
        titulo.innerText = nome
        document.getElementById('btns').style.display = 'flex'
        document.getElementById('desc').innerText = desc

        //! Vai enviar uma msg ao vendedor informando qual é o produto
        let btnContato = document.getElementById('btnContato')
        
        btnContato.href=`https://api.whatsapp.com/send?phone=+55%2061%2099935-2015&text=Estou interessado nesse produto: ${nome}, link:${imagem1}`

        //!Vai criar o efeito de zoom nas imgs
        function zoom() {

            let small = document.querySelector("#small")
            let mask = document.querySelector("#mask")
            let big = document.querySelector("#big")
            let bigImg = document.querySelector("#big>img")
            let imgProduto = document.querySelector("#imgProduto")
        
            bigImg.src = imgProduto.src

            small.addEventListener("mouseenter",function(){
                if(document.defaultView.innerWidth > 700) {
                    big.style.display = "block" 
                }
            })
            small.addEventListener("mouseleave",function(){
                big.style.display = "none" 
            })

            small.addEventListener("mousemove",function(event){
                try {
                    let pos = small.getBoundingClientRect()
                    let x = event.clientX -pos.x 
                    let y = event.clientY - pos.y 
            
                    if( x< 100 ){ x = 100}
                    if( x > 400 ){  x = 400}
            
                    ( y < 100 )&&( y = 100 )
                    ( y > 400 )&&( y = 400 )
            
                    mask.style.left = (x-100) + "px"
                    mask.style.top = (y-100) + "px"
            
                    bigImg.style.left = -(x-100)*2+"px"
                    bigImg.style.top = -(y-100)*2+"px"

                } catch {}
            })
        } zoom()
    }
}

// //! Vai add ao carrinho
// function addCarrinho(addAgain = false) {
//     const carrinho1 = localStorage.getItem('carrinho')
//     const carrinho2 = JSON.parse(carrinho1)

//     try {
//         for(let c = 0; c <= carrinho.length; c++) {
//             if(sobreProduto2.p == carrinho2[c].Categoria && sobreProduto2.id == carrinho2[c].id && addAgain == false) {
//                 document.getElementById('infAddCarrinho').style.display = 'flex'
//                 return

//             } else if(addAgain != false) {
//                 let produto = {
//                     Categoria: sobreProduto2.p,
//                     id: sobreProduto2.id,
//                     maxC: sobreProduto2.maxC
//                 }
        
//                 carrinho.push(produto)
//                 let salvarCarrinho = JSON.stringify(carrinho)
//                 localStorage.setItem('carrinho', salvarCarrinho)
        
//                 document.getElementById('carrinho').className = 'animation'
        
//                 setTimeout(() => {
//                     document.getElementById('carrinho').className = ''
//                 }, 700)

//                 return
//             }
//         }

//     } catch {

//         let produto = {
//             Categoria: sobreProduto2.p,
//             id: sobreProduto2.id,
//             maxC: sobreProduto2.maxC
//         }

//         carrinho.push(produto)
//         let salvarCarrinho = JSON.stringify(carrinho)
//         localStorage.setItem('carrinho', salvarCarrinho)

//         document.getElementById('carrinho').className = 'animation'

//         setTimeout(() => {
//             document.getElementById('carrinho').className = ''
//         }, 700)
//     }
// }

// //! Vai fachar a section que informa que o produto já está em seu carrinho
// function fecharInfCarrinho() {
//     document.getElementById('infAddCarrinho').style.display = 'none'
// }

// //! Vai adicionar o produto de novo no carrinho
// function addAgain() {
//     addCarrinho(true)
//     fecharInfCarrinho()
// }

// //! Vai colocar na tela produtos relacionados ao escolhido
// function relacionados() {
//     //! Vai sortear 4 números direfentes correspontes aos produtos
//     let numeros = []
//     let max = 4
//     if(sobreProduto2.maxC < 4) max = sobreProduto2.maxC

//     function numero_aleatorio() {
//         while (numeros.length < max) {
//             let aleatoreo = Math.floor(Math.random() * sobreProduto2.maxC)
    
//             if (numeros.indexOf(aleatoreo) == -1) numeros.push(aleatoreo)
//         }
//     } numero_aleatorio()


//     for(let c = 0; c < max; c++) {
//         let id = numeros[c]

//         //! Vai puxar os produtos do "json"
//         fetch(`assets/json/dados.json`).then(resposta => {
//             return resposta.json()
//         }).then(bancoDs => {

//             try {
//                 if(sobreProduto2.p == 'Cabos') {
//                     produtoBancoDs = bancoDs.Cabos[id]
//                     maxC = bancoDs.Cabos.length
//                 } else if(sobreProduto2.p == 'Adaptadores') {
//                     produtoBancoDs = bancoDs.Adaptadores[id]
//                 } else if(sobreProduto2.p == 'Teclados') {
//                     produtoBancoDs = bancoDs.Teclados[id]
//                 } else if(sobreProduto2.p == 'Mouse') {
//                     produtoBancoDs = bancoDs.Mouse[id]
//                 } else if(sobreProduto2.p == 'Gabinetes') {
//                     produtoBancoDs = bancoDs.Gabinetes[id]
//                 } else if(sobreProduto2.p == 'Headset') {
//                     produtoBancoDs = bancoDs.Headset[id]
//                 } else if(sobreProduto2.p == 'Controles') {
//                     produtoBancoDs = bancoDs.Controles[id]
//                 } else if(sobreProduto2.p == 'Fontes') {
//                     produtoBancoDs = bancoDs.Fontes[id]
//                 } else if(sobreProduto2.p == 'MousePad') {
//                     produtoBancoDs = bancoDs.MousePad[id]
//                 } else if(sobreProduto2.p == 'Processadores') {
//                     produtoBancoDs = bancoDs.Processadores[id]
//                 } else if(sobreProduto2.p == 'Memória') {
//                     produtoBancoDs = bancoDs.Memória[id]
//                 } else if(sobreProduto2.p == 'SSD') {
//                     produtoBancoDs = bancoDs.SSD[id]
//                 } else if(sobreProduto2.p == 'Coolers') {
//                     produtoBancoDs = bancoDs.Coolers[id]
//                 } else if(sobreProduto2.p == 'Outros') {
//                     produtoBancoDs = bancoDs.Outros[id]
//                 } else {
//                     produtoBancoDs = 'Error'
//                 }
//             } catch {}

//             let ProdutosRelacionados = document.getElementById('ProdutosRelacionados')
//             let containerProduto = document.createElement('div')
//             let localImgProduto = document.createElement('a')
//             let imgProduto = document.createElement('img')
//             let strong = document.createElement('strong')
//             let p = document.createElement('p')

//             containerProduto.className = 'containerProduto'
//             localImgProduto.className = 'localImgProduto'
//             localImgProduto.href = 'sobre-o-produto.html'
//             imgProduto.className = 'imgProduto'
//             imgProduto.id = id
//             imgProduto.src = 'assets/img/site/error.png'
//             strong.innerText = 'Algo deu errado!'
//             p.innerText = 'Parece que esse produto não foi carregado corretamente.'


//             imgProduto.src = produtoBancoDs[0]
//             strong.innerText = produtoBancoDs[1]
//             p.innerText = produtoBancoDs[2]

//             //? appendChild
//             containerProduto.appendChild(localImgProduto)
//             localImgProduto.appendChild(imgProduto)
//             containerProduto.appendChild(strong)
//             containerProduto.appendChild(p)
//             ProdutosRelacionados.appendChild(containerProduto)

//             //! Vai add a memoria qual produto vai ser analizado pelo usuario 
//             localImgProduto.addEventListener('click', () => {
//                 let produto = {
//                     p: sobreProduto2.p,
//                     id: imgProduto.id,
//                     maxC: sobreProduto2.maxC
//                 }
        
//                 const sobreProduto = JSON.stringify(produto)
//                 localStorage.setItem('sobreProduto', sobreProduto)
//             })

//             //! Vai mudar a img dos produtos ao passar o mause em cima deles
//             imgProduto.addEventListener('mouseenter', (e) => {
//                 const el = e.target.src
//                 const idElemnto = e.target.id
        
//                 var novoLink1 = el.slice(0, -1)
        
//                 if(novoLink1.substr(-1) == 'e') {
//                     var novoLink2 = novoLink1.slice(0, -1)
//                     var novoLink23 = novoLink2.slice(0, -1)
//                     var novoLink3 = novoLink23.slice(0, -1)
//                     var novoLink4 = novoLink3.slice(0, -1)
        
//                 } else {
//                     var novoLink2 = novoLink1.slice(0, -1)
//                     var novoLink3 = novoLink2.slice(0, -1)
//                     var novoLink4 = novoLink3.slice(0, -1)
//                 }
        
//                 const imgSelected = document.getElementById(idElemnto)

//                 if(novoLink1.substr(-1) == 'e') {
//                     imgSelected.src = `${novoLink4}2.jpeg`
        
//                 } else if(novoLink2.substr(-1) == 'j') {
//                     imgSelected.src = `${novoLink4}2.jpg`
        
//                 } else {
//                     imgSelected.src = `${novoLink4}2.png`
//                 }
        
//                 imgProduto.addEventListener('mouseout', () => {
//                     imgSelected.src = el     
//                 })
//             })
//         })
//     }
// } relacionados()