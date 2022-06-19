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
    li.innerText = nome
    a.appendChild(li)
    ul.appendChild(a)
}
 
// Valor da pesquisa
const pesquisa1 = localStorage.getItem('pesquisaSalva');
const pesquisa2 = JSON.parse(pesquisa1);
const valorPesquisa = pesquisa2.toLowerCase()

// Vai mudar o titulo da pág, pro o que foi pesquisado.
const title = document.querySelector('title')
title.innerHTML = pesquisa2

// Vai puxar do navegador as categorias salvas
const sobre1 = localStorage.getItem('sobre');
const sobre2 = JSON.parse(sobre1);

criarInterface(sobre2.img, sobre2.classe, sobre2.desc, sobre2.valor)

function criarInterface(img, classe, desc, valor) {
    const localImg = document.getElementById('imgProdutos')
    localImg.style.backgroundImage = `url(assets/img/produtos/${img})`

    const artDesc = document.getElementById('desc')
    const p = document.createElement('p')
    const strong = document.createElement('strong')
    p.innerText = desc
    strong.innerText = `R$ ${valor}`
    artDesc.appendChild(p)
    artDesc.appendChild(strong)
}

