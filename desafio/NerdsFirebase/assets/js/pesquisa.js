for(let c = 1; c <= 14; c++) {
    const localCategorias = document.getElementById('localCategorias')
    const a = document.createElement('a')
    const p = document.createElement('p')
    const img = document.createElement('img')

    a.id = `categoria-${c}`
    p.className = 'pCategoria'
    a.className = 'contrario'

    let nomeCategoria = ['Cabos', 'Adaptadores', 'Teclados', 'Mouse', 'Gabinetes', 'Headset', 'Controles', 'Fontes', 'MousePad', 'Processadores', 'Memória', 'SSD', 'Coolers', 'Outros']

    p.innerText = nomeCategoria[c-1]

    img.src = `assets/img/icons/${c}.png`

    a.appendChild(img)
    a.appendChild(p)
    localCategorias.appendChild(a)
    
    //? Vai guardar na memória qual produto foi pesquisado
    a.addEventListener('click', () => {
        for(let b = 1; b <= 14; b++) {
            document.getElementsByClassName(`contrario`)[b-1].id = `categoria-${b}`
        }

        setTimeout(() => {
            document.getElementsByClassName(`contrario`)[c-1].id = 'after'
        }, 100)

        let pesquisa = [p.innerText, c]
        const produtoPesquisado = JSON.stringify(pesquisa)
        localStorage.setItem('produtoPesquisado', produtoPesquisado)

        // if(window.location.pathname != '/pagProduto.html') {
        if(window.location.pathname != '/html-css/desafio/NerdsFirebase/pagProduto.html') {
            // window.location.href = 'http://127.0.0.1:5501/pagProduto.html'
            window.location.href = `https://wender101.github.io/html-css/desafio/NerdsFirebase/pagProduto.html`
        } else {
            pesquisarProd(p.innerText)
        }
    })
}

try {
    const produtoQPesquisado1 = localStorage.getItem('produtoPesquisado')
    const produtoQPesquisado2 = JSON.parse(produtoQPesquisado1)
    document.getElementById(`categoria-${produtoQPesquisado2[1]}`).id = `after`
} catch {}

//! botões do painel de categorias
var viewport
let press = 0
let q = 0
let btnE = document.getElementsByClassName('btns')[0]
let btnD = document.getElementsByClassName('btns')[1]
let localCategorias = document.getElementById('localCategorias')
setInterval(() => {
    viewport = visualViewport.width

    if(viewport > 1255) {
        localCategorias.style.marginLeft = `0px`
        btnE.style.display = 'none'
        btnD.style.display = 'none'
        press = 0
        q = 0

    } else if(viewport < 1255 && press == 0) {
        btnD.style.display = 'block'
    } 
    
    //! Vai controlar quando a seta direita vai sumir
    if(viewport >= 1085 && press == 1) {
        btnD.style.display = 'none'

    } else if(viewport >= 883 && press == 2) {
        btnD.style.display = 'none'

    } else if(viewport <= 883 && viewport >= 644 && press == 3) {
        btnD.style.display = 'none'
        
    } else if(viewport <= 644 && viewport >= 484 && press == 4) {
        btnD.style.display = 'none'
        
    } else if(viewport < 484 && press == 5) {
        btnD.style.display = 'none'
    }

    //! Vai controlar quando a seta esquerda vai sumir
    if(press == 0) {
        btnE.style.display = 'none'

    } else {
        btnE.style.display = 'block'
    }
}, 100)

function btnEsquerda() {
    q += 145
    localCategorias.style.marginLeft = `${q}px`
    btnD.style.display = 'block'
    press--
}

function btnDireita() {
    q -= 145
    localCategorias.style.marginLeft = `${q}px`
    btnE.style.display = 'block'
    press++
}

//? Barra de pesquisa
let input = document.getElementById('pesquisar')
document.addEventListener('keypress', (e) => {
    if(e.keyCode == 13 && input.value.length > 1) {
        pesquisarProduto()
    }
})

document.getElementById('btnPesquisar').addEventListener('click', () => {
    if(input.value.length > 1) {
        pesquisarProduto()
    }
})

