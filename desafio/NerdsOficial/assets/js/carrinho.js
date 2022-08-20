let total = 0

//! Vai pegar do browser o carrinho
const carrinho1 = localStorage.getItem('carrinho')
const carrinho2 = JSON.parse(carrinho1)
let carrinho = []

try {
    for (let c = 0; c < carrinho2.length; c++) {

        carrinho.push(carrinho2[c])
        total++

        criaProdutos(carrinho2[c].titulo, carrinho2[c].desc, carrinho2[c].imgProduto, c)

        //! Vai calcular o total de produtos no carrinho
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

function criaProdutos(titulo, desc, src, id) {
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

    //! Vai mudar as imgs para a primeira img

    const el = src
    
    var novoLink1 = el.slice(0, -1)
    
    if(novoLink1.substr(-1) == 'e') {
        var novoLink2 = novoLink1.slice(0, -1)
        var novoLink23 = novoLink2.slice(0, -1)
        var novoLink3 = novoLink23.slice(0, -1)
        var novoLink4 = novoLink3.slice(0, -1)
    
    } else {
        var novoLink2 = novoLink1.slice(0, -1)
        var novoLink3 = novoLink2.slice(0, -1)
        var novoLink4 = novoLink3.slice(0, -1)
    }
    
    if(novoLink1.substr(-1) == 'e') {
        src = `${novoLink4}.jpeg`
    
    } else if(novoLink2.substr(-1) == 'j') {
        src = `${novoLink4}.jpg`
    
    } else {
        src = `${novoLink4}.png`
    }

    //!
    
    imgProduto.src = src
    span.innerText = 'X'
    strong.innerHTML = titulo
    p.innerText = desc

    //! AppendChild
    localImgProduto.appendChild(imgProduto)
    containerProduto.appendChild(span)
    containerProduto.appendChild(localImgProduto)
    containerProduto.appendChild(strong)
    containerProduto.appendChild(p)
    main.appendChild(containerProduto)

    //! Vai apagar o produto do carrinho
    span.addEventListener('click', () => {
        carrinho.splice(span.id, 1)
        let salvarCarrinho = JSON.stringify(carrinho)
        localStorage.setItem('carrinho', salvarCarrinho)

        location.reload()
    })


    //! Vai add a memoria qual produto vai ser analizado pelo usuario 
    localImgProduto.addEventListener('click', () => {
        let produto = {
            imgProduto: imgProduto.src,
            titulo: strong.innerText,
            desc: p.innerText,
        }

        const sobreProduto = JSON.stringify(produto)
        localStorage.setItem('sobreProduto', sobreProduto)
    })

    document.getElementById('total').innerText = `Total de Produtos: ${total}`
}