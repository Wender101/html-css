let idProdSelecionado = localStorage.getItem('sobreProduto')
function criaProduto() {
    db.collection('Produtos').onSnapshot((data) => {
        data.docs.map(function(val) {
            let Produtos = val.data()
            if(Produtos.Id == idProdSelecionado) {
                document.getElementsByClassName('imgPrincipal')[0].src = Produtos.Img1 
                document.getElementsByClassName('imgEX')[0].src = Produtos.Img1 
                document.getElementsByClassName('imgEX')[1].src = Produtos.Img2
                document.getElementsByClassName('imgEX')[2].src = Produtos.Img3
                document.getElementsByClassName('imgEX')[3].src = Produtos.Img4
                document.getElementsByClassName('nameProd')[0].innerText = Produtos.Nome
                document.getElementById('desc').innerText = Produtos.Desc
                document.getElementById('descricaoP').innerHTML = Produtos.DescDetalhada

                let valorComDesconto = (((Produtos.Desconto * Produtos.Valor) / 100) - Produtos.Valor) * -1
                var res = valorComDesconto
                if(Produtos.Desconto != 0) {
                    res = (Produtos.Valor - valorComDesconto) + valorComDesconto
                }
                document.getElementById('valorNormal').innerText = 'R$' + res.toFixed(2)
                document.getElementsByClassName('valorProdAdd')[0].innerText = 'R$' + valorComDesconto.toFixed(2)
                document.getElementById('qDesconto').innerText = Produtos.Desconto + '% OFF'
                //Produtos.Id

                produtosRelacionados(Produtos.Nome)

                //? Funções de click
                for (let c = 0; c < 4; c++) {
                    let imgClick = document.getElementsByClassName('imgEX')[c]
                    imgClick.addEventListener('mouseenter', () => {
                        document.getElementsByClassName('imgPrincipal')[0].src = imgClick.src
                    })
                }
            }
        })
    })
} criaProduto()

//? Vai criar os produtos relacionados
function produtosRelacionados(relacionados = '') {
    let arrayProd = []
    let kdPalavra = relacionados.split(' ')
    let max = 0
    for(let c = 0; c < relacionados.length; c++) {
        let palavraSeparada = kdPalavra[c]

        db.collection('Produtos').onSnapshot((data) => {
            data.docs.map(function(val) {
                let Produtos = val.data()

                try {
                    palavraSeparada = palavraSeparada.toLocaleLowerCase()
                    palavraSeparada = palavraSeparada.normalize('NFD').replace(/[\u0300-\u036f]/g, "") //? Vai remover os acentos
                    palavraSeparada = palavraSeparada.replace(/\s/g, '') //? Vai remover os espaços
                } catch (error) {}
                

                let nome = Produtos.Nome
                nome = nome.toLocaleLowerCase()
                nome = nome.normalize('NFD').replace(/[\u0300-\u036f]/g, "") //? Vai remover os acentos
                nome = nome.replace(/\s/g, '') //? Vai remover os espaços
        
                let desc = Produtos.Desc
                desc = desc.toLocaleLowerCase()
                desc = desc.normalize('NFD').replace(/[\u0300-\u036f]/g, "") //? Vai remover os acentos
                desc = desc.replace(/\s/g, '') //? Vai remover os espaços
                
                if(nome.includes(palavraSeparada) && max < 6 || desc.includes(palavraSeparada) && max < 6) {
                    max++
                    let igual = false
                    //? Vai impedir que os produtos se repitam
                    for(let b = -1; b < arrayProd.length; b++) {
                        if(arrayProd[b] == Produtos.Nome) {
                            igual = true
                        } else if(b + 1 == arrayProd.length && igual == false) {
                            arrayProd.push(Produtos.Nome)
                            criaRelacionados(Produtos.Img1, Produtos.Img2, Produtos.Img3, Produtos.Img4, Produtos.Nome, Produtos.Desc , Produtos.Valor, Produtos.Desconto, Produtos.Id)
                        }
                    }
                }
            })
        })
    }
}

