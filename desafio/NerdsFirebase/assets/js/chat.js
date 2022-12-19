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
                    criaPergunta(chat.Perguntas[c].PerguntasFeitas, chat.Perguntas[c].Resposta, chat.Perguntas[c].DataResposta, c, chat.email)
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
function criaPergunta(pergunta = '', resposta = '...', data = '', divID, emailPergunta) {

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
    if(countCheck == true && resposta == '...') {
        div.className = `${emailPergunta}-${divID}` //? vai aparece o email da pessoa que fez a pergunta
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

            //? Vai identificar o email de quem fez a pergunta e o num da pergunta o array
            for (let c = 1; c <= 100; c++) {
                var numID = div.className.substr(-c)
                var emailUser = div.className.substr(-c)
                let fim = numID.substring(0, 1)
                if(fim == '-') {
                    emailUser = div.className.replace(numID, '')
                    numID = div.className.substr(-c + 1)
                    c = 101
                }
            }

            db.collection('Chat').onSnapshot((data) => {
                data.docs.map(function(valChat) {
                    let chat = valChat.data()
                    let clone = []
                    if(chat.email == emailUser && chat.Perguntas[numID].id == idProdutoChat && chat.Perguntas[numID].PerguntasFeitas == p.innerText) {
                        clone = chat.Perguntas
                        clone[numID].Resposta = inputSelct
                        clone[numID].DataResposta = `${dia}/${mes}/${ano}`

                        db.collection('Chat').doc(valChat.id).update({Perguntas: clone})
                    }
                })
            })

            document.getElementById('carregando').style.display = 'flex'

            setTimeout(() => {
                document.getElementById('carregando').style.display = 'none'
            }, 100)
        })

    } else {
        //? Vai identificar se há um link e separalo do resto do texto
        let linkFinal = ''
        if(resposta.includes('</a>')) {
            for (let c = resposta.indexOf(); c < resposta.length; c++) {
                let linkResposta = resposta.substr(-c)
                let linkResposta2 = linkResposta.substring(0, 3)

                if(linkResposta2 == '<a>') {
                    linkFinal = resposta.substr(-c)
                    linkFinal = linkFinal.replace('<a>', '')
                    linkFinal = linkFinal.replace('</a>', '')
                }
            }
            span.querySelector('a').href = linkFinal
        }
        span.innerHTML = resposta
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
