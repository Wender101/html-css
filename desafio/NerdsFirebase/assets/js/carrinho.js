function login() {
    auth.signInWithPopup(provider)
}

let tCarrinho = 0
//! Checar se ouve alteração no banco de dados
auth.onAuthStateChanged((valorEmail) => {
    db.collection('Carrinho').onSnapshot((data) => {
        data.docs.map(function(valCarrinho) {
            let pCarrinho = valCarrinho.data()

            //! Vai procurar um carrinho com o seu email
            if(valorEmail.email == pCarrinho.email) {
                db.collection('Produtos').onSnapshot((data) => {
                    data.docs.map(function(valProdutos) {

                        let pProdutos = valProdutos.data()
                        for (let c = 0; c < pCarrinho.carrinho.length; c++) {
                            if(pCarrinho.carrinho[c].id == pProdutos.id) {
                                tCarrinho = pCarrinho.carrinho.length
                                //! Vai chamar a função que vai adicionar os produtos na tela
                                criaProdutos(pProdutos.nome, pProdutos.desc, pProdutos.imagem1, pProdutos.imagem2, pProdutos.id, pProdutos.classe, pProdutos.valor, pProdutos.desconto)

                            }
                        }
                    })
                })
            }
        })
    })
})

let tamanhoCarrinho = 0
let ValorComDesconto = 0.00
let valorAMenos = 0.00
let idSpan
let idP
let checarRepido = []
let cloneCarrinho = []
let idContagem = 0
//! Função que vai colocar os produtos na tela
function criaProdutos(nome, desc, imagem1, imagem2, idproduto, classe, valor, desconto) {
    document.getElementById('carregando').style.display = 'none'
    if(checarRepido.length == idContagem) {
        let obj = {
            id: idproduto
        }
        cloneCarrinho.push(obj)

        if(valor != undefined && desconto != undefined) {
            //! Vai calcular o valor com o desconto implementado
            let valor2 = parseFloat(valor)
            let desconto2 = parseFloat(desconto)
            ValorComDesconto += (((desconto2 * valor2) / 100) - valor2) * -1

            document.getElementById('total').innerText = `Valor total: R$${ValorComDesconto.toFixed(2)}`
        }

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
        
        //! Vai checar se o produto é repido e vai diferencia-lo pelo id
        checarRepido.push(idproduto)
        let testId = -1
        for(let c = 0; c <= tCarrinho; c++) {
            if(checarRepido[c] == idproduto) {
                testId++
            }

            if(c == tCarrinho) {
                containerProduto.id = `containerProduto${idproduto}-${testId}`
                span.id = `${idproduto}-${testId}`
                testId = 0
            }
        }

        containerProduto.classList = 'containerProduto'
        localImgProduto.className = 'localImgProduto'
        span.classList = 'x'
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
            idP = idproduto
        })

        //! Vai add a memoria qual produto vai ser analizado pelo usuario 
        localImgProduto.addEventListener('click', () => {
            localStorage.setItem('sobreProduto', idproduto)
        })
        idContagem++
    }
}

setTimeout(() => {
    if(document.getElementById('carregando').style.display != 'none') {
        document.getElementById('recado').style.display = 'block'
        document.getElementById('carregando').style.display = 'none'
    }
}, 8000)

//! Vai remover o produto do carrinho
function removerDoCarrinho() {
    let feito = false
    auth.onAuthStateChanged((valorEmail) => {
        db.collection('Carrinho').onSnapshot((data) => {
            data.docs.map(function(valCarrinho) {
                let pCarrinho = valCarrinho.data()

                //! Vai descontar o preço do produto removido no valor total
                db.collection('Produtos').onSnapshot((data) => {
                    data.docs.map(function(valorProduto) {
                        let pProduto = valorProduto.data()
                        
                        if(idP == pProduto.id && feito == false) {
                            
                            //! Vai calcular o valor com o desconto implementado
                            let valor2 = parseFloat(pProduto.valor)
                            let desconto2 = parseFloat(pProduto.desconto)
                            valorAMenos = (((desconto2 * valor2) / 100) - valor2) * -1
                            
                            let res = ValorComDesconto.toFixed(2) - valorAMenos.toFixed(2)
                            ValorComDesconto = res
                            document.getElementById('total').innerText = `Valor total: R$${res.toFixed(2)}`
                            feito = true
                        }
                    })
                })

                //! Vai procurar um carrinho com o seu email
                if(valorEmail.email == pCarrinho.email) {
                     
                    //! Vai remover o produto do banco de dados e da tela do usuario
                    for (let c = 0; c <= pCarrinho.carrinho.length; c++) {
                        try {
                            if(cloneCarrinho[c].id == idP) {
                                cloneCarrinho.splice(c, 1)
                                db.collection('Carrinho').doc(valCarrinho.id).update({carrinho: cloneCarrinho})
                                fecharInfRemover()
                                document.getElementById('carregando').style.display = 'flex'
    
                                //! Vai apagar o produto da tela do user
                                document.getElementById('containerProduto' + idSpan).remove()
                                idContagem--
                            }
                        } catch {}
                    }
                }

            })
        })
    })
}

//! Vai limpar o carrinho(remover todos os produtos)
function limparCarrinho() {
    auth.onAuthStateChanged((valEmail) => {
        db.collection('Carrinho').onSnapshot((data) => {
            data.docs.map(function(valCarrinho) {
                let pCarrinho = valCarrinho.data()

                if(pCarrinho.email == valEmail.email) {
                    cloneCarrinho = []
                    db.collection('Carrinho').doc(valCarrinho.id).update({carrinho: cloneCarrinho})
                    fecharInfRemover()
                    document.getElementById('carregando').style.display = 'flex'

                     //! Vai apagar todos os produtos da tela do user
                     setTimeout(() => {
                        document.querySelector('main').innerHTML = ''
                        document.getElementById('recado').style.display = 'block'
                    }, 450)
                }
            })
        })
    })
}

//! Vai fechar a msg "remover o produto do carrinho"
function fecharInfRemover() {
    document.getElementById('infRemover').style.display = 'none'
}

//! Vai melhorar a responsividade para algumas telas
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
}, 100)