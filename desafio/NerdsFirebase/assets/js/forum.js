//! Vai carregar as informações do usuario
auth.onAuthStateChanged((val) => {
    document.getElementById('imgUserNivel').src = val.photoURL
    document.getElementById('nomeUser').innerText = val.displayName
})

let porcentagemXP = 35

//! Vai controlar onde a porcentagem vai aparecer, a depender da quantidade de XP
let porcentagem = document.getElementById('porcentagem')
let porcentagem2 = document.getElementById('porcentagem2')
porcentagem.style.width = `${porcentagemXP}%`
porcentagem.innerText = `${porcentagemXP}%`
porcentagem2.innerText = `${porcentagemXP}%`

if(porcentagemXP >= 25) {
    porcentagem2.style.color = 'transparent'
    porcentagem.style.color = 'var(--cor0)'
}

//! Vai vazer o "Sobre o nivel(mostra a porcentagem de XP) aparecer e sumir"
document.getElementById('nivelUser').addEventListener('mouseenter', () => {
    document.getElementById('sobreONivel').style.display = 'flex'
})

document.getElementById('nivelUser').addEventListener('mouseout', () => {
    document.getElementById('sobreONivel').style.display = 'none'
})

//! Vai checar se há produtos não classificados
let ClasseProdutoSemRanking = []
let feito = false
db.collection('Produtos').onSnapshot((data) => {
    data.docs.map(function(valProdutos) {
        let produtos = valProdutos.data()

        //! Vai chamar a função contrutora
        setTimeout(() => {
            if(feito == false) {
                for(let b = 0; b < ClasseProdutoSemRanking.length; b++) {
                    criarEnquetes(ClasseProdutoSemRanking[b])
                }
                feito = true
            }
        }, 100)

        //! Vai checar os produtos que não tem ranking
        let checkClassRepitida = false
        if(produtos.Ranking == null || produtos.Ranking == undefined) {
            for(let c = 0; c <= ClasseProdutoSemRanking.length; c++) {
                if(produtos.classe == ClasseProdutoSemRanking[c]) {
                    checkClassRepitida = true
                    c = ClasseProdutoSemRanking.length
                    return
                }
                
                if(checkClassRepitida == false && c == ClasseProdutoSemRanking.length) {
                    ClasseProdutoSemRanking.push(produtos.classe)
                    c = ClasseProdutoSemRanking.length
                    return
                }
            }
        }
    })
})

function criarEnquetes(SemRanking) {
    let feito2 = false
    let contador = 0 //! Vai checar se há mais de 1 produto na classe
    
    db.collection('Produtos').onSnapshot((data) => {
        data.docs.map(function(valProdutos) {
            let produtos = valProdutos.data()
            if(produtos.classe == SemRanking) {
                contador++

                //! Só vai criar a enquete se houver mais de 1 produto na classe
                if(contador >= 2 && feito2 == false) {
                    //! Vai fechar a section carregando
                    document.getElementById('carregando').style.display = 'none'

                    //! Vai construir as enquetes
                    feito2 = true
                    
                    let localPerguntas = document.getElementById('localPerguntas')
                    let article = document.createElement('article')
                    let infPesquisador = document.createElement('div')
                    let imgAdmin = document.createElement('img')
                    let divInfPesquisador = document.createElement('div')
                    let nomePesquisador = document.createElement('p')
                    let dataPergunta = document.createElement('span')
                    let h1 = document.createElement('h1')
                    let inf = document.createElement('p')
                    let divBtns = document.createElement('div')
                    let avisoXP = document.createElement('p')
                    
                    //! Ids e Classes
                    infPesquisador.className = 'infPesquisador'
                    divBtns.className = 'btns'
                    avisoXP.className = 'avisoXP'
                    
                    //! Infs
                    imgAdmin.src = 'assets/img/site/imgLogoAdmin.png'
                    nomePesquisador.innerText = 'Nerds - Hardware Delivery'
                    dataPergunta.innerText = '10/11/2022'
                    h1.innerText = SemRanking
                    inf.innerText = 'Enumere os produtos do melhor pro pior clicando em sequencia.'
                    
                    db.collection('Produtos').onSnapshot((data) => {
                        data.docs.map(function(valProdutos) {
                            let produtos = valProdutos.data()
                
                            if(produtos.classe == SemRanking) {
                                let btn = document.createElement('button')
                                let span = document.createElement('span')
                                span.className = 'rank'

                                span.innerText = 0
                                btn.innerText = produtos.nome
                                btn.appendChild(span)
                                divBtns.appendChild(btn)
                                
                                //! Funções ao clicar no botão
                                btn.addEventListener('click', () => {
                                    btn.style.background = 'var(--cor5)'
                                    span.style.display = 'flex'
                                })
                            }
                        })
                    })
                    
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
            
                    return
                }
            }
        })
    })
}