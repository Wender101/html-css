let idProdutoChat  = urlPage()

//! Vai enviar a pergunta ao pressionar o enter
document.addEventListener('keypress', (e) => {
    if(e.keyCode == 13) {
        perguntar()
    }
})

//! Ao fazer uma nova pergunta
let cloneChat = []
let checkChat = false
db.collection('Chat').onSnapshot((data) => {
    data.docs.map(function(valChat) {
        let chat = valChat.data()

        setTimeout(() => {
            checkChat = true
        }, 1000)

        if(checkChat == true) {
            document.getElementById('perguntasFeitas').innerHTML = ''
        }

        try {
            for(let c = 0; c < chat.Perguntas.length; c++) {
                if(chat.Perguntas[c].id == idProdutoChat) {
                    criaPergunta(chat.Perguntas[c].PerguntasFeitas, chat.Perguntas[c].Resposta, chat.Perguntas[c].DataResposta)
                }
            }

            checkChat = false
        } catch {}

        setTimeout(() => {
            chatCarregado = true
        }, 1000)

        //! Vai fazer um clone de todas as perguntas do user
        if(chat.email == email) {
            cloneChat = chat.Perguntas
        }
    })
})

//! Vai adicionar uma nova pergunta
function perguntar() {
    let pergunta = document.getElementById('inputChat')

    if(pergunta.value != '' && pergunta.value.length > 4) {
        let obj = {
            PerguntasFeitas: pergunta.value,
            Resposta: '...',
            id: idProdutoChat,
            Visto: false
        }

        cloneChat.push(obj)

        salvarPergunta(cloneChat, pergunta.value)
        pergunta.value = ''
    }
}

//! Vai colocar as perguntas na tela
let idInput = 0
function criaPergunta(pergunta = '', resposta = '...', data = '') {

    let perguntasFeitas = document.getElementById('perguntasFeitas')
    let avisoChat = document.getElementById('avisoChat')
    perguntasFeitas.style.display = 'block'
    avisoChat.style.display = 'none'
    
    let div = document.createElement('div')
    let p = document.createElement('p')
    let span = document.createElement('span')
    let span2 = document.createElement('span')
    let img = document.createElement('img')

    p.innerText = pergunta
    img.src = 'assets/img/icons/setinhaChat.png'

    //! Vai criar os inputs que serão usados para responder as perguntas
    if(email == 'wendernatanael2019@gmail.com' && resposta == '...') {
        let input = document.createElement('input')
        let btnEnviarResposta = document.createElement('button')

        input.className = `chat${idInput}`
        btnEnviarResposta.className = `chat${idInput}`
        btnEnviarResposta.innerText = 'Enviar'

        span.appendChild(input)
        span.appendChild(btnEnviarResposta)
        idInput++

        //! Btn enviar as respostas das perguntas dos usuarios
        btnEnviarResposta.addEventListener('click', (e) => {
            let el = e.target.className
            let data = new Date()
            let dia = data.getDate()
            if(dia < 10) {
                dia = `0${dia}`
            }
            let mes = data.getMonth() + 1
            let ano = data.getFullYear()

            let inputSelct = document.getElementsByClassName(`${el}`)[0].value

            db.collection('Chat').onSnapshot((data) => {
                data.docs.map(function(valChat) {
                    let chat = valChat.data()
                    let clone = []
                    for(let c = 0; c < chat.Perguntas.length; c++) {

                        if(chat.Perguntas[c].id == idProdutoChat && chat.Perguntas[c].PerguntasFeitas == p.innerText) {
                            clone = chat.Perguntas
                            clone[c].Resposta = inputSelct
                            clone[c].DataResposta = `${dia}/${mes}/${ano}`

                            db.collection('Chat').doc(valChat.id).update({Perguntas: clone})
                        }
                    }

                })
            })

            document.getElementById('carregando').style.display = 'flex'

            setTimeout(() => {
                document.getElementById('carregando').style.display = 'none'
            }, 1500)
        })

    } else {
        span.innerText = resposta
        span2.innerText = data
    }
    
    span.appendChild(span2)
    div.appendChild(p)
    div.appendChild(span)
    span.appendChild(img)
    perguntasFeitas.appendChild(div)
}

//! Vai salvar as perguntas no bando de dados
function salvarPergunta(chatclonado, pergunta) {
    let salvo = false

    db.collection('Chat').onSnapshot((data) => {
        data.docs.map(function(valChat) {
            let chat = valChat.data()
            if(salvo == false) {
                if(cloneChat.length <= 1) {
                    let objCriado = {
                        email: email,
                        Perguntas: chatclonado
                    }
                    db.collection('Chat').add(objCriado)
                    salvo = true
                    criaPergunta(pergunta)

                } else {
                    if(chat.email == email) {
                        db.collection('Chat').doc(valChat.id).update({Perguntas: 
                        chatclonado})
                        salvo = true
                    } 
                    
                }
            }
        })
    })
}
