let total = 0

function login() {
    auth.signInWithPopup(provider)
}

let tamanhoCarrinho = 0
auth.onAuthStateChanged((valor) => {
    db.collection('Carrinho').onSnapshot((data) => {
        data.docs.map(function(val) {
            let p = val.data()
    
            if(p.email == valor.email) {
                //! vai checar se houve alterações no carrinho(excluir / adicionar) por outro dispositivo
                setInterval(() => {
                    if(tamanhoCarrinho != 0 && p.carrinho.length != tamanhoCarrinho)location.reload()
                }, 10)

                //! vai colocar os produtos na tela, apenas quando o banco de dados estiver alinhado com o site
                if(tamanhoCarrinho == 0 || p.carrinho.length == tamanhoCarrinho) {
                    tamanhoCarrinho = p.carrinho.length
                    document.getElementById('carregando').style.display = 'none'
                    for(let c = 0; c < p.carrinho.length; c++) {
                        try {
                            db.collection('Produtos').onSnapshot((data) => {
                                data.docs.map(function(val) {
                                    if(p.carrinho[c].id == val.data().id) {
                                        criaProdutos(val.data().nome, val.data().desc, val.data().imagem1, val.data().imagem2, val.data().id, val.data().classe, val.data().valor, val.data().desconto)
                                    }
                                })
                            })

                        } catch {
                            return
                        }   
                    }
                }
            }
        })
    }) 
})

if(total <= 0) {
    document.querySelector('main').id = 'main'
}

let id = 0
let id2 = 0
let idSpan
let arrayCarrinho = []
let ValorComDesconto = 0.00
let valorAMenos = 0.00
let feitoRemover = false
function criaProdutos(nome, desc, imagem1, imagem2, idproduto, classe, valor, desconto) {

    if(valor != undefined || desconto != undefined) {
        //! Vai calcular o valor com o desconto implementado
        let valor2 = parseFloat(valor)
        let desconto2 = parseFloat(desconto)
        ValorComDesconto += (((desconto2 * valor2) / 100) - valor2) * -1
    }

    if(id2 == id) {
        let objCarrinhoBD = {
            classe: classe,
            imagem1: imagem1,
            imagem2: imagem2,
            nome: nome,
            desc: desc,
            id: idproduto
        }
        
        arrayCarrinho.push(objCarrinhoBD)
        
        //! Vai deixar o footer travado na parte de baixo
        document.querySelector('footer').style.position = 'relative'
        document.querySelector('footer').style.bottom = 'auto'

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

        //!Vai trocar a img do produto ao passar o mouse em cima
        imgProduto.addEventListener('mouseenter', () => {
            imgProduto.src = imagem2
        })

        imgProduto.addEventListener('mouseout', () => {
            imgProduto.src = imagem1
        })

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
        id2++
        setInterval(() => {
            let res = ValorComDesconto - valorAMenos
            document.getElementById('total').innerText = `Valor total: R$${res.toFixed(2)}`

            if(id2 == 0) {
                setTimeout(() => {
                    document.getElementById('recado').style.display = 'block'
                }, 600)
            }
        }, 100);
    }
}

setTimeout(() => {
    let recado = document.getElementById('recado')
    if(recado.innerText == 'Seu carrinho se encontra vazio, adicione algum produto a ele.') {
        document.getElementById('carregando').style.display = 'none'
    }
}, 8000)

// //! Vai remover o produto do carrinho
function removerDoCarrinho() {
    auth.onAuthStateChanged((valEmail) => {
        db.collection('Carrinho').onSnapshot((data) => {
            data.docs.map(function(valCarrinho) {
                let p = valCarrinho.data()

                // if(p.id == arrayCarrinho[idSpan]) {
                //     if(valor != undefined || desconto != undefined) {
                //         //! Vai calcular o valor com o desconto implementado
                //         let valor2 = parseFloat(p.valor)
                //         let desconto2 = parseFloat(p.desconto)
                //         valorAMenos = ((((desconto2 * valor2) / 100) - valor2) * -1) - ValorComDesconto
                //     }
                // }

                if(p.email == valEmail.email && feitoRemover == false) {
                    arrayCarrinho.splice(idSpan, 1)
                    db.collection('Carrinho').doc(valCarrinho.id).update({carrinho: arrayCarrinho})
                    fecharInfRemover()
                    document.getElementById('carregando').style.display = 'flex'
                    id2--

                    //! Vai apagar o produto da tela do user
                    document.getElementById('containerProduto' + idSpan).remove()
                    feitoRemover = true
                }

            })
        })
    })
}

function limparCarrinho() {
    let feito = false
    auth.onAuthStateChanged((valEmail) => {
        db.collection('Carrinho').onSnapshot((data) => {
            data.docs.map(function(valCarrinho) {
                let p = valCarrinho.data()

                if(p.email == valEmail.email && feito == false) {
                    arrayCarrinho = []
                    db.collection('Carrinho').doc(valCarrinho.id).update({carrinho: arrayCarrinho})
                    fecharInfRemover()
                    document.getElementById('carregando').style.display = 'flex'
                    
                    //! Vai apagar o produto da tela do user
                    setTimeout(() => {
                        document.querySelector('main').innerHTML = ''
                    }, 450)
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

setInterval(() => {
    let recado = document.getElementById('recado')
    let tamanhoTela = window.visualViewport.width

    try {
        if(recado.style.display != 'none' && tamanhoTela <= 537) {
            document.getElementById('classProduto').style.width = '100%'
            document.getElementById('main').style.width = '100%'
            console.log(tamanhoTela)
    
        } else {
            document.getElementById('classProduto').style.width = ''
            document.getElementById('main').style.width = ''
        }
    } catch {}
}, 100);