const produtoPesquisado1 = localStorage.getItem('produtoPesquisado')
const produtoPesquisado2 = JSON.parse(produtoPesquisado1)

//! Vai usar a URL da pág como guía para encontrar o produto
function urlPage() {
    let url = window.location.href

    let l1 = url.substr(-5)

    if(l1 != '.html') {
        for (let c = 0; c <= 20; c++) {
            let b = c - 1
            let letra = url.substr(-c)
            let fim = letra.substring(0, 1)
            let qContrario
            
            if(fim == '#') {
                document.querySelector('title').innerText = letra = url.substr(-b)
                document.getElementById('classProduto').innerText = url.substr(-b)

               if(url.substr(-b) == 'Cabos') {
                    qContrario = 1
                } else if(url.substr(-b) == 'Adaptadores') {
                    qContrario = 2
                } else if(url.substr(-b) == 'Teclados') {
                    qContrario = 3
                } else if(url.substr(-b) == 'Mouse') {
                    qContrario = 4
                } else if(url.substr(-b) == 'Gabinetes') {
                    qContrario = 5
                } else if(url.substr(-b) == 'Headset') {
                    qContrario = 6
                } else if(url.substr(-b) == 'Controles') {
                    qContrario = 7
                } else if(url.substr(-b) == 'Fontes') {
                    qContrario = 8
                } else if(url.substr(-b) == 'MousePad') {
                    qContrario = 9
                } else if(url.substr(-b) == 'Processadores') {
                    qContrario = 10
                } else if(url.substr(-b) == 'Memória') {
                    qContrario = 11
                } else if(url.substr(-b) == 'SSD') {
                    qContrario = 12
                } else if(url.substr(-b) == 'Coolers') {
                    qContrario = 13
                } else {
                    qContrario = 14
                }           

                let a = [url.substr(-b), qContrario]
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

//! vai adicionar o produto
let id = 0
db.collection('Produtos').onSnapshot((data) => {
    const main = document.querySelector('main')
    main.innerHTML = ''
    data.docs.map(function(val) {
        let p = val.data()

        if(p.classe == document.querySelector('title').innerText) {
            document.getElementById('carregando').style.display = 'none'
            construirProduto(p.classe, p.nome, p.desc, p.imagem1, p.imagem2, p.id)
            
            if(p.id > id) {
                id = p.id
            }
        }

        setTimeout(() => {
            let carregando = document.getElementById('carregando')
            if(carregando.style.display != 'none') {
                carregando.style.display = 'none'
                document.getElementById('classProduto').innerText = 'Parece que algo deu errado :('
            }
        }, 8000);
    })
}) 

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