function pesquisarProduto(pesquisa = '') {
    // if(window.location.pathname != '/pagProduto.html') {
    if(window.location.pathname != '/html-css/desafio/NerdsFirebase/pagProduto.html') {
        let valPesquisa
        if(pesquisa != '') {
            valPesquisa = pesquisa
        } else {
            valPesquisa = input.value
        }
        inputFeito = false
        let nomeCategoria = ['Cabos', 'Adaptadores', 'Teclados', 'Mouse', 'Gabinetes', 'Headset', 'Controles', 'Fontes', 'MousePad', 'Processadores', 'Memória', 'SSD', 'Coolers', 'Outros']
        
        for(let c = 0; c < 14; c++) {
            let nomeCat = nomeCategoria[c]
            nomeCat = nomeCat.toLocaleLowerCase()
            nomeCat = nomeCat.normalize('NFD').replace(/[\u0300-\u036f]/g, "") //? Vai remover os acentos
            nomeCat = nomeCat.replace(/\s/g, '') //? Vai remover os espaços
        
            let pesquisaInp = valPesquisa
            pesquisaInp = pesquisaInp.toLocaleLowerCase()
            pesquisaInp = pesquisaInp.normalize('NFD').replace(/[\u0300-\u036f]/g, "") //? Vai remover os acentos
            pesquisaInp = pesquisaInp.replace(/\s/g, '') //? Vai remover os espaços

            if(inputFeito == false) {

                if(nomeCat == pesquisaInp) {
                    let pesquisa = [valPesquisa, c + 1]
                    const produtoPesquisado = JSON.stringify(pesquisa)
                    localStorage.setItem('produtoPesquisado', produtoPesquisado)
                    inputFeito = true
                    // location.href = 'http://127.0.0.1:5501/pagProduto.html'
                    location.href = 'https://wender101.github.io/html-css/desafio/NerdsFirebase/pagProduto.html'
            
                } else if(nomeCat != valPesquisa && c == 13) {
                    let pesquisa = [valPesquisa, c + 2]
                    const produtoPesquisado = JSON.stringify(pesquisa)
                    localStorage.setItem('produtoPesquisado', produtoPesquisado)
                    // location.href = 'http://127.0.0.1:5501/pagProduto.html'
                    location.href = 'https://wender101.github.io/html-css/desafio/NerdsFirebase/pagProduto.html'
                }
            }
        }
        input.value = ''
    }
}

//? Sugestão de pesquisa 
let tamanhoAtual = 0
let containerSugestao = document.getElementById('containerSugestao')
setInterval(() => {
    //? Vai chamar a function sugetaoPesquisa sempre que o user digitar ou apagar algo no input
    let pesquisa = document.getElementById('pesquisar').value
    if(pesquisa.length != tamanhoAtual) {
        sugetaoPesquisa(pesquisa)
        tamanhoAtual = pesquisa.length
    } else if(pesquisa.length == 0) {
        containerSugestao.style.display = 'none'
    }
}, 100)

function sugetaoPesquisa(pesquisa) {
    let max = 0 //? Vai determinar o maximo de sugestões
    
    db.collection('Produtos').onSnapshot((data) => {
        const main = document.querySelector('main')
        containerSugestao.innerHTML = ''
        data.docs.map(function(val) {
            let valSugetao = val.data()

            nomeProd = valSugetao.nome.toLowerCase()
            nomeProd = nomeProd.normalize('NFD').replace(/[\u0300-\u036f]/g, "") //? Vai remover os acentos
            nomeProd = nomeProd.replace(/\s/g, '') //? Vai remover os espaços

            pesquisaProd = pesquisa.toLowerCase()
            pesquisaProd = pesquisaProd.normalize('NFD').replace(/[\u0300-\u036f]/g, "") //? Vai remover os acentos
            pesquisaProd = pesquisaProd.replace(/\s/g, '') //? Vai remover os espaços
            if(nomeProd.includes(pesquisaProd) && max < 6) {
                containerSugestao.style.display = 'block'
                let p = document.createElement('p')
                let img = document.createElement('img')
                
                img.src = 'assets/img/site/search-grey.png'
                p.appendChild(img)
                p.innerText = valSugetao.nome

                containerSugestao.appendChild(p)
                max++

                //? Ao clicar no p
                p.addEventListener('click', () => {
                    // if(location.pathname != '/pagProduto.html' ) {
                    if(window.location.pathname != '/html-css/desafio/NerdsFirebase/pagProduto.html') {
                        pesquisarProduto(p.innerText)
                    } else {
                        pesquisarProd(p.innerText)
                        console.log(1);
                    }
                })
            } else if(max == 0) {
                containerSugestao.style.display = 'none'
            }
        })
    })
}

document.addEventListener('click', (e) => {
    let el = e.target.id
    if(el != 'containerSugestao') {
        containerSugestao.style.display = 'none'
    }
})