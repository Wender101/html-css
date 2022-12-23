let emailEncontrado = false
db.collection('SobreUser').onSnapshot((data) => {
    data.docs.map(function(val) {
        let valorSobreUser = val.data()

        try {
            if(valorSobreUser.Sobre.Email == email) {
                emailEncontrado = true
                var carregando = document.getElementById('carregando')
                carregando.style.display = 'none'
    
                for(let c = 0; c < valorSobreUser.Contatos.length; c++) {
                    let ultimaMsgEnviada = ''

                    if(valorSobreUser.Contatos[c].Msgs[valorSobreUser.Contatos[c].Msgs.length - 1].MsgContato != undefined) {
                        ultimaMsgEnviada = valorSobreUser.Contatos[c].Msgs[valorSobreUser.Contatos[c].Msgs.length - 1].MsgContato
                    } else if(valorSobreUser.Contatos[c].Msgs[valorSobreUser.Contatos[c].Msgs.length - 1].TuaMsg != undefined) {
                        ultimaMsgEnviada = valorSobreUser.Contatos[c].Msgs[valorSobreUser.Contatos[c].Msgs.length - 1].TuaMsg
                    }

                    criaContatos(valorSobreUser.Contatos[c].SobreContato.FotoPerfil, valorSobreUser.Contatos[c].SobreContato.Nome, ultimaMsgEnviada, valorSobreUser.Contatos[c].SobreContato.codigoContato)
                }
            }
        } catch {}

        setInterval(() => {
            if(emailEncontrado == false) {
                //? Vai mandar o user para a pagina de login
                const link = location.origin + location.pathname
                window.location.href = link.replace('home.html', '') + 'login.html'
            }
        }, 4000)
        
    })
})

let codigoContatoSelecionado
function criaContatos(imagem, nome, ultMsg, codigoContato) {
    let localContatos = document.getElementById('localContatos')
    let contatos = document.createElement('div')
    let lineOnline = document.createElement('div')
    let img = document.createElement('img')
    let localNomeEmsgContato = document.createElement('div')
    let nameContato = document.createElement('strong')
    let ultimaMsg = document.createElement('p')

    //? --
    img.src = imagem
    nameContato.innerText = nome
    ultimaMsg.innerText = ultMsg

    
    //? Classes
    contatos.className = 'contatos'
    lineOnline.className = 'lineOnline'
    localNomeEmsgContato.className = 'localNomeEmsgContato'
    nameContato.className = 'nameContato'
    
    //? AppendChilds
    lineOnline.appendChild(img)
    localNomeEmsgContato.appendChild(nameContato)
    localNomeEmsgContato.appendChild(ultimaMsg)
    contatos.appendChild(lineOnline)
    contatos.appendChild(localNomeEmsgContato)
    localContatos.appendChild(contatos)


    //? fuunções de clique
    contatos.addEventListener('click', () => {
        document.getElementById('localMsg').innerHTML = ''
        document.getElementById('recadoInicial').style.display = 'none'
        document.getElementById('localConversa').style.display = 'block'
        document.getElementById('msg').style.display = 'block'

        document.getElementById('imgContato').src = imagem
        document.getElementById('nomeContato').innerText = nome

        criaMsg(codigoContato)
        codigoContatoSelecionado = codigoContato
    })
}

//? Função que vai criar as msgs
let arrayCloneChat = []
let codigoLocalUser
function criaMsg(codigo) {
    db.collection('SobreUser').onSnapshot((data) => {
        data.docs.map(function(val) {
            let valorSobreUser = val.data()
    
            try {
                if(valorSobreUser.Sobre.Email == email) {
                    for(let c = 0; c < valorSobreUser.Contatos.length; c++) {
                        for(let b = 0; b < valorSobreUser.Contatos[c].Msgs.length; b++) {

                            //? Vai mostrar as msg apenas do contato selecionado
                            if(valorSobreUser.Contatos[c].SobreContato.codigoContato == codigo) {
                                let p = document.createElement('p')
                                arrayCloneChat.push(valorSobreUser.Contatos)
                                codigoLocalUser = val.id

                                if(valorSobreUser.Contatos[c].Msgs[b].MsgContato != undefined) {
                                    p.className = 'msgContato'
                                    p.innerText = valorSobreUser.Contatos[c].Msgs[b].MsgContato

                                } else if(valorSobreUser.Contatos[c].Msgs[b].TuaMsg != undefined) {
                                    p.className = 'tuaMsg'
                                    p.innerText = valorSobreUser.Contatos[c].Msgs[b].TuaMsg
                                }

                                document.getElementById('localMsg').appendChild(p)
                            }
                        }
                    }
                }
            } catch {}
        })
    })
}

//? Vai checar se algo foi escrito no input de msg e liberar o btn enviar
setInterval(() => {
    let inputMsg = document.getElementById('inputResponder').value
    if(inputMsg.length > 0) {
        document.getElementById('imgEnviar').style.display = 'block'
        document.getElementById('pet').style.display = 'none'
    } else {
        document.getElementById('imgEnviar').style.display = 'none'
        document.getElementById('pet').style.display = 'block'
    }
}, 100)

//? Vai enviar uma msg
document.addEventListener('keypress', (e) => {
    if(e.keyCode == 13) {
        enviarMsg()
    }
})

function enviarMsg() {
    let inputMsg = document.getElementById('inputResponder').value
    for(let c = 0; c < arrayCloneChat.length; c++) {
        if(inputMsg.length > 0 && codigoContatoSelecionado == arrayCloneChat[c][c].SobreContato.codigoContato) {
            let obj = {
                TuaMsg: inputMsg
            }
            arrayCloneChat[c][c].Msgs.push(obj)
            db.collection('SobreUser').doc(codigoLocalUser).update({Contatos: arrayCloneChat[0]})

            document.getElementById('localMsg').innerHTML = ''
            document.getElementById('localContatos').innerHTML = ''
            document.getElementById('inputResponder').value =  ''
        }
    }
}

//? Função add Contato
let localAdd = document.getElementById('localAdd')
function abrirAddContato() {
    localAdd.style.display = 'flex'
}

localAdd.addEventListener('click', (e) => {
    let el = e.target.id
    if(el == 'localAdd' || el == 'btnAddContato') {
        localAdd.style.display = 'none'
    }
}) 