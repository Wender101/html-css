let userConectado = localStorage.getItem('conectado')
let inputPergunta = document.getElementById('perguntaUser')
let qtnsPergunta = 0
let localPerguntas = document.getElementById('localPerguntas')

let arrayPerguntasUser = []
let arrayTodasAsPerguntas = []

let chatCarregado = false
let chatRecarregado = false
//? Vai adicionar as perguntas feitas ao produto selecionado na tela 
function chamarChat() {
    arrayTodasAsPerguntas = []
    localPerguntas.innerHTML = ''
    db.collection('User').onSnapshot((data) => {
        data.docs.map(function(val) {
            let User = val.data()

            if(chatCarregado == false) {
                setTimeout(() => {
                    chatCarregado = true
                    chatRecarregado = false
                }, 1000)

                if(User.Email == email) {
                    arrayPerguntasUser = User.Chat
                }

                //? Vai checar se o id do produto é igual ao id da pergunta feita
                for(let c = 0; c < User.Chat.length; c++) {
                    if(User.Chat[c].Id == idProdSelecionado) {

                        //? Vai criar um clone de todas a perguntas desse produto
                        let obj = {
                            Pergunta: User.Chat[c].Pergunta,
                            Resposta: User.Chat[c].Resposta,
                            Data: User.Chat[c].Data,
                            Id: User.Chat[c].Id,
                            Email: User.Email
                        }
                        arrayTodasAsPerguntas.push(obj)

                        document.getElementById('sejaPrimeiro').style.display = 'none'
                        let divPergunta = document.createElement('div')
                        let perguntaP = document.createElement('p')
                        let respSpan = document.createElement('span')
                        let dataSpan = document.createElement('span')
                        let img = document.createElement('img')
                        let inputResp = document.createElement('input')
                        let btnEnviarResposta = document.createElement('button')
                        let btnExcluirPergunta = document.createElement('button')

                        btnExcluirPergunta.title = 'Excluir pergunta permanentemente'
                        btnEnviarResposta.title = 'Enviar resposta'
                        inputResp.placeholder = 'Resposta...'
                        perguntaP.innerText = User.Chat[c].Pergunta
                        img.src = 'assets/img/icon/setinhaChat.png'
                        respSpan.innerText = User.Chat[c].Resposta
                        dataSpan.innerText = User.Chat[c].Data

                        //? caso o adm esteja conectado e a pergunta não tenha resposta
                        if(userConectado == true && User.Chat[c].Resposta == '...' || userConectado == 'true' && User.Chat[c].Resposta == '...') {
                            respSpan.innerText = ''
                            perguntaP.appendChild(btnExcluirPergunta)
                            respSpan.appendChild(inputResp)
                            respSpan.appendChild(btnEnviarResposta)
        
                        //? caso o adm esteja conectado e a pergunta tenha resposta
                        } else if(userConectado == true && User.Chat[c].Resposta != '...' || userConectado == 'true' && User.Chat[c].Resposta != '...') {
                            respSpan.innerText = ''
                            inputResp.className = 'inputRespRespondido'
                            inputResp.value = User.Chat[c].Resposta
                            perguntaP.appendChild(btnExcluirPergunta)
                            respSpan.appendChild(inputResp)
                            respSpan.appendChild(btnEnviarResposta)
                        }
        
                        divPergunta.appendChild(perguntaP)
                        respSpan.appendChild(img)
                        respSpan.appendChild(dataSpan)
                        divPergunta.appendChild(respSpan)
                        localPerguntas.appendChild(divPergunta)
                        arrayPerguntasUser.value = ''

                        //? Função de clique
                        btnExcluirPergunta.addEventListener('dblclick', () => {
                            let chatDeletado = false
                            db.collection('User').onSnapshot((data) => {
                                data.docs.map(function(val) {
                                    let User = val.data()
                                    
                                    if(arrayTodasAsPerguntas[c].Email == User.Email) {
                                        if(chatDeletado == false) {
                                            chatDeletado = true
                                            let cloneChatUserDeletar = User.Chat
                                            arrayTodasAsPerguntas.splice(c, 1)
                                            cloneChatUserDeletar.splice(c, 1)
                                            db.collection('User').doc(val.id).update({Chat: cloneChatUserDeletar})
                                        }
                                    }
                                })
                            })
                        })

                        //? Vai responder as inquetes
                        btnEnviarResposta.addEventListener('click', () => {
                            let chatDeletado = false
                            db.collection('User').onSnapshot((data) => {
                                data.docs.map(function(val) {
                                    let User = val.data()
                                    
                                    if(arrayTodasAsPerguntas[c].Email == User.Email && inputResp.value.length > 0) {
                                        if(chatDeletado == false) {
                                            chatDeletado = true
                                            let cloneChatUserDeletar = User.Chat
                                            arrayTodasAsPerguntas[c].Resposta = inputResp.value
                                            cloneChatUserDeletar[c].Resposta = inputResp.value
                                            db.collection('User').doc(val.id).update({Chat: cloneChatUserDeletar})
                                        }
                                    }
                                })
                            })
                        })
                    }
                } 
            } else if(chatRecarregado == false) {
                chatCarregado = false
                chatRecarregado = true
                localPerguntas.innerHTML = ''
                setTimeout(() => {
                    chamarChat()
                }, 100)
            }
        })
    })
} chamarChat()

//? Vai enviar a pergunta feita
function enviarPergunta() {
    salvarPergunta(inputPergunta.value)
}

//? Vai salvar as novas perguntas
function salvarPergunta(pergunta) {
    let perguntaEnviada = false
    if(email != undefined) {
        if(qtnsPergunta < 4) {
    
            db.collection('User').onSnapshot((data) => {
                data.docs.map(function(val) {
                    let User = val.data()
    
                    if(User.Email == email && perguntaEnviada == false) {
                        perguntaEnviada = true
                        let obj = {
                            Pergunta: pergunta,
                            Resposta: '...',
                            Data: '',
                            Id: idProdSelecionado
                        }
        
                        arrayPerguntasUser.push(obj)
                        db.collection('User').doc(val.id).update({Chat: arrayPerguntasUser})
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