let contadorNotificacao = 0
db.collection('Chat').onSnapshot((data) => {
    data.docs.map(function(valChat) {
        let chat = valChat.data()
    
        try {
            for(let c = 0; c <= chat.Perguntas.length; c++) {
                try {
                    if(email == 'wendernatanael2019@gmail.com') {
                        if(chat.Perguntas[c].Resposta == '...') {
    
                            criar(chat.Perguntas[c].PerguntasFeitas, chat.Perguntas[c].Resposta, '00/00/00', chat.Perguntas[c].id, chat.Perguntas.length, chat.email, chat.Perguntas)
                        }
    
                    } else if(chat.email == email && chat.Perguntas[c].Visto == false && chat.Perguntas[c].Resposta != '...') {
                        criar(chat.Perguntas[c].PerguntasFeitas, chat.Perguntas[c].Resposta, chat.Perguntas[c].DataResposta, chat.Perguntas[c].id, chat.Perguntas.length, chat.email, chat.Perguntas)
                    }
                } catch {}
            }
        } catch {}
    })
})

function abrirAbaNotificacao() {
    let aba =  document.getElementById('containerNotificacao')
    let pNot =  document.getElementById('numNotifi')
    let notificacaoChat = document.getElementById('notificacaoChat')
    let containerNotificacao = document.getElementById('containerNotificacao')

    if(aba.style.display == 'none') {
        aba.style.display = 'block'

        if(pNot.innerText > 0) {
            if(visualViewport.width > 490) {
                notificacaoChat.style.width = '450px'
                notificacaoChat.style.height = '400px'

            } else {
                notificacaoChat.style.width = '90%'
                notificacaoChat.style.height = '400px'
                containerNotificacao.style.width = '73%'
            }
        }

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
                            window.location.href = `http://127.0.0.1:5501/sobre-o-produto.html#${id}`

                            setTimeout(() => {
                                location.reload()
                            }, 1000)
                        }, 1000)
                    } else if(email == 'wendernatanael2019@gmail.com') {
                        document.getElementById('carregando').style.display = 'flex'
                        window.location.href = `http://127.0.0.1:5501/sobre-o-produto.html#${id}`

                        setTimeout(() => {
                          location.reload()
                       }, 1000)
                    }
                }
            })
        })
    })
}
