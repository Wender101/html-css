//! Vai pegar do browser o produto que foi salvo
const sobreProduto1 = localStorage.getItem('sobreProduto')
const sobreProduto2 = JSON.parse(sobreProduto1)
let idProdSelecionado = sobreProduto2[1]
let descProdSelecionado = sobreProduto2[0]
let urlSemProduto
let pesquisado = false
//? Vai mudar a url
function trocarURL() {
    if(document.querySelector('title').innerText != 'EDStore - Produtos' && pesquisado == false) {
        pesquisado = true
        let url = window.location.href
        if(url.substr(-4) != 'html') {
            for(let c = 0; c < 150; c++) {
                let a = url.substr(-c)
                if(a.substr(1, 1) == '?') {
                    let ab = c - 2
                    descProdSelecionado = url.substr(-ab)
                    let pDescEnviar = descProdSelecionado
                    pDescEnviar = pDescEnviar.replace(/[`~!@#$%^&*()_\-+=\[\]{};:'"\\|\/,.<>?\s]/g, ' ').toLowerCase()
                    pDescEnviar = pDescEnviar.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
                    pDescEnviar = pDescEnviar.replace(/^\s+|\s+$/gm,'')
                    pDescEnviar = pDescEnviar.replace(/\s+/g, '-')
                    let array = [descProdSelecionado, idProdSelecionado]
                    localStorage.setItem('sobreProduto', JSON.stringify(array))
                    urlSemProduto = window.location.href.replace(`?${descProdSelecionado}`, '')
                }
            }
        } else if(sobreProduto2[0] != undefined && sobreProduto2[0] != null && url.substr(-1) == 'l') {
            descProdSelecionado = descProdSelecionado.replace(/[`~!@#$%^&*()_\-+=\[\]{};:'"\\|\/,.<>?\s]/g, ' ').toLowerCase()
            descProdSelecionado = descProdSelecionado.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
            descProdSelecionado = descProdSelecionado.replace(/^\s+|\s+$/gm,'')
            descProdSelecionado = descProdSelecionado.replace(/\s+/g, '-')
            window.location.href += '?' + descProdSelecionado
            trocarURL()
        }
    }
} trocarURL()

function criaProduto() {
    db.collection('Produtos').onSnapshot((data) => {
        data.docs.map(function(val) {
            let Produtos = val.data()

            //? Caso o user tenha se conectado a conta google dps de clicar em salvar ao carrinho, o produto sera salvo altomatico após o reload
            try {
                let reloadPage = localStorage.getItem('reloadPage')

                if(reloadPage == '1') {
                    localStorage.setItem('reloadPage', '2')
                    salvarNoCarrinho()
                }
            } catch (error) {}

            //? Vai pesquisar de acordo com a Url
            let pDesc = Produtos.Desc
            pDesc = pDesc.replace(/[`~!@#$%^&*()_\-+=\[\]{};:'"\\|\/,.<>?\s]/g, ' ').toLowerCase()
            pDesc = pDesc.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
            pDesc = pDesc.replace(/^\s+|\s+$/gm,'')
            pDesc = pDesc.replace(/\s+/g, '-')

            //? Vai criar os produtos
            if(pDesc == descProdSelecionado && Produtos.Estado != 'Suspenso') {
                idProdSelecionado = Produtos.Id
                document.getElementById('valorDoProduto').style.display = 'block'
                document.getElementById('localBtns').style.display = 'flex'
                document.getElementById('othersImgs').style.display = 'block'
                document.getElementById('chat').style.display = 'block'
                document.getElementById('descricaoDetalhada').style.display = 'block'
                document.getElementsByClassName('text')[0].style.display = 'block'
                document.getElementById('infos').style.position = ''
                document.getElementById('voltar').style.display = 'none'

                //? --------------------------------
                document.getElementsByClassName('imgPrincipal')[0].src = Produtos.Img1 
                document.getElementsByClassName('imgEX')[0].src = Produtos.Img1 
                document.getElementsByClassName('imgEX')[1].src = Produtos.Img2
                document.getElementsByClassName('imgEX')[2].src = Produtos.Img3
                document.getElementsByClassName('imgEX')[3].src = Produtos.Img4
                document.getElementsByClassName('nameProd')[0].innerText = Produtos.Nome
                document.getElementById('desc').innerText = Produtos.Desc
                if(Produtos.DescDetalhada != undefined && Produtos.DescDetalhada != 'undefined') {
                    document.getElementById('descricaoP').innerHTML = Produtos.DescDetalhada
                } else {
                    document.getElementById('descricaoP').innerHTML = 'Este produto não contém uma descrição mais detalhado do produto ;/'
                }

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
            } else if(Produtos.Id == descProdSelecionado && Produtos.Estado == 'Suspenso') {
                document.getElementsByClassName('nameProd')[0].innerText = 'Oops'
                document.getElementById('desc').innerText = 'O Produto se encontra suspenso ou fora de estoque. Tente novamente mais tarde.'
                document.getElementById('valorDoProduto').style.display = 'none'
                document.getElementById('localBtns').style.display = 'none'
                document.getElementById('othersImgs').style.display = 'none'
                document.getElementById('chat').style.display = 'none'
                document.getElementById('descricaoDetalhada').style.display = 'none'
                document.getElementsByClassName('text')[0].style.display = 'none'
                document.getElementById('infos').style.position = 'relative'
                document.getElementById('voltar').style.display = 'block'
                document.getElementById('voltar').addEventListener('click', () => {
                    window.history.back()
                })
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
                            if(Produtos.Estado != 'Suspenso') {
                                arrayProd.push(Produtos.Nome)
                                criaRelacionados(Produtos.Img1, Produtos.Img2, Produtos.Img3, Produtos.Img4, Produtos.Nome, Produtos.Desc , Produtos.Valor, Produtos.Desconto, Produtos.Id)
                            }
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
        let pDescEnviar = Desc
        pDescEnviar = pDescEnviar.replace(/[`~!@#$%^&*()_\-+=\[\]{};:'"\\|\/,.<>?\s]/g, ' ').toLowerCase()
        pDescEnviar = pDescEnviar.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
        pDescEnviar = pDescEnviar.replace(/^\s+|\s+$/gm,'')
        pDescEnviar = pDescEnviar.replace(/\s+/g, '-')

        let array = [pDescEnviar, Id]
        localStorage.setItem('sobreProduto', JSON.stringify(array))
        setTimeout(() => {
            if(location.host == '127.0.0.1:5500') {
                location.href = `http://${location.host}${location.pathname}?${pDescEnviar}`
                
            } else if(location.host == 'wender101.github.io') {
                location.href = `https://${location.host}${location.pathname}?${pDescEnviar}`
            }
        }, 100)
    })
}

//? Adicionar o produto ao carrinho
let cloneCarrinho = []
function salvarNoCarrinho(addNovamente = false) {
    if(email != undefined) {
        let checkTemCarrinho = false
        let carrinhoCarregado = false
        let feito = false
        db.collection('User').onSnapshot((data) => {
            data.docs.map(function(valCarrinho) {
                let User = valCarrinho.data()
    
                //? Caso o usar já tenha um carrinho criado ele vai adicionar o produto direto
                if(User.Email == email && carrinhoCarregado == false) {
                    cloneCarrinho = User.Carrinho
    
                    db.collection('Produtos').onSnapshot((data) => {
                        data.docs.map(function(val) {
                            let Produto = val.data()
    
                            try {
                            if(Produto.Id == descProdSelecionado && cloneCarrinho.length > 0) {
                                    let jaTemProdutoADDNoCarrinho = false
                                    for(let c = 0; c < cloneCarrinho.length; c++) {

                                        if(cloneCarrinho[c].Id == descProdSelecionado && feito == false) {
                                            jaTemProdutoADDNoCarrinho = true
                                            document.getElementById('pop-Up-AddProdutoNovamente').style.display = 'flex'
                                
                                            if(addNovamente == true && feito == false) {
                                                feito = true
                                                fecharPopUp()
                                                let obj = {
                                                    Id: Produto.Id
                                                }
                                                cloneCarrinho.push(obj)
                                                db.collection('User').doc(valCarrinho.id).update({Carrinho: cloneCarrinho})
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
                                            db.collection('User').doc(valCarrinho.id).update({Carrinho: cloneCarrinho})
                                            document.getElementById('infAddCarrinho').style.bottom = '0px'
                                            setTimeout(() => {
                                                document.getElementById('infAddCarrinho').style.bottom = '-100px'
                                            }, 10000)
                                        }
                                    }

                                } else if(Produto.Id == descProdSelecionado && cloneCarrinho.length <= 0) {
                                    setTimeout(() => {
                                        carrinhoCarregado = true
                                        db.collection('Produtos').onSnapshot((data) => {
                                            data.docs.map(function(val) {
                                                let Produto = val.data()
                    
                                                if(Produto.Id == descProdSelecionado) {
                                                    cloneCarrinho = []
                                                    let obj = {
                                                        Id: Produto.Id
                                                    }
                                                    cloneCarrinho.push(obj)
                    
                                                    db.collection('User').doc(valCarrinho.id).update({Carrinho: cloneCarrinho})
                                                    document.getElementById('infAddCarrinho').style.bottom = '0px'
                                                    setTimeout(() => {
                                                        document.getElementById('infAddCarrinho').style.bottom = '-100px'
                                                    }, 10000)
                                                }
                                            })
                                        })
                                    }, 500)
                                }
                            } catch {
                                setTimeout(() => {
                                    carrinhoCarregado = true
                                    db.collection('Produtos').onSnapshot((data) => {
                                        data.docs.map(function(val) {
                                            let Produto = val.data()
                
                                            if(Produto.Id == descProdSelecionado) {
                                                cloneCarrinho = []
                                                let obj = {
                                                    Id: Produto.Id
                                                }
                                                cloneCarrinho.push(obj)
                
                                                db.collection('User').doc(valCarrinho.id).update({Carrinho: cloneCarrinho})
                                                document.getElementById('infAddCarrinho').style.bottom = '0px'
                                                setTimeout(() => {
                                                    document.getElementById('infAddCarrinho').style.bottom = '-100px'
                                                }, 10000)
                                            }
                                        })
                                    })
                                }, 500)
                            }
                        })
                    })
                }

            })
        })

        //? O user n estaja logado á uma conta google
    } else {
        localStorage.setItem('reloadPage', '1')
        login()
    }
}

//? Vai fechar o pop up
function fecharPopUp() {
    document.getElementById('pop-Up-AddProdutoNovamente').style.display = 'none'
}