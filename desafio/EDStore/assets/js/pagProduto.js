let main = document.querySelector('main')
let prodEncontrado = false

function chamarDB() {
    main.innerHTML = ''
    let produtoExpecifico = false
    db.collection('Produtos').onSnapshot((data) => {
        data.docs.map(function(val) {
            let Produtos = val.data()
    
            let nome = Produtos.Nome
            nome = nome.toLocaleLowerCase()
            nome = nome.normalize('NFD').replace(/[\u0300-\u036f]/g, "") //? Vai remover os acentos
            nome = nome.replace(/\s/g, '') //? Vai remover os espaços
    
            let pesquisaInp = localStorage.getItem('produtoPagProduto')
            pesquisaInp = pesquisaInp.toLocaleLowerCase()
            pesquisaInp = pesquisaInp.normalize('NFD').replace(/[\u0300-\u036f]/g, "") //? Vai remover os acentos
            pesquisaInp = pesquisaInp.replace(/\s/g, '') //? Vai remover os espaços

            if(nome == pesquisaInp) {
                if(Produtos.Estado != 'Suspenso') {
                    produtoExpecifico = true
                    criaProduto(Produtos.Img1, Produtos.Img2, Produtos.Img3, Produtos.Img4, Produtos.Nome, Produtos.Desc , Produtos.Valor, Produtos.Desconto, Produtos.Id)
                }

            } 

            //? Vai pesquisar por Tag
           setTimeout(() => {
                if(produtoExpecifico == false) {

                    let nome = Produtos.Nome
                    nome = nome.toLocaleLowerCase()
                    nome = nome.normalize('NFD').replace(/[\u0300-\u036f]/g, "") //? Vai remover os acentos
                    nome = nome.replace(/\s/g, '') //? Vai remover os espaços
            
                    let desc = Produtos.Desc
                    desc = desc.toLocaleLowerCase()
                    desc = desc.normalize('NFD').replace(/[\u0300-\u036f]/g, "") //? Vai remover os acentos
                    desc = desc.replace(/\s/g, '') //? Vai remover os espaços

                    let categoria = Produtos.Categoria
                    categoria = categoria.toLocaleLowerCase()
                    categoria = categoria.normalize('NFD').replace(/[\u0300-\u036f]/g, "") //? Vai remover os acentos
                    categoria = categoria.replace(/\s/g, '') //? Vai remover os espaços
                
                    let pesquisaInp = localStorage.getItem('produtoPagProduto')
                    pesquisaInp = pesquisaInp.toLocaleLowerCase()
                    pesquisaInp = pesquisaInp.normalize('NFD').replace(/[\u0300-\u036f]/g, "") //? Vai remover os acentos
                    pesquisaInp = pesquisaInp.replace(/\s/g, '') //? Vai remover os espaços

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

                            if(pesquisaInp.includes(tags3) && achado == false || pesquisaInp.includes(categoria) && achado == false) {
                                if(Produtos.Estado != 'Suspenso') {
                                    achado = true
                                    criaProduto(Produtos.Img1, Produtos.Img2, Produtos.Img3, Produtos.Img4, Produtos.Nome, Produtos.Desc , Produtos.Valor, Produtos.Desconto, Produtos.Id)
                                }
                            } else if(nome.includes(pesquisaInp) && achado == false || desc.includes(pesquisaInp) && achado == false) {
                                if(Produtos.Estado != 'Suspenso') {
                                    achado = true
                                    criaProduto(Produtos.Img1, Produtos.Img2, Produtos.Img3, Produtos.Img4, Produtos.Nome, Produtos.Desc , Produtos.Valor, Produtos.Desconto, Produtos.Id)
                                }
                            }
                        }
                    } catch(error) {
                        if(Produtos.Estado != 'Suspenso') {
                            if(nome.includes(pesquisaInp) || desc.includes(pesquisaInp) || pesquisaInp.includes(categoria) || categoria.includes(pesquisaInp)) {
                                criaProduto(Produtos.Img1, Produtos.Img2, Produtos.Img3, Produtos.Img4, Produtos.Nome, Produtos.Desc , Produtos.Valor, Produtos.Desconto, Produtos.Id)
                            }
                        }
                    }
                }
           }, 500)
                
        })
    })
} chamarDB()

function criaProduto(Img1 ,Img2, Img3, Img4, Nome, Desc, Valor, Desconto, Id) {
    document.getElementById('naoEncotrado').style.display = 'none'
    document.getElementById('carregando').style.display = 'none'
    prodEncontrado = true
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
    main.appendChild(prod)

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

function prodNaoEncontrado() {
    setTimeout(() => {
        if(prodEncontrado == false) {
            document.getElementById('carregando').style.display = 'none'
            document.getElementById('naoEncotrado').style.display = 'block'
    
            //? Vai guardar a pesquisa para adicionar o produto mais tarde
            if(email != undefined) {
                let PesquisaNaoEncontradaJaEmAndamento = false
                db.collection('PesquisaNaoEncontrada').onSnapshot((data) => {
                    data.docs.map(function(val) {
                        let PesquisaNaoEncontrada = val.data()
                        for(let c = 0; c < PesquisaNaoEncontrada.Pesquisa.length; c++) {
                            if(PesquisaNaoEncontrada.Email == email && PesquisaNaoEncontrada.Pesquisa[c] == localStorage.getItem('produtoPagProduto')) {
                                PesquisaNaoEncontradaJaEmAndamento = true
                            } else if(PesquisaNaoEncontrada.Email == email && Pesquisa[c] != localStorage.getItem('produtoPagProduto')) {
                                
                            }
                            
                            setTimeout(() => {
                                if(Pesquisa != localStorage.getItem('produtoPagProduto') && PesquisaNaoEncontradaJaEmAndamento == false) {
                                    let obj = {
                                        Email: email,
                                        Pesquisa: localStorage.getItem('produtoPagProduto')
                                    }
                                    db.collection('PesquisaNaoEncontrada').add(obj)
                                }
                            }, 1000)
                        }
                    })
                })
            }
        }
    }, 1000)
}
