let idSection
for(let c = 0; c < 8; c++) {
    let selecionar = document.getElementsByClassName('selecionar')[c]
    let alterar = document.getElementsByClassName('alterar')[c]
    let remover = document.getElementsByClassName('remover')[c]

    selecionar.addEventListener('click', () => {
        mostrarNaTela()
    })

    alterar.addEventListener('click', () => {
        mostrarNaTela()
    })

    remover.addEventListener('click', () => {
        removerComponente(c)
    })

    function mostrarNaTela() {
        //? Vai pegar o nome do componente assim que clicar em selecionar
        let nomeComponente = document.getElementsByClassName('nomeComponete')[c]
        colocarNaTela(nomeComponente.innerText)
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
function colocarNaTela(nome) {

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
                valorNormal.innerText = `R$${valProduto.valor}`
                valor.innerText = `R$${valProduto.valor}`
                qDesconto.innerText = ` ${valProduto.desconto} OFF`

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
                    adicinarComponente(valProduto.imagem1, valProduto.nome, valProduto.desc, valProduto.valor, valProduto.desconto)
                    fecharAbaComponetes('abaComponentes')
                })
            }
        })
    })
}

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
}

function removerComponente(c) {
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