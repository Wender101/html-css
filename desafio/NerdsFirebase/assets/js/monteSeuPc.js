let idSection
let hrefPage = location.href.replace('#Desempenho', '')
for(let c = 0; c < 9; c++) {
    let selecionar = document.getElementsByClassName('selecionar')[c]
    let alterar = document.getElementsByClassName('alterar')[c]
    let remover = document.getElementsByClassName('remover')[c]

    selecionar.addEventListener('click', () => {
        mostrarNaTela()
    })

    alterar.addEventListener('click', () => {
        mostrarNaTela(c)
    })

    remover.addEventListener('click', () => {
        removerComponente(c)
    })

    function mostrarNaTela(contador = null) {
        //? Vai pegar o nome do componente assim que clicar em selecionar
        let nomeComponente = document.getElementsByClassName('nomeComponete')[c]
        colocarNaTela(nomeComponente.innerText, contador)
        abrirAbaComponetes()
        idSection = c
    }
}

let html = document.querySelector('html')
let abaComponentes = document.getElementById('abaComponentes')
let conteudoAbaComponetes = document.getElementById('conteudoAbaComponetes')
function abrirAbaComponetes() {
    
    abaComponentes.style.display = 'block'
    conteudoAbaComponetes.className = 'abrirAba'
    html.style.overflow = 'hidden'

    //? Vai dar a class da animação de abrir
    setTimeout(() => {
        conteudoAbaComponetes.style.right = '0px'
        conteudoAbaComponetes.className = ''
    }, 700)
}

//? Ao clicar na sombra da section AbaComponentes
abaComponentes.addEventListener('click', (e) => {
    let el = e.target.id
    fecharAbaComponetes(el)
})

//? Vai fechar a  AbaComponentes
function fecharAbaComponetes(e) {
    if(e == 'abaComponentes') {
        //? Vai dar a class da animação de fechar
        conteudoAbaComponetes.className = 'fecharAba'
        html.style.overflow = 'auto'

        setTimeout(() => {
            abaComponentes.style.display = 'none'
            conteudoAbaComponetes.style.right = '-100vw'
            conteudoAbaComponetes.className = ''
            conteudoAbaComponetes.innerHTML = ''
        }, 500)
    }
}

//? Vai colocar os componentes na tela
function colocarNaTela(nome, c) {

    db.collection('Produtos').onSnapshot((data) => {
        data.docs.map(function(val) {
            let valProduto = val.data()

            //? Vai pesquisar os produtos
            let nameProd = nome.toLowerCase()
            if(valProduto.nome.toLowerCase().includes(nameProd)) {

                let conteudoAbaComponetes = document.getElementById('conteudoAbaComponetes')
                let div = document.createElement('div')
                let localImg = document.createElement('div')
                let img = document.createElement('img')
                let divTexto = document.createElement('div')
                let h3 = document.createElement('h3')
                let span = document.createElement('span')
                let valorDoProduto = document.createElement('div')
                let valorNormal = document.createElement('p')
                let p = document.createElement('p')
                let valor = document.createElement('strong')
                let qDesconto = document.createElement('span')

                //? Ids e Classe
                localImg.className = 'localImg'
                divTexto.className = 'texto'
                valorDoProduto.className = 'valorDoProduto'
                valorNormal.className = 'valorNormal'
                valor.className = 'valor'
                qDesconto.className = 'qDesconto'

                //? ...
                img.src = valProduto.imagem1
                h3.innerText = valProduto.nome
                span.innerText = valProduto.desc

                //? Vai calcular o valor com o desconto
                let valor2 = parseFloat(valProduto.valor)
                let desconto2 = parseFloat(valProduto.desconto)
                let ValorComDesconto = (((desconto2 * valor2) / 100) - valor2) * -1
                valorNormal.innerText = `R$${valor2.toFixed(2)}`
                valor.innerText = `R$${ValorComDesconto.toFixed(2)}`
                qDesconto.innerText = ` ${desconto2}% OFF`

                //? Apenchild
                localImg.appendChild(img)

                divTexto.appendChild(h3)
                divTexto.appendChild(span)

                valorDoProduto.appendChild(valorNormal)
                valorDoProduto.appendChild(p)
                p.appendChild(valor)
                p.appendChild(qDesconto)

                div.appendChild(localImg)
                div.appendChild(divTexto)
                div.appendChild(valorDoProduto)
                conteudoAbaComponetes.appendChild(div)

                //? click
                div.addEventListener('click', () => {
                    if(c != null) {
                        removerComponente(c)
                    }
                    adicinarComponente(valProduto.imagem1, valProduto.nome, valProduto.desc, valProduto.valor, valProduto.desconto)
                    fecharAbaComponetes('abaComponentes')
                })
            }
        })
    })
}

