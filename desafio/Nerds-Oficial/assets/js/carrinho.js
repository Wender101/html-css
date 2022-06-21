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

//* Vai adicionar os produtos do carrinho salvos na tela
const carrinho1 = localStorage.getItem('carrinho')
const carrinho2 = JSON.parse(carrinho1);

const salvarCarrinho = []

let total = 0

// Vai informar que o carrinho está vazio
if(carrinho2.length == 0) {
    const main = document.querySelector('main')
    const h1 = document.createElement('h1')
    h1.innerText = 'O carrrinho está vazio'
    main.appendChild(h1)
}

for(let c = 0; c < carrinho2.length; c++) {
    const h1ValorTotal = document.getElementById('valorTotal')
    salvarCarrinho.push(carrinho2[c])
    criarProdutos(carrinho2[c].img, carrinho2[c].classe, carrinho2[c].desc, carrinho2[c].valor, c)
    total += parseInt(carrinho2[c].valor)
    h1ValorTotal.innerText = `Total: ${total.toLocaleString('pt-BR')}`
}

// Função de criar os produtos
function criarProdutos(imagem, classe, desc, valor, idProduto) {
    const main = document.querySelector('main')
    const div = document.createElement('div')
    const a = document.createElement('a')
    const img = document.createElement('div')
    const p = document.createElement('p')
    const strong = document.createElement('strong')
    const btnX = document.createElement('button')
    const x = document.createElement('p')

    img.style.backgroundImage = `url(assets/img/produtos/${imagem})`
    a.href = 'sobre-o-produto.html'
    p.innerText = desc
    strong.innerText = `R$ ${valor}`
    btnX.className = 'xad'
    btnX.id = idProduto
    div.id = idProduto
    x.innerText = 'X'

    btnX.appendChild(x)
    div.appendChild(btnX)
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

        var sobreJSON = JSON.stringify(produtos)
        localStorage.setItem('sobre', sobreJSON)

        var pesquisaJSON = JSON.stringify(classe)
        localStorage.setItem('pesquisaSalva', pesquisaJSON)
    }) 
}

// Vai excluir o produto
const main = document.querySelector('main')
main.addEventListener('click', (e) => {
    const el = e.target.id
    const btnX = document.getElementById(el)
    const div = document.getElementById(el)
    btnX.addEventListener('click', () => {
        div.remove()
        salvarCarrinho.splice(el, 1)
        var carrinhoJSON = JSON.stringify(salvarCarrinho)
        localStorage.setItem('carrinho', carrinhoJSON)
        location.reload()
    })
})