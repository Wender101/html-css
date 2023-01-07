let valUser
let carrinhoCarregado = false
function carregarCarrinho() {
    db.collection('Carrinho').onSnapshot((data) => {
        data.docs.map(function(val) {
            let Carrinho = val.data()

            if(Carrinho.EmailUser == email && carrinhoCarregado == false) {
                carrinhoCarregado = true
                valUser = val.id
                for(let c = 0; c < Carrinho.Carrinho.length; c++) {

                    db.collection('Produtos').onSnapshot((data) => {
                        data.docs.map(function(val) {
                            let Produtos = val.data()

                            try {
                                if(Produtos.Id == Carrinho.Carrinho[c].Id) {
                                    document.getElementsByClassName('text')[0].style.display = 'block'
                                    document.getElementById('fala').style.display = 'none'

                                    criaProduto(Produtos.Img1, Produtos.Img2, Produtos.Img3, Produtos.Img4, Produtos.Nome, Produtos.Desc , Produtos.Valor, Produtos.Desconto, Produtos.Id)
                                }
                                
                            } catch {}
                        })
                    })
                }
            }
        })
    })
} carregarCarrinho()

let cloneCarrinhoAtual = []
let prodSelecionadoParaRemover
let idSelecionado
let contador = 0
function criaProduto(Img1 ,Img2, Img3, Img4, Nome, Desc, Valor, Desconto, Id) {
    let obj = {
        Id: Id
    }
    cloneCarrinhoAtual.push(obj)

    let main = document.querySelector('main')
    let prod = document.createElement('div')
    let localImg = document.createElement('div')
    let imgProduto = document.createElement('img')
    let sobreProd = document.createElement('div')
    let nameProd = document.createElement('p')
    let p = document.createElement('p')
    let valorStrong = document.createElement('strong')
    let valorSemDescontoT = document.createElement('span')
    let valorSalvo = document.createElement('span')
    let btnExluirProduto = document.createElement('button')
    let x = document.createElement('span')

    //? Class
    prod.className = 'prod'
    prod.id = 'prod' + contador
    localImg.className = 'localImg'
    imgProduto.className = 'imgProduto'
    sobreProd.className = 'sobreProd'
    nameProd.className = 'nameProd'
    valorStrong.className = 'valor'
    valorSemDescontoT.className = 'valorSemDescontoT'
    valorSalvo.className = 'valorSalvo'
    btnExluirProduto.className = 'btnX'
    x.className = 'xRemover'

    //?---
    imgProduto.src = Img1
    nameProd.innerText = Nome
    x.innerText = 'x'

    if(Desconto <= 0) {
        Desconto = 0
    }
    let valorComDesconto = (((Desconto * Valor) / 100) - Valor) * -1
    var res = valorComDesconto
    if(Desconto != 0) {
        res = (Valor - valorComDesconto) + valorComDesconto
    }

    valorStrong.innerText = 'R$' + valorComDesconto.toFixed(2)
    valorSemDescontoT.innerText = 'R$' + parseInt(Valor).toFixed(2)
    valorSalvo.innerText = 'Salvo - R$' + (res - valorComDesconto).toFixed(2)
    
    //? AppendChild
    btnExluirProduto.appendChild(x)
    p.appendChild(valorStrong)
    p.appendChild(valorSemDescontoT)
    localImg.appendChild(imgProduto)
    sobreProd.appendChild(nameProd)
    sobreProd.appendChild(p)
    sobreProd.appendChild(valorSalvo)
    prod.appendChild(btnExluirProduto)
    prod.appendChild(localImg)
    prod.appendChild(sobreProd)
    main.appendChild(prod)

    //? Funções de click
    prod.addEventListener('click', (e) => {
        let el = e.target.className

        if(el != 'btnX' && el != 'xRemover') {
            localStorage.setItem('sobreProduto', Id)
            if(location.host == '127.0.0.1:5500') {
                location.pathname = '/Sobre-Produto.html'
                
            } else if(location.host == 'wender101.github.io') {
                location.href = 'https://wender101.github.io/html-css/desafio/EDStore/Sobre-Produto.html'
            }
        }
    })

    //? Remover do carrinho
    btnExluirProduto.addEventListener('click', () => {
        prodSelecionadoParaRemover = Id
        idSelecionado = prod.id
        document.getElementById('confimarRemoverProduto').style.display = 'flex'
    })

    contador++
}

function fecharPopUp() {
    document.getElementById('confimarRemoverProduto').style.display = 'none'
}

function remover(modo = 'um') {
    let feito = false
    if(modo == 'um') {

        for(let c = 0; c < cloneCarrinhoAtual.length; c++) {
            if(cloneCarrinhoAtual[c].Id == prodSelecionadoParaRemover) {
                if(feito == false) {
                    feito = true
                    document.getElementById(idSelecionado).remove()
                    cloneCarrinhoAtual.splice(c, 1)
                    db.collection('Carrinho').doc(valUser).update({Carrinho: cloneCarrinhoAtual})

                    if(cloneCarrinhoAtual.length <= 0) {
                        db.collection('Carrinho').doc(valUser).delete()
                        document.getElementsByClassName('text')[0].style.display = 'none'
                        document.getElementById('fala').style.display = 'block'
                    }
                }
            }
        }

    } else if(modo == 'todos') {
        db.collection('Carrinho').doc(valUser).delete()
        document.getElementsByClassName('text')[0].style.display = 'none'
        document.getElementById('fala').style.display = 'block'

        for(let c = 0; c < contador; c++) {
            try {
                document.getElementById('prod' + c).remove()
            } catch {}
        }

    } else {
        alert('Para de mexer aí doido, to de olho safado!')
    }

    fecharPopUp()
}