function criaRelacionados(Img1 ,Img2, Img3, Img4, Nome, Desc, Valor, Desconto, Id) {
    let relacionadosLocal = document.getElementById('relacionadosLocal')
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
    relacionadosLocal.appendChild(prod)

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

//? Adicionar o produto ao carrinho
let cloneCarrinho = []
function salvarNoCarrinho(addNovamente = false) {
    let checkTemCarrinho = false
    let carrinhoCarregado = false
    let feito = false
    db.collection('Carrinho').onSnapshot((data) => {
        data.docs.map(function(valCarrinho) {
            let Carrinho = valCarrinho.data()

            //? Caso o usar já tenha um carrinho criado ele vai adicionar o produto direto
            if(Carrinho.EmailUser == email && carrinhoCarregado == false) {
                carrinhoCarregado = true
                checkTemCarrinho = true
                cloneCarrinho = Carrinho.Carrinho

                db.collection('Produtos').onSnapshot((data) => {
                    data.docs.map(function(val) {
                        let Produto = val.data()

                        if(Produto.Id == idProdSelecionado) {
                            let jaTemProdutoADDNoCarrinho = false

                            for(let c = 0; c < cloneCarrinho.length; c++) {
                                if(cloneCarrinho[c].Id == idProdSelecionado && feito == false) {
                                    jaTemProdutoADDNoCarrinho = true
                                    document.getElementById('pop-Up-AddProdutoNovamente').style.display = 'flex'
                        
                                    if(addNovamente == true && feito == false) {
                                        feito = true
                                        fecharPopUp()
                                        let obj = {
                                            Id: Produto.Id
                                        }
                                        cloneCarrinho.push(obj)
                                        db.collection('Carrinho').doc(valCarrinho.id).update({Carrinho: cloneCarrinho})
                                        document.getElementById('infAddCarrinho').style.bottom = '0px'
                                        setTimeout(() => {
                                            document.getElementById('infAddCarrinho').style.bottom = '-100px'
                                        }, 10000)
                                    }

                                } else if(c + 1 == cloneCarrinho.length && jaTemProdutoADDNoCarrinho == false && feito == false) {
                                    feito = true
                                    let obj = {
                                        Id: Produto.Id
                                    }
                                    cloneCarrinho.push(obj)
                                    db.collection('Carrinho').doc(valCarrinho.id).update({Carrinho: cloneCarrinho})
                                    document.getElementById('infAddCarrinho').style.bottom = '0px'
                                    setTimeout(() => {
                                        document.getElementById('infAddCarrinho').style.bottom = '-100px'
                                    }, 10000)
                                }
                            }
                        }
                    })
                })
            }

            //? Caso o user ainda n tenha um carrinho, ele vai criar um e adionar o produto
            setTimeout(() => {
                if(checkTemCarrinho == false && carrinhoCarregado == false) {
                    carrinhoCarregado = true
                    db.collection('Produtos').onSnapshot((data) => {
                        data.docs.map(function(val) {
                            let Produto = val.data()

                            if(Produto.Id == idProdSelecionado) {

                                let obj = {
                                    Id: Produto.Id
                                }
                                cloneCarrinho.push(obj)

                                let objCarrinho = {
                                    Carrinho: cloneCarrinho,
                                    EmailUser: email
                                }

                                db.collection('Carrinho').add(objCarrinho)
                                document.getElementById('infAddCarrinho').style.bottom = '0px'
                                setTimeout(() => {
                                    document.getElementById('infAddCarrinho').style.bottom = '-100px'
                                }, 10000)
                            }
                        })
                    })
                }
            }, 500)
        })
    })
}

//? Vai fechar o pop up
function fecharPopUp() {
    document.getElementById('pop-Up-AddProdutoNovamente').style.display = 'none'
}