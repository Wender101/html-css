let main  = document.querySelector('main')
//? Vai abrir o pop-up de adicioanar um produto
function abrirAddProduto() {
    document.getElementById('popUpAddProd').style.display = 'block'
    document.querySelector('html').style.overflow = 'hidden'
}

//? Vai fechar o pop-up de adicioanar um produto
function fecharPopUp() {
    document.getElementById('popUpAddProd').style.display = 'none'
    document.querySelector('html').style.overflow = 'auto'
    limpar()
}

//? Vai limpar os inputs de add
function limpar() {
    let imagem1 = document.getElementsByClassName('imgProd')[0].value = ''
    let imagem2 = document.getElementsByClassName('imgProd')[1].value = ''
    let imagem3 = document.getElementsByClassName('imgProd')[2].value = ''
    let imagem4 = document.getElementsByClassName('imgProd')[3].value = ''
    let name = document.getElementById('nomeProdutoAdd').value = ''
    let desccription = document.getElementById('descProd').value = ''
    let val = document.getElementById('valorProd').value = ''
    let descontoProd = document.getElementById('descontoInput').value = ''

    let imgEX1 = document.getElementsByClassName('imgEX')[0].src = ''
    let imgEX2 = document.getElementsByClassName('imgEX')[1].src = ''
    let imgEX3 = document.getElementsByClassName('imgEX')[2].src = ''
    let imgEX4 = document.getElementsByClassName('imgEX')[3].src = ''
    let imgPrincipal = document.getElementsByClassName('imgPrincipal')[0].src = ''
    let imgPrincipal2 = document.getElementsByClassName('imgPrincipal')[1].src = ''
    let idDoProduto = document.getElementById('idDoProduto').value = ''
    let tags = document.getElementById('tags').value = ''
    let descDetalhada = document.getElementById('descDetalhada').value = ''
    let selecCategoria = document.getElementById('selecCategoria').value = ''
}

//? Vai adicionar as informações do produto
let valInput = 0
let valInput2 = 0
let valInput3 = 0
let valInput4 = 0
let valInput5 = 0
let prontoPraAdd = false
setInterval(() => {
    for (let c = 0; c < 4; c++) {
        try {
            let inputImg = document.getElementsByClassName('imgProd')[c].value
            let nameProd = document.getElementById('nomeProdutoAdd').value
            let desc = document.getElementById('descProd').value
            let valorProd = document.getElementById('valorProd').value
            let descontoInput = document.getElementById('descontoInput').value
            let idDoProduto = document.getElementById('idDoProduto').value
            let descDetalhada = document.getElementById('descDetalhada').value
            let selecCategoria = document.getElementById('selecCategoria').value
    
            if(inputImg.length != valInput) {
                valInput = inputImg.length
                let imgEX = document.getElementsByClassName('imgEX')[c]
                document.getElementsByClassName('imgPrincipal')[0].src = document.getElementsByClassName('imgProd')[0].value
                document.getElementsByClassName('imgPrincipal')[1].src = document.getElementsByClassName('imgProd')[0].value
                try {
                    imgEX.src = inputImg
                    
                } catch (error) {
                    
                }
            }

            if(nameProd.length != valInput2) {
                valInput2 = nameProd.length
                document.getElementsByClassName('nameProd')[0].innerHTML = nameProd

                document.getElementsByClassName('nameProd')[1].innerHTML = nameProd
            }

            if(desc.length != valInput3) {
                if(desc.length == 236 && valInput3 != desc.length) {
                    alert('Você excedeu o máximo de caracteres na descrição resumida')
                } else {
                    document.getElementById('desc').innerText = desc
                }
                valInput3 = desc.length
            }

            if(descDetalhada.length != valInput4) {
                valInput4 = descDetalhada.length
                document.getElementById('descricaoP').innerHTML = descDetalhada
            }

            if(descontoInput.length != valInput5) {
                valInput5 = descontoInput.length
                if(descontoInput <= 0) {
                    document.getElementById('qDesconto').innerText = '0% OFF'
                } else {
                    document.getElementById('qDesconto').innerText = descontoInput + '%'
                }
            }

            // //? Vai calcular o desconto
            if(valorProd.length >= 0 || descontoInput.length != valInput5) {
                if(descontoInput <= 0) {
                    descontoInput = 0
                }
                let valorComDesconto = (((descontoInput * valorProd) / 100) - valorProd) * -1
                var res = valorComDesconto
                if(descontoInput != 0) {
                    res = (valorProd - valorComDesconto) + valorComDesconto
                }

                document.getElementById('valorNormal').innerText = 'R$' + res
                document.getElementsByClassName('valorProdAdd')[0].innerText = 'R$' + valorComDesconto.toFixed(2)
                document.getElementsByClassName('valorProdAdd')[1].innerText = 'R$' + valorComDesconto.toFixed(2)
                document.getElementById('valorSemDc').innerText = 'R$' + res.toFixed(2)
                document.getElementById('salvo').innerText = 'Salvo - R$' + (res - valorComDesconto).toFixed(2)
            }

            //? Vai adcionar uma nova categoria
            if(selecCategoria == 'Adcionar Nova Categoria') {
                let addNovaCategoria = document.getElementById('addNovaCategoria')
                addNovaCategoria.style.display = 'flex'
                
                let btnCriarCat = document.getElementById('criarCat')
                btnCriarCat.addEventListener('click', () => {
                        if(selecCategoria == 'Adcionar Nova Categoria') {
                            let select = document.getElementById('selecCategoria')
                            let novoCatAdded = document.getElementById('novoCatAdded')
                            novoCatAdded.value = document.getElementById('novaCat').value
                            novoCatAdded.innerText = document.getElementById('novaCat').value
                            select.value = document.getElementById('novaCat').value
                           
                            addNovaCategoria.style.display = 'none'
                        }
                })
            }

            //? Vai chevcar se todos os inputs importantes foram respondidos
            if(document.getElementsByClassName('imgProd')[0].value.length > 0 && nameProd.length > 0 && descDetalhada.length > 0 && desc.length > 0 && desc.length <= 236 && selecCategoria != 'Adcionar Nova Categoria' && selecCategoria != '...' && valorProd.length > 0 && idDoProduto.length > 0) {
                prontoPraAdd = true
                document.getElementById('AddBtn').style.background = '#008ecc'
                document.getElementById('AddBtn').style.cursor = 'pointer'
            } else {
                prontoPraAdd = false
                document.getElementById('AddBtn').style.background = '#666'
                document.getElementById('AddBtn').style.cursor = 'auto'
            }
        } catch {}
    }
}, 100)

