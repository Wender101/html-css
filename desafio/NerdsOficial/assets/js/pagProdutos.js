const produtoPesquisado1 = localStorage.getItem('produtoPesquisado')
const produtoPesquisado2 = JSON.parse(produtoPesquisado1)

// Vai mudar o titulo da pág para o nome da classe pesquisada
document.querySelector('title').innerText = produtoPesquisado2[0]
document.getElementById('classProduto').innerText = produtoPesquisado2[0]

fetch(`assets/json/dados.json`).then(resposta => {
    return resposta.json()

}).then(bancoDs => {
    let maxC = 1
    for(let c = 0; c < maxC; c++) {
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
        imgProduto.src = 'assets/img/site/error.png'
        strong.innerText = 'Algo deu errado!'
        p.innerText = 'Parece que esse produto não foi carregado corretamente.'
    
        //! Produtos
        if(produtoPesquisado2[0] == 'Cabos') {
            maxC = bancoDs.Cabos.length
            let dados = bancoDs.Cabos[c]
            if(dados[0] != '') {
                imgProduto.src = dados[0]
                strong.innerHTML = dados[1]
                p.innerText = dados[2]
            }
            
        } else if(produtoPesquisado2[0] == 'Adaptadores') {
            maxC = bancoDs.Adaptadores.length
            let dados = bancoDs.Adaptadores[c]
            if(dados[0] != '') {
                imgProduto.src = dados[0]
                strong.innerHTML = dados[1]
                p.innerText = dados[2]
            }
            
        } else if(produtoPesquisado2[0] == 'Teclados') {
            maxC = bancoDs.Teclados.length
            let dados = bancoDs.Teclados[c]
            if(dados[0] != '') {
                imgProduto.src = dados[0]
                strong.innerHTML = dados[1]
                p.innerText = dados[2]
            }
            
        } else if(produtoPesquisado2[0] == 'Mouse') {
            maxC = bancoDs.Mouse.length
            let dados = bancoDs.Mouse[c]
            if(dados[0] != '') {
                imgProduto.src = dados[0]
                strong.innerHTML = dados[1]
                p.innerText = dados[2]
            }
            
        } else if(produtoPesquisado2[0] == 'Gabinetes') {
            maxC = bancoDs.Gabinetes.length
            let dados = bancoDs.Gabinetes[c]
            if(dados[0] != '') {
                imgProduto.src = dados[0]
                strong.innerHTML = dados[1]
                p.innerText = dados[2]
            }
            
        } else if(produtoPesquisado2[0] == 'Headset') {
            maxC = bancoDs.Headset.length
            let dados = bancoDs.Headset[c]
            if(dados[0] != '') {
                imgProduto.src = dados[0]
                strong.innerHTML = dados[1]
                p.innerText = dados[2]
            }
            
        } else if(produtoPesquisado2[0] == 'Controles') {
            maxC = bancoDs.Controles.length
            let dados = bancoDs.Controles[c]
            if(dados[0] != '') {
                imgProduto.src = dados[0]
                strong.innerHTML = dados[1]
                p.innerText = dados[2]
            }
            
        } else if(produtoPesquisado2[0] == 'Fontes') {
            maxC = bancoDs.Fontes.length
            let dados = bancoDs.Fontes[c]
            if(dados[0] != '') {
                imgProduto.src = dados[0]
                strong.innerHTML = dados[1]
                p.innerText = dados[2]
            }
            
        } else if(produtoPesquisado2[0] == 'MousePad') {
            maxC = bancoDs.MousePad.length
            let dados = bancoDs.MousePad[c]
            if(dados[0] != '') {
                imgProduto.src = dados[0]
                strong.innerHTML = dados[1]
                p.innerText = dados[2]
            }
            
        } else if(produtoPesquisado2[0] == 'Processadores') {
            maxC = bancoDs.Processadores.length
            let dados = bancoDs.Processadores[c]
            if(dados[0] != '') {
                imgProduto.src = dados[0]
                strong.innerHTML = dados[1]
                p.innerText = dados[2]
            }
            
        } else if(produtoPesquisado2[0] == 'Memória') {
            maxC = bancoDs.Memória.length
            let dados = bancoDs.Memória[c]
            if(dados[0] != '') {
                imgProduto.src = dados[0]
                strong.innerHTML = dados[1]
                p.innerText = dados[2]
            }
            
        } else if(produtoPesquisado2[0] == 'SSD') {
            maxC = bancoDs.SSD.length
            let dados = bancoDs.SSD[c]
            if(dados[0] != '') {
                imgProduto.src = dados[0]
                strong.innerHTML = dados[1]
                p.innerText = dados[2]
            }
            
        } else if(produtoPesquisado2[0] == 'Coolers') {
            maxC = bancoDs.Coolers.length
            let dados = bancoDs.Coolers[c]
            if(dados[0] != '') {
                imgProduto.src = dados[0]
                strong.innerHTML = dados[1]
                p.innerText = dados[2]
            }
            
        } else if(produtoPesquisado2[0] == 'Outros') {
            maxC = bancoDs.Outros.length
            let dados = bancoDs.Outros[c]
            if(dados[0] != '') {
                imgProduto.src = dados[0]
                strong.innerHTML = dados[1]
                p.innerText = dados[2]
            }
            
        } else {
            document.getElementById('classProduto').innerText = 'Algo deu Errado :('
    
            document.getElementById('classProduto').style.marginTop = '100px'
            document.getElementById('categorias').style.display = 'none'
            document.querySelector('main').style.display = 'none'
            document.querySelector('footer').style.position = 'absolute'
            document.querySelector('footer').style.bottom = '0px'
        }
    
        //! AppendChild
        localImgProduto.appendChild(imgProduto)
        containerProduto.appendChild(localImgProduto)
        containerProduto.appendChild(strong)
        containerProduto.appendChild(p)
        main.appendChild(containerProduto)
    
        //! Vai add a memoria qual produto vai ser analizado pelo usuario 
        localImgProduto.addEventListener('click', () => {
            let e = imgProduto.id
            let produto = {
                p: produtoPesquisado2[0],
                id: e
            }
    
            const sobreProduto = JSON.stringify(produto)
            localStorage.setItem('sobreProduto', sobreProduto)
        })
    
    }
    
    //! Vai mudar a img dos produtos ao passar o mause em cima deles
    for(let c = 0; c < maxC; c++) {
        const imgProduto = document.getElementsByClassName('imgProduto')[c]
        imgProduto.id = c
        imgProduto.addEventListener('mouseenter', (e) => {
            const el = e.target.src
            const idElemnto = e.target.id
    
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
    
            const imgSelected = document.getElementById(idElemnto)

            if(novoLink1.substr(-1) == 'e') {
                imgSelected.src = `${novoLink4}2.jpeg`
    
            } else if(novoLink2.substr(-1) == 'j') {
                imgSelected.src = `${novoLink4}2.jpg`
    
            } else {
                imgSelected.src = `${novoLink4}2.png`
            }
    
            imgProduto.addEventListener('mouseout', () => {
                imgSelected.src = el     
            })
        })
    }
})