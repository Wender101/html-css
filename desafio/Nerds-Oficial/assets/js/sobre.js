let notificacao = 0
const sombra = document.getElementById('sombra')
const nav = document.querySelector('nav')

function abrirMenu() {
    sombra.style.display = 'block'
    nav.style.transition = '200ms left linear'
    nav.style.left = '0px'

}

function fecharMenu() {
    sombra.style.display = 'none'
    nav.style.transition = '200ms left linear'
    nav.style.left = '-320px'
}

// Vai puxar do navegador as categorias salvas
const categorias1 = localStorage.getItem('categoriasSalvas');
const categorias2 = JSON.parse(categorias1);
categorias2.sort()

const salvarCategorias = []

for(let c = 0; c < categorias2.length; c++) {
    salvarCategorias.push(categorias2[c])
    criaCategoria(categorias2[c])
}

// Criar a categoria
function criaCategoria(nome) {
    const ul = document.getElementById('localCategoria')
    
    const li = document.createElement('li')
    const a = document.createElement('a')
    a.href = 'produtos.html'
    a.innerText = nome
    li.appendChild(a)
    ul.appendChild(li)
}
 
// Valor da pesquisa
const pesquisa1 = localStorage.getItem('pesquisaSalva');
const pesquisa2 = JSON.parse(pesquisa1);
const valorPesquisa = pesquisa2.toLowerCase()

// Vai mudar o titulo da pág, pro o que foi pesquisado.
const title = document.querySelector('title')
title.innerHTML = pesquisa2

const sobre1 = localStorage.getItem('sobre');
const sobre2 = JSON.parse(sobre1);

criarInterface(sobre2.img, sobre2.classe, sobre2.desc, sobre2.valor)

function criarInterface(img, classe, desc, valor) {
    const localImg = document.getElementById('imgProdutos')
    localImg.style.backgroundImage = `url(assets/img/produtos/${img})`

    const divDesc = document.getElementById('desc')
    const p = document.createElement('p')
    const strong = document.createElement('strong')
    p.innerText = desc
    strong.innerText = `R$ ${valor}`
    divDesc.appendChild(p)
    divDesc.appendChild(strong)
}

//& Vai criar um link personalizado
const contato = document.getElementById('contato')
contato.innerText = 'Entre em Contato'
contato.href = `https://api.whatsapp.com/send?phone=+55%2061%209906-3455&text= Produto: ${sobre2.desc}`

//& Vai adicionar produtos relacionados com que foi clicado

const produtos1 = localStorage.getItem('produtosSalvos');
const produtos2 = JSON.parse(produtos1);

    const salvarProdutos = []
    let idProduto = 0

    for(let c = 0; c < produtos2.length; c++) {
        salvarProdutos.push(produtos2[c])
        idProduto = produtos2[c] + 1
        if(produtos2[c].classe == sobre2.classe) {
            criarProdutos(produtos2[c].img, produtos2[c].classe, produtos2[c].desc, produtos2[c].valor)
        }
    }

// Vai criar os produtos
function criarProdutos(imagem, classe, desc, valor) {
    const relacionados = document.getElementById('relacionados')
    const div = document.createElement('div')
    const a = document.createElement('a')
    const img = document.createElement('div')
    const p = document.createElement('p')
    const strong = document.createElement('strong')

    img.style.backgroundImage = `url(assets/img/produtos/${imagem})`
    a.href = 'sobre-o-produto.html'
    p.innerText = desc
    strong.innerText = `R$ ${valor}`

    a.appendChild(img)
    div.appendChild(a)
    div.appendChild(p)
    div.appendChild(strong)
    relacionados.appendChild(div)

    // Vai ir pra pág 'sobre o produto'
    img.addEventListener('click', (e) => {
        const el = e.target
        const produtos = {
            img: imagem,
            classe: classe,
            desc: desc,
            valor: valor
        }

        var sobreJSON = JSON.stringify(produtos);
        localStorage.setItem('sobre', sobreJSON);

        var pesquisaJSON = JSON.stringify(classe);
        localStorage.setItem('pesquisaSalva', pesquisaJSON);
    }) 
}

//* Vai adicionar ao carrinho
const carrinho1 = localStorage.getItem('carrinho');
const carrinho2 = JSON.parse(carrinho1);

const salvarCarrinho = []

function addProdutosSalvos() {
    let c = 0
    for(let produtos of carrinho2) {
        salvarCarrinho.push(carrinho2[c])
        c++
    }
} addProdutosSalvos()

function addCarrinho() {
    const carrinho = {
        img: sobre2.img,
        classe: sobre2.classe,
        desc: sobre2.desc,
        valor: sobre2.valor
    }

    salvarCarrinho.push(carrinho)
    var carrinhoJSON = JSON.stringify(salvarCarrinho);
    localStorage.setItem('carrinho', carrinhoJSON);

    notificacao++
    const span = document.getElementById('spanCarrinho')
    span.style.display = 'block'
    span.innerText = notificacao
}

