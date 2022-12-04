const produtoPesquisado1 = localStorage.getItem('produtoPesquisado')
const produtoPesquisado2 = JSON.parse(produtoPesquisado1)

//! Vai usar a URL da pág como guía para encontrar o produto
let pesquisaInput = false
function urlPage() {
    let url = window.location.href

    let l1 = url.substr(-5)
    for(let c = 0; c < 20; c++) {
       url = url.replace("%20", " ")
    }

    if(l1 != '.html') {
        for (let c = 0; c <= 20; c++) {
            let b = c - 1
            let letra = url.substr(-c)
            let fim = letra.substring(0, 1)
            let qContrario
            
            if(fim == '#') {
                let urlFinal = url.substr(-b).replace("%20", " ")
                document.querySelector('title').innerText = urlFinal
                document.getElementById('classProduto').innerText = urlFinal

               if(urlFinal == 'Cabos') {
                    qContrario = 1
                } else if(urlFinal == 'Adaptadores') {
                    qContrario = 2
                } else if(urlFinal == 'Teclados') {
                    qContrario = 3
                } else if(urlFinal == 'Mouse') {
                    qContrario = 4
                } else if(urlFinal == 'Gabinetes') {
                    qContrario = 5
                } else if(urlFinal == 'Headset') {
                    qContrario = 6
                } else if(urlFinal == 'Controles') {
                    qContrario = 7
                } else if(urlFinal == 'Fontes') {
                    qContrario = 8
                } else if(urlFinal == 'MousePad') {
                    qContrario = 9
                } else if(urlFinal == 'Processadores') {
                    qContrario = 10
                } else if(urlFinal == 'Memória') {
                    qContrario = 11
                } else if(urlFinal == 'SSD') {
                    qContrario = 12
                } else if(urlFinal == 'Coolers') {
                    qContrario = 13
                } else if(urlFinal == 'Outros') {
                    qContrario = 14
                } else {
                    qContrario = 15
                    pesquisaInput = true
                }

                let a = [urlFinal, qContrario]
                const produtoPesquisado = JSON.stringify(a)
                localStorage.setItem('produtoPesquisado', produtoPesquisado)
            }
            
        }

    } else {
        document.querySelector('title').innerText = produtoPesquisado2[0]
        document.getElementById('classProduto').innerText = produtoPesquisado2[0]
        window.location.href = `${url}#${produtoPesquisado2[0]}`
    }
   
    
} urlPage()

//? Vai pesquisar o produto ao pressionar o enter
let inputPesquisar = document.getElementById('pesquisar')
let btnPesquisarInput = document.getElementById('btnPesquisar')
document.addEventListener('keypress', (e) => {
    if(e.keyCode == 13 && inputPesquisar.value.length > 5) {
        document.querySelector('title').innerText = inputPesquisar.value
        document.getElementById('classProduto').innerText = inputPesquisar.value
        pesquisaInput = true
        colocarNatelaPesquisa()
    }
})

//? Vai pesquisar o produto ao apertar na lupa
btnPesquisarInput.addEventListener('click', () => {
    document.querySelector('title').innerText = inputPesquisar.value
    document.getElementById('classProduto').innerText = inputPesquisar.value
    pesquisaInput = true
    colocarNatelaPesquisa()
})

//! vai adicionar o produto
let id = 0
function colocarNatelaPesquisa() {
    db.collection('Produtos').onSnapshot((data) => {
        const main = document.querySelector('main')
        main.innerHTML = ''
        data.docs.map(function(val) {
            let p = val.data()
    
            //? Vai pesquisar os produtos
            let titulo = document.querySelector('title').innerText

            let pesquisa = titulo.toLowerCase()
            pesquisa = pesquisa.normalize('NFD').replace(/[\u0300-\u036f]/g, "") //? Vai remover os acentos
            pesquisa = pesquisa.replace(/\s/g, '') //? Vai remover os espaços
    
            nomeProd = p.nome.toLowerCase()
            nomeProd = nomeProd.normalize('NFD').replace(/[\u0300-\u036f]/g, "") //? Vai remover os acentos
            nomeProd = nomeProd.replace(/\s/g, '') //? Vai remover os espaços

            descProd = p.desc.toLowerCase()
            descProd = descProd.normalize('NFD').replace(/[\u0300-\u036f]/g, "") //? Vai remover os acentos
            descProd = descProd.replace(/\s/g, '') //? Vai remover os espaços

            classProd = p.classe.toLowerCase()
            classProd = classProd.normalize('NFD').replace(/[\u0300-\u036f]/g, "") //? Vai remover os acentos
            classProd = classProd.replace(/\s/g, '') //? Vai remover os espaços
    
            if(nomeProd.includes(pesquisa) || descProd.includes(pesquisa) || classProd.includes(pesquisa)) {
                document.getElementById('carregando').style.display = 'none'
                construirProduto(p.classe, p.nome, p.desc, p.imagem1, p.imagem2, p.id)
                
                if(p.id > id) {
                    id = p.id
                }
            }

            try {
                if(pesquisaInput == true) {
                    document.getElementById('after').id = ''
                }
            } catch {}
    
            setTimeout(() => {
                let carregando = document.getElementById('carregando')
                if(carregando.style.display != 'none') {
                    carregando.style.display = 'none'
                    document.getElementById('classProduto').innerText = 'Parece que algo deu errado :('
                }
            }, 8000)
        })
    }) 
} colocarNatelaPesquisa()

function construirProduto(classe, nome, desc, imagem1, imagem2 = imagem1, id) {
    const main = document.querySelector('main')
    const containerProduto = document.createElement('div')
    const localImgProduto = document.createElement('a')
    const imgProduto = document.createElement('img')
    const strong = document.createElement('strong')
    const p = document.createElement('p')

    containerProduto.className = 'containerProduto'
    localImgProduto.className = 'localImgProduto'
    localImgProduto.href = 'sobre-o-produto.html'
    imgProduto.className = 'imgProduto'

    try {
        imgProduto.src = imagem1
        strong.innerHTML = nome
        p.innerText = desc
        
    } catch {
        imgProduto.src = 'assets/img/site/error.png'
        strong.innerText = 'Algo deu errado!'
        p.innerText = 'Parece que esse produto não foi carregado corretamente'
    }

    //! AppendChild
    localImgProduto.appendChild(imgProduto)
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

    //! Ao clicar na img do produto
    localImgProduto.addEventListener('click', () => {
        localStorage.setItem('sobreProduto', id)
    })
}