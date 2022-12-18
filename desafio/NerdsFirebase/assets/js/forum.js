let a = false
let arrayProdutosSemRanking = []
db.collection('Produtos').onSnapshot((data) => {
    const perguntasHere = document.getElementById('perguntasHere')
    perguntasHere.innerHTML = ''
    data.docs.map(function(val) {
        let produtos = val.data()

        //? Vai checar se o produto corresponde a alguns desses
        for(let c = 0; c < 4; c++) {
            let produtosMonteSeuPc = ['Processador', 'Memória', 'gb', 'Placa de vídeo']
            let prodMontePc = produtosMonteSeuPc[c].toLocaleLowerCase()
            prodMontePc = prodMontePc.normalize('NFD').replace(/[\u0300-\u036f]/g, "") //? Vai remover os acentos
            prodMontePc = prodMontePc.replace(/\s/g, '') //? Vai remover os espaços
    
            let produtoDesc = produtos.nome.toLocaleLowerCase()
            produtoDesc = produtoDesc.normalize('NFD').replace(/[\u0300-\u036f]/g, "") //? Vai remover os acentos
            produtoDesc = produtoDesc.replace(/\s/g, '') //? Vai remover os espaços

            if(produtoDesc.includes(prodMontePc) && produtos.ranking == null) {
                let obj = {
                    classe: produtosMonteSeuPc[c],
                    nome: produtos.nome,
                    id: produtos.id,
                    c: c
                }
                arrayProdutosSemRanking.push(obj)
            }
        }

        if(a == false) {
            a = true
            setTimeout(() => {
                console.log(arrayProdutosSemRanking)
                criaEnquete(arrayProdutosSemRanking)
            }, 200)
        }
    })
})

//? vai criar as enquetes
function criaEnquete(produtoSemRanking) {
    
    let contador = 0
    let contador2 = 1
    for(let c = 0; c < produtoSemRanking.length; c++) {
        if(contador != contador2) {
            contador2 = contador

            var localPerguntas = document.getElementById('localPerguntas')
            var article = document.createElement('article')
            var infPesquisador = document.createElement('div')
            var imgAdmin = document.createElement('img')
            var divInfPesquisador = document.createElement('div')
            var nomePesquisador = document.createElement('p')
            var dataPergunta = document.createElement('span')
            var h1 = document.createElement('h1')
            var inf = document.createElement('p')
            var divBtns = document.createElement('div')
            var avisoXP = document.createElement('p')
                                
            //! Ids e Classes
            infPesquisador.className = 'infPesquisador'
            divBtns.className = 'btns'
            avisoXP.className = 'avisoXP'
                                
            //! Infs
            imgAdmin.src = 'assets/img/site/imgLogoAdmin.png'
            nomePesquisador.innerText = 'Nerds - Hardware Delivery'
            dataPergunta.innerText = '10/11/2022'
            h1.innerText = produtoSemRanking[0].classe
            inf.innerText = 'Enumere os produtos do melhor pro pior clicando em sequência.'

            if(produtoSemRanking[c].c == contador) {
                let btn = document.createElement('button')
                let span = document.createElement('span')
                span.className = 'rank'
                console.log(1);
                document.getElementById('carregando').style.display = 'none'
                span.innerText = 0
                btn.innerText = produtoSemRanking[c].nome
                btn.appendChild(span)
                divBtns.appendChild(btn)
    
            } 

            //! Vai sortear uma quantidade de XP com o minimo de 20XP
            let xp = Math.floor(Math.random() * 100) + 20
            avisoXP.innerHTML = `Respoda essa enquete e receba: <span class="XP">${xp}XP</span>`
            
            //! AppenChilds
            infPesquisador.appendChild(imgAdmin)
            divInfPesquisador.appendChild(nomePesquisador)
            divInfPesquisador.appendChild(dataPergunta)
            infPesquisador.appendChild(divInfPesquisador)
            
            article.appendChild(infPesquisador)
            article.appendChild(h1)
            article.appendChild(inf)
            article.appendChild(divBtns)
            article.appendChild(avisoXP)
            localPerguntas.appendChild(article)
        }

        if(c == produtoSemRanking.length && contador < 4) {
            contador++
            c = -1
        }
    }
}