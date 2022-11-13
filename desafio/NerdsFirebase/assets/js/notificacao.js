let contadorNotificacao = 0
let notCheck = false
db.collection('Chat').onSnapshot((data) => {
    data.docs.map(function(valChat) {
        let chat = valChat.data()

        setTimeout(() => {
            notCheck = true
        }, 1000)
    
        //! Vai zerar as notificações evitando repitição
        if(notCheck == true) {
            document.getElementById('containerNotificacao').innerHTML = ''
            document.getElementById('numNotifi').innerText = ''
            contadorNotificacao = 0

            //! Vai reconstruir o aviso "sem notificações"
            let containerNotificacao = document.getElementById('containerNotificacao')
            let a = document.createElement('a')
            let p = document.createElement('p')
            let span = document.createElement('span')
            let img = document.createElement('img')
            
            a.id = 'avisoSemNot'
            p.innerText = 'Nenhuma notificação:'
            img.src = 'assets/img/icons/setinhaChat.png'
            span.innerText = 'Você será avisado assim que uma notificação chegar :)'
            a.appendChild(p)
            a.appendChild(span)
            span.appendChild(img)
            containerNotificacao.appendChild(a)
        }

        try {
            for(let c = 0; c <= chat.Perguntas.length; c++) {
                try {
                    if(email == 'wendernatanael2019@gmail.com') {
                        if(chat.Perguntas[c].Resposta == '...') {
    
                            criar(chat.Perguntas[c].PerguntasFeitas, chat.Perguntas[c].Resposta, '00/00/00', chat.Perguntas[c].id, chat.Perguntas.length, chat.email, chat.Perguntas)
                        }
    
                    } else if(chat.email == email && chat.Perguntas[c].Visto == false && chat.Perguntas[c].Resposta != '...') {
                        criar(chat.Perguntas[c].PerguntasFeitas, chat.Perguntas[c].Resposta, chat.Perguntas[c].DataResposta, chat.Perguntas[c].id, chat.Perguntas.length, chat.email, chat.Perguntas)
                        notCheck = false
                    }
                    
                } catch {}

            }
        } catch {}
        
    })
})

//! Caso a aba de notificações esteja aberta e o user clicar fora dela, ela será fechada
document.addEventListener('click', (e) => {
    let elem = e.target.className
    let aba =  document.getElementById('containerNotificacao')
    
    if(elem != 'iconeNot' && aba.style.display == 'block') {
        abrirAbaNotificacao()
    }
})

//! Vai abrir e fechar a aba de notificações
function abrirAbaNotificacao() {
    let aba =  document.getElementById('containerNotificacao')
    let notificacaoChat = document.getElementById('notificacaoChat')
    let containerNotificacao = document.getElementById('containerNotificacao')

    if(aba.style.display == 'none') {
        aba.style.display = 'block'

        //! Vai apagar o aviso "sem notificações" da aba de notificações
        if(contadorNotificacao > 0) {
            document.getElementById('avisoSemNot').style.display = 'none'    
        }  else {
            document.getElementById('avisoSemNot').style.display = 'block'    
        }

        //! Vai controlar a responsividade da aba de notificações
        setInterval(() => {
            if(visualViewport.width > 490 && aba.style.display == 'block') {
                notificacaoChat.style.width = '450px'
                notificacaoChat.style.height = '400px'
                
            } else if(aba.style.display == 'block') {
                notificacaoChat.style.width = '90%'
                notificacaoChat.style.height = '400px'
                containerNotificacao.style.width = '73%'
            }
        }, 100)

    } else {
        aba.style.display = 'none'
        notificacaoChat.style.width = '60px'
        notificacaoChat.style.height = '60px'
    }
} abrirAbaNotificacao()

//! function construtora
function criar(pergunta, resposta, data, id) {
    contadorNotificacao++
    let pNot = document.getElementById('numNotifi')
    pNot.innerText = contadorNotificacao
    pNot.style.display = 'block'
    
    let containerNotificacao = document.getElementById('containerNotificacao')
    let a = document.createElement('a')
    let p = document.createElement('p')
    let span = document.createElement('span')
    let span2 = document.createElement('span')
    let img = document.createElement('img')
    
    p.innerText = pergunta
    img.src = 'assets/img/icons/setinhaChat.png'
    span.innerText = resposta
    span2.innerText = data
    span.appendChild(span2)
    a.appendChild(p)
    a.appendChild(span)
    span.appendChild(img)
    containerNotificacao.appendChild(a)

    //! Vai levar para a pagina de sua pergunta
    a.addEventListener('click', () => {
        db.collection('Chat').onSnapshot((data) => {
            data.docs.map(function(valChat) {
                let chat = valChat.data()
                let clone1 = []
                for(let c = 0; c < chat.Perguntas.length; c++) {
                    if(chat.email == email && chat.Perguntas[c].PerguntasFeitas == p.innerText) {
                        clone1 = chat.Perguntas
                        clone1[c].Visto = true
                        
                        db.collection('Chat').doc(valChat.id).update({Perguntas: clone1})
                        document.getElementById('carregando').style.display = 'flex'

                        
                        setTimeout(() => {
                            window.location.href = `https://wender101.github.io/html-css/desafio/NerdsFirebase/sobre-o-produto.html#${id}`
                            setTimeout(() => {
                                location.reload()
                            }, 500)
                        }, 500)
                    } else if(email == 'wendernatanael2019@gmail.com') {
                        document.getElementById('carregando').style.display = 'flex'
                        
                        setTimeout(() => {
                            window.location.href = `https://wender101.github.io/html-css/desafio/NerdsFirebase/sobre-o-produto.html#${id}`
                            setTimeout(() => {
                                location.reload()
                            }, 500)
                        }, 500)
                    }
                }
            })
        })
    })
}