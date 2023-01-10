let userConectado = localStorage.getItem('conectado')
let inputPergunta = document.getElementById('perguntaUser')
let qtnsPergunta = 0
function enviarPergunta() {
    salvarPergunta(inputPergunta.value)
}

let localPerguntas = document.getElementById('localPerguntas')
let chatCarregado = false
function cirarChat(pergunta = inputPergunta.value, resp = '...', data = '', emailUser, lengthPerguntas) {
    if(pergunta.length > 0 && qtnsPergunta < 4) {
        document.getElementById('sejaPrimeiro').style.display = 'none'

        let divPergunta = document.createElement('div')
        let perguntaP = document.createElement('p')
        let respSpan = document.createElement('span')
        let dataSpan = document.createElement('span')
        let img = document.createElement('img')
        let inputResp = document.createElement('input')
        let btnEnviarResposta = document.createElement('button')

        inputResp.placeholder = 'Resposta...'
        perguntaP.innerText = pergunta
        img.src = 'assets/img/icon/setinhaChat.png'
        respSpan.innerText = resp
        dataSpan.innerText = data

        if(userConectado == true && resp == '...' || userConectado == 'true' && resp == '...') {
            respSpan.innerText = ''
            respSpan.appendChild(inputResp)
            respSpan.appendChild(btnEnviarResposta)
        }

        divPergunta.appendChild(perguntaP)
        respSpan.appendChild(img)
        respSpan.appendChild(dataSpan)
        divPergunta.appendChild(respSpan)
        localPerguntas.appendChild(divPergunta)
        inputPergunta.value = ''

        //? Enviar Resposta
        btnEnviarResposta.addEventListener('click', () => {
            db.collection('User').onSnapshot((data) => {
                data.docs.map(function(val) {
                    let User = val.data()

                    try {
                        if(emailUser == User.Email && User.Chat[lengthPerguntas].Pergunta == pergunta) {
                            localPerguntas.innerHTML = ''
                            setTimeout(() => {
                                let data = new Date()
                                let dia = data.getDate()
                                
                                if(dia < 10) {
                                    dia = `0${dia}`
                                }

                                let mes = data.getMonth() + 1
                                if(mes < 10) {
                                    mes = `0${mes}`
                                }
                                let ano = data.getFullYear()

                                let obj = User.Chat
                                obj[lengthPerguntas].Data = `${dia}/${mes}/${ano}`
                                obj[lengthPerguntas].Resposta = inputResp.value
                                db.collection('User').doc(val.id).update({Chat: obj})
                                chatCarregado = false
                                chat()
                            }, 100)
                        }
                    } catch (error) {console.warn(error)}
                })
            })
        })
    }
}

inputPergunta.addEventListener('keypress', (e) => {
    if(e.keyCode == 13) {
        if(inputPergunta.value.length > 0) {
            salvarPergunta(inputPergunta.value)
            inputPergunta.value = ''
        }
    }
})

function fecharMsgChat() {
    document.getElementById('infChat').style.bottom = '-100px'
    document.getElementById('infp').innerText = 'Você fez muitas perguntas em pouco tempo. Espere até que sejam respondidas.'
}

//? Vai pegar as perguntas do banco de dados
let arrayPerguntas = []
let perguntaLocalStorage = false
function chat() {
    localPerguntas.innerHTML = ''
    db.collection('User').onSnapshot((data) => {
        data.docs.map(function(val) {
            let User = val.data()

            //? Vai pegar as perguntas do local storage
            try {
                let pgt = localStorage.getItem('pergunta')
                if(pgt != '' && pgt != null && pgt != undefined && perguntaLocalStorage == false) {
                    perguntaLocalStorage = true
                    localStorage.setItem('pergunta', '')
                    salvarPergunta(pgt)
                    document.getElementById('infChat').style.bottom = '0px'
                    document.getElementById('infp').innerText = 'Sua pergunta foi enviada com sucesso! :)'
                }
            } catch (error) {}

            //? Vai criar o chat
            if(chatCarregado == false) {
                try {
                    for(let c = 0; c < User.Chat.length; c++) {
                        if(User.Chat[c].Id == idProdSelecionado) {
                            cirarChat(User.Chat[c].Pergunta, User.Chat[c].Resposta, User.Chat[c].Data, User.Email, c)
                        }
        
                        if(User.Email == email) {
                            //? Vai impedir que o user espame o chat
                            if(User.Chat[c].Id == idProdSelecionado && User.Chat[c].Resposta == '...') {
                                qtnsPergunta++
    
                            }
    
                           arrayPerguntas = User.Chat
                        }
                    }
                } catch (error) {}
            } else {
                chatCarregado = false
                localPerguntas.innerHTML = ''
                setTimeout(() => {
                    chat()
                }, 100)
            }
        })
    })

    setTimeout(() => {
        chatCarregado = true
    }, 100)
} chat()

//? Vai salvar a pergunta
function salvarPergunta(pergunta) {
    qtnsPergunta++
    if(email != undefined) {
        if(qtnsPergunta < 4) {
            let perguntaFeita = false
            let temChat = false
    
            cirarChat(pergunta, '...', '')
    
            db.collection('User').onSnapshot((data) => {
                data.docs.map(function(val) {
                    let User = val.data()
    
                    if(perguntaFeita == false) {
                        if(User.Email == email) {
                            perguntaFeita = true
                            temChat = true
            
                            let obj = {
                                Pergunta: pergunta,
                                Resposta: '...',
                                Data: '',
                                Id: idProdSelecionado
                            }
            
                            arrayPerguntas.push(obj)
            
                            db.collection('User').doc(val.id).update({Chat: arrayPerguntas})
                        }
            
                        setTimeout(() => {
                            if(temChat == false) {
                                perguntaFeita = true
                                
                                let obj = {
                                    Pergunta: pergunta,
                                    Resposta: '...',
                                    Data: '',
                                    Id: idProdSelecionado
                                }
                
                                arrayPerguntas.push(obj)
                
                                let objFinal = {
                                    Email: email,
                                    Perguntas: arrayPerguntas
                                }
                
                                db.collection('User').doc(val.id).update({Chat: objFinal})
                            }
                        }, 1000)
                    }
                })
            })
        } else {
            document.getElementById('infChat').style.bottom = '0px'
        }

        //? Caso o user n tenha logado a uma conta google
    } else {
        localStorage.setItem('pergunta', pergunta)
        login()
    }
}