//? Vai adiconar na tela o componente que foi escolhido pelo usuario
function adicinarComponente(img, nome, desc, valor, desconto) {
    document.getElementsByClassName('nomeComponete')[parseInt(idSection)].style.display = 'none'
    document.getElementsByClassName('imagemProduto')[parseInt(idSection)].src = img
    document.getElementsByClassName('desc')[parseInt(idSection)].innerText = desc
    document.getElementsByClassName('nomeProduto')[parseInt(idSection)].innerText = nome
    
    //? Vai calcular o valor com o desconto
    let valor2 = parseFloat(valor)
    let desconto2 = parseFloat(desconto)
    let ValorComDesconto = (((desconto2 * valor2) / 100) - valor2) * -1
    document.getElementsByClassName('valorNormal')[parseInt(idSection)].innerText = `R$${valor2.toFixed(2)}`
    document.getElementsByClassName('valor')[parseInt(idSection)].innerText = `R$${ValorComDesconto.toFixed(2)}`
    document.getElementsByClassName('qDesconto')[parseInt(idSection)].innerText = `${desconto} OFF`

    //? Vai tirar o btn de 'selecionar' e colocar os de 'altrar' e 'remover'
    document.getElementsByClassName('selecionar')[parseInt(idSection)].style.display = 'none'
    document.getElementsByClassName('alterar')[parseInt(idSection)].style.display = 'block'
    document.getElementsByClassName('remover')[parseInt(idSection)].style.display = 'block'

    //? Vai diminuir o tamanho do h3
    document.getElementsByClassName('nomeProduto')[parseInt(idSection)].style.width = '100%'

    //? Vai colocar o valor na tela
    somarValorComponentes(ValorComDesconto.toFixed(2), '+')
}

//? Vai somar o valor dos componentes
let valorComponentes = 0
function somarValorComponentes(valor, calculo) {

    if(calculo == '+') {
        valorComponentes += parseFloat(valor)
    } else {
        valorComponentes -= parseFloat(valor)
    }

    document.getElementById('total').innerText = `Valor total: R$${valorComponentes.toFixed(2)}`
}

//? Vai remover o componente
function removerComponente(c) {
    //? Vai descontar o valor do produto removido
    let valorDescontado = document.getElementsByClassName('valor')[parseInt(c)].innerText
    let valorDescontado2 = parseFloat(valorDescontado.replace('R$', ''))
    somarValorComponentes(valorDescontado2.toFixed(2), '-')

    document.getElementsByClassName('nomeComponete')[parseInt(c)].style.display = 'block'
    document.getElementsByClassName('imagemProduto')[parseInt(c)].src = ''
    document.getElementsByClassName('nomeProduto')[parseInt(c)].innerText = 'SELECIONE OS COMPONENTES'
    document.getElementsByClassName('desc')[parseInt(c)].innerText = 'Escolha os componentes para o seu computador'
    
    document.getElementsByClassName('valorNormal')[parseInt(c)].innerText = `R$0.00`
    document.getElementsByClassName('valor')[parseInt(c)].innerText = `R$0.00`
    document.getElementsByClassName('qDesconto')[parseInt(c)].innerText = `0% OFF`

    //? Vai tirar o btn de 'selecionar' e colocar os de 'altrar' e 'remover'
    document.getElementsByClassName('selecionar')[parseInt(c)].style.display = 'block'
    document.getElementsByClassName('alterar')[parseInt(c)].style.display = 'none'
    document.getElementsByClassName('remover')[parseInt(c)].style.display = 'none'
}