//? Vai adicionar o produto
function addProduto() {
    if(prontoPraAdd == true) {
        let imagem1 = document.getElementsByClassName('imgProd')[0].value
        let imagem2 = document.getElementsByClassName('imgProd')[1].value
        let imagem3 = document.getElementsByClassName('imgProd')[2].value
        let imagem4 = document.getElementsByClassName('imgProd')[3].value
        let name = document.getElementById('nomeProdutoAdd').value
        let desccription = document.getElementById('descProd').value
        let val = document.getElementById('valorProd').value
        let descontoProd = document.getElementById('descontoInput').value
        let idDoProduto = document.getElementById('idDoProduto').value
        let descDetalhada = document.getElementById('descDetalhada').value
        let tags = document.getElementById('tags').value
        let selecCategoria = document.getElementById('selecCategoria').value
        
        let obj = {
            Img1: imagem1,
            Img2: imagem2,
            Img3: imagem3,
            Img4: imagem4,
            Nome: name,
            Desc: desccription,
            DescDetalhada: descDetalhada,
            Valor: val,
            Desconto: descontoProd,
            Id: idDoProduto,
            Tags: tags,
            Categoria: selecCategoria
        }

        db.collection('Produtos').add(obj)
        fecharPopUp()
        main.innerHTML = ''
    }
}

//? Vai carregar o produto na tela
function carregarProduto() {
    main.innerHTML = ''
    db.collection('Produtos').onSnapshot((data) => {
        data.docs.map(function(val) {
            let Produtos = val.data()

            criaProduto(Produtos.Img1, Produtos.Img2, Produtos.Img3, Produtos.Img4, Produtos.Nome, Produtos.Desc , Produtos.Valor, Produtos.Desconto, Produtos.Id)
        })
    })
} carregarProduto()

function criaProduto(Img1 ,Img2, Img3, Img4, Nome, Desc, Valor, Desconto, Id) {
    let prod = document.createElement('div')
    let localImg = document.createElement('div')
    let imgProduto = document.createElement('img')
    let sobreProd = document.createElement('div')
    let nameProd = document.createElement('p')
    let p = document.createElement('p')
    let valorStrong = document.createElement('strong')
    let valorSemDescontoT = document.createElement('span')
    let valorSalvo = document.createElement('span')
    let divEdit = document.createElement('div')
    let spanEdit = document.createElement('span')

    //? Class
    prod.className = 'prod'
    spanEdit.className = 'spanEdit'
    divEdit.className = 'divEdit'
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
    divEdit.appendChild(spanEdit)
    p.appendChild(valorStrong)
    p.appendChild(valorSemDescontoT)
    localImg.appendChild(imgProduto)
    sobreProd.appendChild(nameProd)
    sobreProd.appendChild(p)
    sobreProd.appendChild(valorSalvo)
    prod.appendChild(divEdit)
    prod.appendChild(localImg)
    prod.appendChild(sobreProd)
    main.appendChild(prod)

    //? Funções de click
    prod.addEventListener('click', (e) => {
        let el = e.target.className
        if(el != 'divEdit' && el != 'spanEdit') {

            localStorage.setItem('sobreProduto', Id)
            if(location.host == '127.0.0.1:5500') {
                location.pathname = '/Sobre-Produto.html'
                
            } else if(location.host == 'wender101.github.io') {
                location.href = 'https://wender101.github.io/html-css/desafio/EDStore/Sobre-Produto.html'
            }
        }
    })
}

//? Vai criar as categorias 
function criaCategorias() {
    let todasAsCategorias = ['...']
    db.collection('Produtos').onSnapshot((data) => {
        data.docs.map(function(val) {
            let Produtos = val.data()
            
            let jaTemEssaCategoria = false
            for(let c = 0; c <= todasAsCategorias.length + 1; c++) {
                try {
                    if(todasAsCategorias[c] == Produtos.Categoria) {
                        jaTemEssaCategoria = true
                        
                    } else if(c + 1 == todasAsCategorias.length && jaTemEssaCategoria == false) {
                        todasAsCategorias.push(Produtos.Categoria)
                        let select = document.getElementById('selecCategoria')
                        let option = document.createElement('option')
                        option.value = Produtos.Categoria
                        option.innerText = Produtos.Categoria
                        select.appendChild(option)
                    }
                } catch (error) {
                    console.warn(error);
                }
                
            }
        })
    })
} criaCategorias()
