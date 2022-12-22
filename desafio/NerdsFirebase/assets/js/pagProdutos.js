const produtoPesquisado1 = localStorage.getItem('produtoPesquisado')
const produtoPesquisado2 = JSON.parse(produtoPesquisado1)

//! Vai usar a URL da pág como guía para encontrar o produto
let pesquisaInput = false
let urlSemProduto = window.location.origin + window.location.pathname
let urlFinal
function urlPage() {
    let pageFeito = false
    let pageFeito2 = false
    let url = window.location.href
    
    let l1 = url.substr(-5)
    
    //? Esse número "100" vai limitaor o número de caracteris no nome do produto da url
    for (let c = 0; c <= 100; c++) {
        url = url.replace("%20", " ")
        let b = c - 1
        let letra = url.substr(-c)
        let fim = letra.substring(0, 1)
        
        //? vai carregar a pesquisa da barra de pesquisa
        if(fim == '#' && pageFeito2 == false) {
            urlFinal = url.substr(-b)
            document.querySelector('title').innerText = urlFinal
            document.getElementById('classProduto').innerText = urlFinal
            let cSalvo
            for(let c2 = 0; c2 < 14; c2++) {
                let nomeCategoria = ['Cabos', 'Adaptadores', 'Teclados', 'Mouse', 'Gabinetes', 'Headset', 'Controles', 'Fontes', 'MousePad', 'Processadores', 'Memória', 'SSD', 'Coolers', 'Outros']
                let nomeCat = nomeCategoria[c2]
                nomeCat = nomeCat.toLocaleLowerCase()
                nomeCat = nomeCat.normalize('NFD').replace(/[\u0300-\u036f]/g, "") //? Vai remover os acentos
                nomeCat = nomeCat.replace(/\s/g, '') //? Vai remover os espaços
                
                let pesquisaInp = urlFinal
                pesquisaInp = pesquisaInp.toLocaleLowerCase()
                pesquisaInp = pesquisaInp.normalize('NFD').replace(/[\u0300-\u036f]/g, "") //? Vai remover os acentos
                pesquisaInp = pesquisaInp.replace(/\s/g, '') //? Vai remover os espaços

                if(nomeCat == pesquisaInp && pageFeito == false) {
                    cSalvo = c2 + 1
                    pageFeito = true
                } else if(c2 == 13 && pageFeito == false) {
                    pageFeito = true
                }

                if(pageFeito == true) {
                    let array = [urlFinal, cSalvo]
                    const produtoPesquisado = JSON.stringify(array)
                    localStorage.setItem('produtoPesquisado', produtoPesquisado)

                    //? Vai dar um reload caso o user n tenha uma pesquisa salva
                    if(produtoPesquisado2 == null) {
                        location.reload()
                    }
                }
            }
            pageFeito2 = true

        } else if(c == 100 && produtoPesquisado2[0] == null || c == 100 && produtoPesquisado2[0] == undefined) {
            document.querySelector('title').innerText = 'Produto não encontrado :('
            document.getElementById('classProduto').innerText = 'Produto não encontrado :('

        } else if(c == 100 && pageFeito2 == false && produtoPesquisado2[0] != null && produtoPesquisado2[0] != undefined) {
            document.querySelector('title').innerText = produtoPesquisado2[0]
            document.getElementById('classProduto').innerText = produtoPesquisado2[0]
            window.location.href = `${urlSemProduto}#${produtoPesquisado2[0].normalize('NFD').replace(/[\u0300-\u036f]/g, "")}`
        }
    }
} urlPage()

//? Vai pesquisar o produto ao pressionar o enter
let inputPesquisar = document.getElementById('pesquisar')
let btnPesquisarInput = document.getElementById('btnPesquisar')
document.addEventListener('keypress', (e) => {
    if(e.keyCode == 13 && inputPesquisar.value.length > 1) {
        pesquisarProd()
    }
})

//? Vai pesquisar o produto ao apertar na lupa
btnPesquisarInput.addEventListener('click', () => {
    if(inputPesquisar.value.length > 1) {
        pesquisarProd()
    }
})

//? ao pesquisar
function pesquisarProd(pesquisaFeita = '') {
    document.querySelector('title').innerText = pesquisaFeita
    document.getElementById('classProduto').innerText = pesquisaFeita
    window.location.href = `${urlSemProduto}#${pesquisaFeita.normalize('NFD').replace(/[\u0300-\u036f]/g, "")}`
    let prodPesquisado = pesquisaFeita.toLocaleLowerCase()
    if(pesquisaFeita == '') {
        document.querySelector('title').innerText = inputPesquisar.value
        document.getElementById('classProduto').innerText = inputPesquisar.value
        window.location.href = `${urlSemProduto}#${inputPesquisar.value.normalize('NFD').replace(/[\u0300-\u036f]/g, "")}`
        prodPesquisado = inputPesquisar.value.toLocaleLowerCase()
        pesquisaInput = true
    }

    colocarNatelaPesquisa()

    let aneminFeito = false
    let salveC
    for (let c = 0; c < 14; c++) {
        let aCategoria = document.getElementsByClassName(`contrario`)[c]
        aCategoria.id = `categoria-${c+1}`
        let aCategoriaTexto = aCategoria.innerText

        //? Vai tirar os espaços, acentos e deixar todos as letras em minusculo para comparar a pesquisa com as classes
        prodPesquisado = prodPesquisado.normalize('NFD').replace(/[\u0300-\u036f]/g, "") //? Vai remover os acentos
        prodPesquisado = prodPesquisado.replace(/\s/g, '') //? Vai remover os espaços

        aCategoriaTexto = aCategoriaTexto.toLowerCase()
        aCategoriaTexto = aCategoriaTexto.normalize('NFD').replace(/[\u0300-\u036f]/g, "") //? Vai remover os acentos
        aCategoriaTexto = aCategoriaTexto.replace(/\s/g, '') //? Vai remover os espaços

        //? Vai colocar animação na classe pesquisada        
        if(aCategoriaTexto == prodPesquisado && aneminFeito == false) {
            salveC = c + 1
            aneminFeito = true

            setTimeout(() => {
                aCategoria.id = 'after'
            }, 100)
        }

        //? Vai salvar oq foi pesquisado
        if(c == 13) {
            let array = [urlFinal, salveC]
            console.log(salveC);
            const produtoPesquisado = JSON.stringify(array)
            localStorage.setItem('produtoPesquisado', produtoPesquisado)
        }
    }
    input.value = ''
}

//! vai adicionar o produto
let id = 0
function colocarNatelaPesquisa() {
    let produtoEncotrado = false
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
                produtoEncotrado = true
                
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
                if(produtoEncotrado == false) {
                    carregando.style.display = 'none'
                    document.getElementById('classProduto').innerText = 'Produto não encontrado :('
                }
            }, 500)
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