//? Vai colocar os jogos na tela
function jogos() {
    let jogos = document.getElementById('jogos')
    jogos.innerHTML = ''

    fetch(`assets/json/requisitosMinimosDosJogos.json`).then(resposta => {
        return resposta.json()
    }).then(requisitos => {
        for(let c = 0; c < requisitos.Jogo.length; c++) {
            let resp = requisitos.Jogo[c]

            let div = document.createElement('div')
            let img = document.createElement('img')

            img.src = resp.img
            div.href = '#Desempenho'

            div.appendChild(img)
            jogos.appendChild(div)

            div.addEventListener('click', () => {
                testarDesempenho(resp.Nome)
                location.href = hrefPage + '#Desempenho' 
            })
        }
    })
}

//? Testar Desempenho
function testarDesempenho(jogo) {
    //? Vai puxar o requisitos mínimos do arquivo.json
    fetch(`assets/json/requisitosMinimosDosJogos.json`).then(resposta => {
        return resposta.json()
    }).then(requisitos => {
        for(let c = 0; c < requisitos.Jogo.length; c++) {
            let resp = requisitos.Jogo[c]
            if(resp.Nome == jogo) {
                document.getElementsByClassName('infJogo')[0].style.display = 'block'
                document.getElementById('localImgInfJogo').src = resp.img
                document.getElementById('nomeGame').innerText = resp.Nome
                document.getElementById('placaDeVideo').innerText = resp.PlacaDeVideo
                document.getElementById('processador').innerText = resp.Processador
                document.getElementById('memoria').innerText = resp.Memoria
                document.getElementById('armazenamento').innerText = resp.Armazenamento

                for(let c = 0; c < 6; c++) {
                    checarDesempenho(resp.rankingPlacaDeVideo, resp.rankingProcessa, resp.Memoria.replace(' GB', ''), resp.Armazenamento.replace(' GB', ''))
                }
            }
        }
    })
}

let contador = [3, 5, 6, 7, 8]
let cPlus = 0
function checarDesempenho(placaDeVideo, processador, ram, armazenamento) {
    for(let c = 0; c < 4; c++) {
        document.getElementsByClassName('imgAboutComponente')[c].src = 'assets/img/site/errado.png'
        cPlus = 0
    }

    db.collection('Produtos').onSnapshot((data) => {
        data.docs.map(function(val) {
            let valProduto = val.data()

           try {
                if(document.getElementsByClassName('imagemProduto')[parseInt(contador[cPlus])].src == valProduto.imagem1) {

                    if(valProduto.ranking  <= processador) {
                        document.getElementsByClassName('imgAboutComponente')[1].src = 'assets/img/site/correto.png'
                    } 

                    //? Vai pegar a qnt de RAM na desc do memória
                    let descMinuscula = valProduto.desc.toLowerCase()
                    let localGB = descMinuscula.lastIndexOf('gb')
                    let numGB = valProduto.desc.toLowerCase().substring(localGB - 2, localGB)
                    if(valProduto.nome.includes('Memória RAM') && parseFloat(numGB) >= parseFloat(ram)) {
                        document.getElementsByClassName('imgAboutComponente')[2].src = 'assets/img/site/correto.png'
                    }

                    //? Vai checar a placa de video
                    if(valProduto.ranking  <= placaDeVideo) {
                        document.getElementsByClassName('imgAboutComponente')[0].src = 'assets/img/site/correto.png'
                    } 

                    //? Vai checar o armazenamento
                    numGB = valProduto.desc.toLowerCase().substring(localGB - 3, localGB)
                    if(valProduto.nome.includes('SSD') || valProduto.nome.includes('HD') && parseFloat(numGB) >= parseFloat(armazenamento)) {
                        document.getElementsByClassName('imgAboutComponente')[3].src = 'assets/img/site/correto.png'
                    }

                    if(valProduto.nome.includes('HD') && parseFloat(numGB) >= parseFloat(armazenamento)) {
                        document.getElementsByClassName('imgAboutComponente')[3].src = 'assets/img/site/correto.png'
                    }

                    cPlus++
                }
           } catch{}
        })
    })
}