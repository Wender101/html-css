let tamanhoAtual = 0
let key
let containerSugestao = document.getElementById('recomend')
setInterval(() => {
    //? Vai chamar a function sugetaoPesquisa sempre que o user digitar ou apagar algo no input
    let pesquisa = document.getElementById('pesquisaInput').value
    if(pesquisa.length != tamanhoAtual) {
        if(key != 'ArrowUp' && key != 'ArrowDown') {
            sugetaoPesquisa(pesquisa)
            tamanhoAtual = pesquisa.length
        }
    } else if(pesquisa.length == 0) {
        containerSugestao.style.display = 'none'
        document.getElementById('pesquisaInput').style.borderRadius = '10px'
    }
}, 10)

function sugetaoPesquisa(pesquisa) {
    let max = 0 //? Vai determinar o maximo de sugestões
    
    db.collection('Produtos').onSnapshot((data) => {
        containerSugestao.innerHTML = ''
        data.docs.map(function(val) {
            let valSugetao = val.data()

            let nome = valSugetao.Nome
            nome = nome.toLocaleLowerCase()
            nome = nome.normalize('NFD').replace(/[\u0300-\u036f]/g, "") //? Vai remover os acentos
            nome = nome.replace(/\s/g, '') //? Vai remover os espaços

            let desc = valSugetao.Desc
            desc = desc.toLocaleLowerCase()
            desc = desc.normalize('NFD').replace(/[\u0300-\u036f]/g, "") //? Vai remover os acentos
            desc = desc.replace(/\s/g, '') //? Vai remover os espaços
        
            let pesquisaInp = pesquisa
            pesquisaInp = pesquisaInp.toLocaleLowerCase()
            pesquisaInp = pesquisaInp.normalize('NFD').replace(/[\u0300-\u036f]/g, "") //? Vai remover os acentos
            pesquisaInp = pesquisaInp.replace(/\s/g, '') //? Vai remover os espaços

            if(nome.includes(pesquisaInp) && max < 6 || desc.includes(pesquisaInp) && max < 6) {
                achado = true
                containerSugestao.style.display = 'block'
                document.getElementById('pesquisaInput').style.borderRadius = '10px 10px 0px 0px'
                let p = document.createElement('p')
                p.id = `pSugestao${max}`
                p.innerText = valSugetao.Nome

                containerSugestao.appendChild(p)
                max++

                // //? Ao clicar no p
                p.addEventListener('click', () => {
                    localStorage.setItem('produtoPagProduto', p.innerText)

                    if(location.host == '127.0.0.1:5500') {
                        if(location.pathname == '/pagProduto.html') {
                            chamarDB()
                            input.value = ''
                        } else {
                            location.pathname = '/pagProduto.html'
                        }
                        
                    } else if(location.host == 'wender101.github.io') {
                        if(location.href == 'https://wender101.github.io/html-css/desafio/EDStore/pagProduto.html') {
                            chamarDB()
                            input.value = ''
                        } else {
                            location.href = 'https://wender101.github.io/html-css/desafio/EDStore/pagProduto.html'
                        }
                    }
                })

                //? Vai selecionar as sugestões ao precionar as teclas de subir ou decer
                let contadorSugestao = -1
                document.getElementById('pesquisaInput').addEventListener('keydown', function(event) {
                    key = event.key
                    switch (event.key) {

                        case "ArrowUp":
                            if(contadorSugestao > 0) {
                                contadorSugestao--
                            }
                        break;

                        case "ArrowDown":
                            if(contadorSugestao < 5) {
                                contadorSugestao++
                            }
                        break;
                        
                        case "Backspace":
                            if(contadorSugestao != -1) {
                                contadorSugestao = -1
                            }
                        break;

                        case "Enter":
                            contadorSugestao = -1
                        break;
                    }

                    try {
                        for(let c = 0; c < max; c++) {
                            const pSelecionado = document.getElementById(`pSugestao${c}`)
                            pSelecionado.style.background = 'transparent'
                            pSelecionado.style.color = '#089fdb'
                        }

                        const pSelecionado = document.getElementById(`pSugestao${contadorSugestao}`)
                        pSelecionado.style.background = '#089fdb'
                        pSelecionado.style.color = '#fff'
                        input.value = pSelecionado.innerText
                    } catch {}
                })
            } else if(max == 0) {
                containerSugestao.style.display = 'none'
                document.getElementById('pesquisaInput').style.borderRadius = '10px'
            }
        })
    })
}

document.addEventListener('click', (e) => {
    let el = e.target.id
    if(el != 'pesquisaInput') {
        containerSugestao.style.display = 'none'
        document.getElementById('pesquisaInput').style.borderRadius = '10px'
    }
})

//? Barra de pesquisa
let input = document.getElementById('pesquisaInput')
document.addEventListener('keypress', (e) => {
    if(e.keyCode == 13 && input.value.length > 1) {
        localStorage.setItem('produtoPagProduto', input.value)
        containerSugestao.style.display = 'none'
        document.getElementById('pesquisaInput').style.borderRadius = '10px'
        tamanhoAtual = 0

        if(location.host == '127.0.0.1:5500') {
            if(location.pathname == '/pagProduto.html') {
                chamarDB()
                input.value = ''
            } else {
                location.pathname = '/pagProduto.html'
            }
            
        } else if(location.host == 'wender101.github.io') {
            if(location.href == 'https://wender101.github.io/html-css/desafio/EDStore/pagProduto.html') {
                chamarDB()
                input.value = ''
            } else {
                location.href = 'https://wender101.github.io/html-css/desafio/EDStore/pagProduto.html'
            }
        }
    }
})

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

                        let ul = document.querySelector('nav').querySelector('ul')
                        let li = document.createElement('li')
                        let span = document.createElement('span')
                        let img = document.createElement('img')

                        li.className = 'Tags'
                        span.innerText = Produtos.Categoria
                        img.src = 'assets/img/icon/setaAzul.png'

                        if(localStorage.getItem('produtoPagProduto') == Produtos.Categoria) {
                            li.id = 'selected'
                            img.src = 'assets/img/icon/setaBranca.png'
                        } else {
                            img.src = 'assets/img/icon/setaAzul.png'
                        }

                        li.appendChild(span)
                        li.appendChild(img)
                        ul.appendChild(li)

                        //? Função de click
                        li.addEventListener('click', () => {
                            try {
                                for(let c = 0; c < 30; c++) {
                                    let othersLi = document.getElementsByClassName('Tags')[0]
                                    let imgs = othersLi.querySelector('img')
                                    othersLi.id = ''
                                    imgs.src = 'assets/img/icon/setaAzul.png'

                                }
                            } catch{}

                            li.id = 'selected'
                            img.src = 'assets/img/icon/setaBranca.png'

                            localStorage.setItem('produtoPagProduto', span.innerText)
                            if(location.host == '127.0.0.1:5500') {
                                location.pathname = '/pagProduto.html'
                                
                            } else if(location.host == 'wender101.github.io') {
                                location.href = 'https://wender101.github.io/html-css/desafio/EDStore/pagProduto.html'
                            }
                        })
                    }
                } catch (error) {
                    console.warn(error);
                }
                
            }
        })
    })
} criaCategorias()
