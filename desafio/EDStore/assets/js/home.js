//? Vai criar uma recomendação com base na sua ultima pesquisa
let pesquisaPorTag = false
let todasAsTags
let todasAsTags2
let todasAsTags3 = []

db.collection('Produtos').onSnapshot((data) => {
    data.docs.map(function(val) {
        let Produtos = val.data()

        todasAsTags = Produtos.Tags
        try {
            for(let c = 0; c < todasAsTags.length; c++) {
                todasAsTags = todasAsTags.replace("#", "")
                todasAsTags2 = todasAsTags.split(' ')

                if(c + 1 == todasAsTags.length) {
                    for(let b = 0; b < todasAsTags2.length; b++) {
                        todasAsTags3.push(todasAsTags2[b])
                    }
                }
            }
        } catch{}
    })
})

let pesquisadoFeito = false
let pesq
db.collection('Produtos').onSnapshot((data) => {
    data.docs.map(function(val) {
        let Produtos = val.data()
        let nameRecomend = document.getElementById('nameRecomend')

        let nome = Produtos.Nome
        nome = nome.toLocaleLowerCase()
        nome = nome.normalize('NFD').replace(/[\u0300-\u036f]/g, "") //? Vai remover os acentos
        nome = nome.replace(/\s/g, '') //? Vai remover os espaços

        let desc = Produtos.Desc
        desc = desc.toLocaleLowerCase()
        desc = desc.normalize('NFD').replace(/[\u0300-\u036f]/g, "") //? Vai remover os acentos
        desc = desc.replace(/\s/g, '') //? Vai remover os espaços
    
        if(localStorage.getItem('produtoPagProduto') == null && pesquisadoFeito == false) {
            pesquisadoFeito = true
            pesq = todasAsTags3[Math.floor(Math.random() * 20)]
        } else if(localStorage.getItem('produtoPagProduto') != null) {
            pesq = localStorage.getItem('produtoPagProduto')
        }

        let pesquisaInp = pesq
        pesquisaInp = pesquisaInp.toLocaleLowerCase()
        pesquisaInp = pesquisaInp.normalize('NFD').replace(/[\u0300-\u036f]/g, "") //? Vai remover os acentos
        pesquisaInp = pesquisaInp.replace(/\s/g, '') //? Vai remover os espaços

        //? Vai pesquisar por Tag
        try {
            let achado = false
            let tags2
            let tags = Produtos.Tags
            
            for(let c = 0; c < tags.length; c++) {
                tags = tags.replace("#", "")
                tags2 = tags.split(' ')
            }
            for(let c = 0; c < tags2.length; c++) {
                let tags3 = tags2[c]
                tags3 = tags3.toLocaleLowerCase()
                tags3 = tags3.normalize('NFD').replace(/[\u0300-\u036f]/g, "") //? Vai remover os acentos
                tags3 = tags3.replace(/\s/g, '') //? Vai remover os espaços

                if(tags3.includes(pesquisaInp) && achado == false) {
                    achado = true
                    pesquisaPorTag = true
                    tags3 = tags3[0].toUpperCase() + tags3.substring(1)
                    if(tags3[-1] != 's' || tags3[-1] != 'S') {
                        document.getElementById('ideal').innerText = 'ideal'
                        nameRecomend.innerText = tags3
                    }
                    recomendacaoComBaseEmPesquisa(Produtos.Img1, Produtos.Img2, Produtos.Img3, Produtos.Img4, Produtos.Nome, Produtos.Desc , Produtos.Valor, Produtos.Desconto, Produtos.Id)
                }
            }
        } catch(error) {
            setTimeout(() => {
                if(pesquisaPorTag == false) {
                    document.getElementById('ideal').innerText = 'ideais'
                    nameRecomend.innerText = 'Produtos'
                    recomendacaoComBaseEmPesquisa(Produtos.Img1, Produtos.Img2, Produtos.Img3, Produtos.Img4, Produtos.Nome, Produtos.Desc , Produtos.Valor, Produtos.Desconto, Produtos.Id)
                }
            }, 1000)
        }
    })
})

function recomendacaoComBaseEmPesquisa(Img1 ,Img2, Img3, Img4, Nome, Desc, Valor, Desconto, Id) {
    let localRecomend = document.getElementById('localProdRecomendado').querySelector('article')
    let prod = document.createElement('div')
    let localImg = document.createElement('div')
    let imgProduto = document.createElement('img')
    let sobreProd = document.createElement('div')
    let nameProd = document.createElement('p')
    let p = document.createElement('p')
    let valorStrong = document.createElement('strong')
    let valorSemDescontoT = document.createElement('span')
    let valorSalvo = document.createElement('span')

    //? Class
    prod.className = 'prod'
    localImg.className = 'localImg'
    imgProduto.className = 'imgProduto'
    sobreProd.className = 'sobreProd'
    nameProd.className = 'nameProd'
    valorStrong.className = 'valor'
    valorSemDescontoT.className = 'valorSemDescontoT'
    valorSalvo.className = 'valorSalvo'

    //?---
    imgProduto.src = Img1
    nameProd.innerText = Nome

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
    p.appendChild(valorStrong)
    p.appendChild(valorSemDescontoT)
    localImg.appendChild(imgProduto)
    sobreProd.appendChild(nameProd)
    sobreProd.appendChild(p)
    sobreProd.appendChild(valorSalvo)
    prod.appendChild(localImg)
    prod.appendChild(sobreProd)
    localRecomend.appendChild(prod)

    //? Funções de click
    prod.addEventListener('click', () => {
        localStorage.setItem('sobreProduto', Id)
        if(location.host == '127.0.0.1:5500') {
            location.pathname = '/Sobre-Produto.html'
            
        } else if(location.host == 'wender101.github.io') {
            location.href = 'https://wender101.github.io/html-css/desafio/EDStore/Sobre-Produto.html'
        }
    })
}