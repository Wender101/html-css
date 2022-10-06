let total = 0
//! Vai pegar do browser o carrinho
const carrinho1 = localStorage.getItem('carrinho')
const carrinho2 = JSON.parse(carrinho1)
let carrinho = []

try {
    for (let c = 0; c < carrinho2.length; c++) {
        fetch(`assets/json/dados.json`).then(resposta => {
            return resposta.json()
        }).then(bancoDs => {
            let produtoBancoDs
    
            carrinho.push(carrinho2[c])
            total++
            if(carrinho2[c].Categoria == 'Cabos') {
                produtoBancoDs = bancoDs.Cabos[carrinho2[c].id]
            } else if(carrinho2[c].Categoria == 'Adaptadores') {
                produtoBancoDs = bancoDs.Adaptadores[carrinho2[c].id]
            } else if(carrinho2[c].Categoria == 'Teclados') {
                produtoBancoDs = bancoDs.Teclados[carrinho2[c].id]
            } else if(carrinho2[c].Categoria == 'Mouse') {
                produtoBancoDs = bancoDs.Mouse[carrinho2[c].id]
            } else if(carrinho2[c].Categoria == 'Gabinetes') {
                produtoBancoDs = bancoDs.Gabinetes[carrinho2[c].id]
            } else if(carrinho2[c].Categoria == 'Headset') {
                produtoBancoDs = bancoDs.Headset[carrinho2[c].id]
            } else if(carrinho2[c].Categoria == 'Controles') {
                produtoBancoDs = bancoDs.Controles[carrinho2[c].id]
            } else if(carrinho2[c].Categoria == 'Fontes') {
                produtoBancoDs = bancoDs.Fontes[carrinho2[c].id]
            } else if(carrinho2[c].Categoria == 'MousePad') {
                produtoBancoDs = bancoDs.MousePad[carrinho2[c].id]
            } else if(carrinho2[c].Categoria == 'Processadores') {
                produtoBancoDs = bancoDs.Processadores[carrinho2[c].id]
            } else if(carrinho2[c].Categoria == 'Memória') {
                produtoBancoDs = bancoDs.Memória[carrinho2[c].id]
            } else if(carrinho2[c].Categoria == 'SSD') {
                produtoBancoDs = bancoDs.SSD[carrinho2[c].id]
            } else if(carrinho2[c].Categoria == 'Coolers') {
                produtoBancoDs = bancoDs.Coolers[carrinho2[c].id]
            } else if(carrinho2[c].Categoria == 'Outros') {
                produtoBancoDs = bancoDs.Outros[carrinho2[c].id]
            } else {
                produtoBancoDs = 'Error'
            }
             
            criaProdutos(produtoBancoDs[1], produtoBancoDs[2], produtoBancoDs[0], c, carrinho2[c].id)
        })
    }

} catch {
    carrinho = []
    document.getElementsByClassName('separacao')[0].style.display = 'none'
    let footer = document.querySelector('footer')
    footer.style.position = 'absolute'
    footer.style.bottom = '0px'
    
}

if(total <= 0) {
    document.querySelector('main').id = 'main'
}

let idSpan
function criaProdutos(titulo, desc, src, id, idP) {
    document.getElementById('recado').style.display = 'none'

    const main = document.querySelector('main')
    const containerProduto = document.createElement('div')
    const localImgProduto = document.createElement('a')
    const span = document.createElement('span')
    const imgProduto = document.createElement('img')
    const strong = document.createElement('strong')
    const p = document.createElement('p')
    
    containerProduto.classList = 'containerProduto'
    containerProduto.id = `containerProduto${id}`

    localImgProduto.className = 'localImgProduto'
    span.classList = 'x'
    span.id = id
    localImgProduto.href = 'sobre-o-produto.html'
    imgProduto.className = 'imgProduto'
    imgProduto.src = src
    span.innerText = 'x'
    strong.innerHTML = titulo
    p.innerText = desc

    //! AppendChild
    localImgProduto.appendChild(imgProduto)
    containerProduto.appendChild(span)
    containerProduto.appendChild(localImgProduto)
    containerProduto.appendChild(strong)
    containerProduto.appendChild(p)
    main.appendChild(containerProduto)

    //! Vai perguntar se o user realmente quer remover o produto do carrinho
    span.addEventListener('click', () => {
        document.getElementById('infRemover').style.display = 'flex'
        idSpan = span.id
    })

    //! Vai add a memoria qual produto vai ser analizado pelo usuario 
    localImgProduto.addEventListener('click', () => {
        let produto = {
            p: carrinho2[id].Categoria,
            id: idP,
            maxC: carrinho2[id].maxC
        }

        const sobreProduto = JSON.stringify(produto)
        localStorage.setItem('sobreProduto', sobreProduto)
    })

    document.getElementById('total').innerText = `Total de Produtos: ${total}`
}

//! Vai remover o produto do carrinho
function removerDoCarrinho() {
    carrinho.splice(idSpan, 1)
    let salvarCarrinho = JSON.stringify(carrinho)
    localStorage.setItem('carrinho', salvarCarrinho)
    location.reload()
}

//! Vai fechar a msg "remover o produto do carrinho"
function fecharInfRemover() {
    document.getElementById('infRemover').style.display = 'none'
}

//! Vai fechar a msg "remover o produto do carrinho"
function limparCarrinho() {
        carrinho = []

    let salvarCarrinho = JSON.stringify(carrinho)
    localStorage.setItem('carrinho', salvarCarrinho)
    location.reload()
}