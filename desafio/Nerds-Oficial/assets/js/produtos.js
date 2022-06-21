function abrirMenu() {
    const sombra = document.getElementById('sombra')
    const nav = document.querySelector('nav')
    sombra.style.display = 'block'
    nav.style.transition = '200ms left linear'
    nav.style.left = '0px'

}

function fecharMenu() {
    const sombra = document.getElementById('sombra')
    const nav = document.querySelector('nav')
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
const pesquisa2 = JSON.parse(pesquisa1)
const valorPesquisa = pesquisa2.toLowerCase()

// Vai mudar o titulo da pág, pro o que foi pesquisado.
const title = document.querySelector('title')
title.innerHTML = pesquisa2

// Vai puxar do navegador os produtos salvos
const produtos1 = localStorage.getItem('produtosSalvos');
const produtos2 = JSON.parse(produtos1)

const salvarProdutos = []


let a = false
let logado = false

function fazerLogin() {
    const logado1 = localStorage.getItem('login');
    const logado2 = JSON.parse(logado1);

     if(logado2 == true) {
        for(let c = 0; c < produtos2.length; c++) {
            salvarProdutos.push(produtos2[c])
        
            if(produtos2[c].classe.toLowerCase() == valorPesquisa) {  
                criarProdutos1(produtos2[c].img, produtos2[c].classe, produtos2[c].desc, produtos2[c].valor, c)
                a = true
            }
        }
        
        setTimeout(() => {
            if(a == false) {
                const main = document.querySelector('main')
                const h1 = document.createElement('h1')
                h1.id = 'produtoNaoEncotrado'
                h1.innerHTML = 'Este produto não foi encontrado!'
                main.appendChild(h1)
            }
        }, 100)

    } else {
        for(let c = 0; c < produtos2.length; c++) {
            salvarProdutos.push(produtos2[c])
        
            if(produtos2[c].classe.toLowerCase() == valorPesquisa) {  
                criarProdutos2(produtos2[c].img, produtos2[c].classe, produtos2[c].desc, produtos2[c].valor, c)
                a = true
            }
        }
        
        setTimeout(() => {
            if(a == false) {
                const main = document.querySelector('main')
                const h1 = document.createElement('h1')
                h1.id = 'produtoNaoEncotrado'
                h1.innerHTML = 'Este produto não foi encontrado!'
                main.appendChild(h1)
            }
        }, 100)
    }
}

fazerLogin()

// Função de criar os produtos
function criarProdutos1(imagem, classe, desc, valor, idProduto) {
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

        var sobreJSON = JSON.stringify(produtos);
        localStorage.setItem('sobre', sobreJSON);

        var pesquisaJSON = JSON.stringify(classe);
        localStorage.setItem('pesquisaSalva', pesquisaJSON);
    }) 
}

// -----------

// Função de criar os produtos
function criarProdutos2(imagem, classe, desc, valor) {
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

// Vai excluir o produto
const main = document.querySelector('main')
main.addEventListener('click', (e) => {
    const el = e.target.id
    const btnX = document.getElementById(el)
    const div = document.getElementById(el)
    btnX.addEventListener('click', () => {
        div.remove()
        salvarProdutos.splice(el, 1)
        var prdutosJSON = JSON.stringify(salvarProdutos);
        localStorage.setItem('produtosSalvos', prdutosJSON);
    })
})
