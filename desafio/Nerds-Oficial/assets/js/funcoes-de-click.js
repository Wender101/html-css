const sombra = document.getElementById('sombra')
const nav = document.querySelector('nav')
const sectionAddProduto = document.getElementById('addNovoproduto')

// Vai puxar do navegador os produtos salvos
const produtos1 = localStorage.getItem('produtosSalvos');
const produtos2 = JSON.parse(produtos1);

const salvarProdutos = []
let idProduto = 0

for(let c = 0; c < produtos2.length; c++) {
    salvarProdutos.push(produtos2[c])
    idProduto = produtos2[c].id + 1
    criarProdutos(produtos2[c].img, produtos2[c].classe, produtos2[c].desc, produtos2[c].valor, produtos2[c].id)
}

// Vai puxar do navegador as categorias salvas
const categorias1 = localStorage.getItem('categoriasSalvas');
const categorias2 = JSON.parse(categorias1);

const salvarCategorias = []

for(let c = 0; c < categorias2.length; c++) {
    salvarCategorias.push(categorias2[c])
    criaCategoria(categorias2[c])
}

function abrirMenu() {
    sombra.style.display = 'block'
    nav.style.transition = '200ms left linear'
    nav.style.left = '0px'

}

function fecharMenu() {
    const addCategoria = document.getElementById('addCategoria')
    sombra.style.display = 'none'
    nav.style.transition = '200ms left linear'
    nav.style.left = '-320px'
    sectionAddProduto.style.transition = '300ms top linear'
    sectionAddProduto.style.top = '-600px'
    addCategoria.style.transition = '400ms top linear'
    addCategoria.style.top = '-600px'
}

// Adicionar novo produto
function addProduto() {
    sombra.style.display = 'block'
    sectionAddProduto.style.transition = '300ms top linear'
    sectionAddProduto.style.top = '150px'

    const imgProduto = document.getElementById('imgProduto')
    const nomeProduto = document.getElementById('classeProduto')
    const descricaoProduto = document.getElementById('descricaoProduto')
    const valorProduto = document.getElementById('valorProduto')

    imgProduto.value = ''
    nomeProduto.value = ''
    descricaoProduto.value = ''
    valorProduto.value = ''

}

// Função que vai adicionar o produto
function btnAdicionar() {
    // Valores dos inputs
    const imgProduto = document.getElementById('imgProduto').value
    const classeProduto = document.getElementById('classeProduto').value
    const descricaoProduto = document.getElementById('descricaoProduto').value
    const valorProduto = document.getElementById('valorProduto').value

    if(imgProduto == 0 || classeProduto == 0 || descricaoProduto == 0 || valorProduto == 0) {
        alert('Preencha todos os campos para fazer o registro do produto.')

    } else {
        criarProdutos(imgProduto, classeProduto, descricaoProduto, valorProduto)
    
        const produtos = {
            img: imgProduto,
            classe: classeProduto,
            desc: descricaoProduto,
            valor: valorProduto,
            id: idProduto
        }

        salvarProdutos.push(produtos)

        var prdutosJSON = JSON.stringify(salvarProdutos);
        localStorage.setItem('produtosSalvos', prdutosJSON);
        idProduto++
        fecharMenu()
    }
}

// Função de criar os produtos
function criarProdutos(imagem, classe, desc, valor) {
    const main = document.querySelector('main')
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
    main.appendChild(div)

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

// função que sera ativada ao clicar no btn adicionar nova categoria
function addCategoria() {
    const addCategoria = document.getElementById('addCategoria')
    addCategoria.style.transition = '400ms top linear'
    addCategoria.style.top = '250px'
    
    const inputCategoria = document.getElementById('nomeCategoria')
    inputCategoria.value = ''
}

// Função responsavel por adicionar uma nova categoria
function addNovaCategoria() {
    const addCategoria = document.getElementById('addCategoria')
    addCategoria.style.transition = '400ms top linear'
    addCategoria.style.top = '-600px'

    // Valor do input
    const inputCategoria = document.getElementById('nomeCategoria').value

    criaCategoria(inputCategoria)

    // Vai salvar a categoria adicionada
    salvarCategorias.push(inputCategoria)
    var categoriasJSON = JSON.stringify(salvarCategorias);
    localStorage.setItem('categoriasSalvas', categoriasJSON);
    
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