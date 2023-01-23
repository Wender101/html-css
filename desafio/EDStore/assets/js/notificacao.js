let abaNotificacao = document.getElementById('abaNotificacao')
let notificacaoBtn = document.getElementsByClassName('notificacaoBtn')[0]
let notificacaoBtn1 = document.getElementById('notificacaoBtn')
let notAberto = false

notificacaoBtn.addEventListener('click', () => {abrirNot()})
notificacaoBtn1.addEventListener('click', () => {abrirNot()})
abaNotificacao.addEventListener('click', () => {abrirNot()})

function abrirNot() {
    menu.style.display = 'none'
    if(notAberto == false) {
        notAberto = true
        
        let article = abaNotificacao.querySelector('article')
        article.style.backgroundColor = 'white'
        abaNotificacao.style.display = 'block'
    } else {
        notAberto = false
        abaNotificacao.style.display = 'none'
    }
}

//? Vai checar se há alguma notificação não vista
function checarChatNotificacao() {
    abaNotificacao.innerHTML = ''
    let notificacaoCarregado = false
    let article = document.createElement('article')
    abaNotificacao.appendChild(article)
    
    db.collection('User').onSnapshot((data) => {
        data.docs.map(function(valorUser) {
            let User = valorUser.data()

            if(notificacaoCarregado == false) {
                if(User.Email == email) {
                    for(let c = 0; c < User.Chat.length; c++) {
                        if(User.Chat[c].Resposta != '...' && User.Chat[c].Visto == false) {
                            setTimeout(() => {
                                notificacaoCarregado = true
                            }, 500)
                            document.getElementsByClassName('temNotificacao')[0].style.display = 'block'
                            document.getElementsByClassName('temNotificacao')[1].style.display = 'block'
    
                            let container = document.createElement('div')
                            let child = document.createElement('div')
                            let strong = document.createElement('strong')
                            let p = document.createElement('p')
                            let imgSeta = document.createElement('img')
                            let imgProd = document.createElement('img')
    
                            strong.innerHTML = User.Chat[c].Pergunta
                            imgSeta.src = 'assets/img/icon/setinhaChat.png'
                            p.appendChild(imgSeta)
                            p.innerHTML += ` ${User.Chat[c].Resposta}`
    
                            db.collection('Produtos').onSnapshot((data) => {
                                data.docs.map(function(val) {
                                    let Produtos = val.data()
    
                                    if(User.Chat[c].Id == Produtos.Id) {
                                        imgProd.src = Produtos.Img1
    
                                        //? Ao clicar na notificação vc vai ser direcionado a página sobre o produto
                                        container.addEventListener('click', () => {
                                            let pDescEnviar = Produtos.Desc
                                            pDescEnviar = pDescEnviar.replace(/[`~!@#$%^&*()_\-+=\[\]{};:'"\\|\/,.<>?\s]/g, ' ').toLowerCase()
                                            pDescEnviar = pDescEnviar.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
                                            pDescEnviar = pDescEnviar.replace(/^\s+|\s+$/gm,'')
                                            pDescEnviar = pDescEnviar.replace(/\s+/g, '-')
                                            let array = [pDescEnviar, Produtos.Id]
                                            localStorage.setItem('sobreProduto', JSON.stringify(array))
    
                                            let arrayPerguntasUser = User.Chat
                                            arrayPerguntasUser[c].Visto = true
                                            console.log(arrayPerguntasUser);
                                            db.collection('User').doc(valorUser.id).update({Chat: arrayPerguntasUser})
                                            document.getElementById('carregando').style.display = 'block'
                                            
                                            setTimeout(() => {
                                                if(location.host == '127.0.0.1:5500') {
                                                    location.href = `http://${location.host}/Sobre-Produto.html`
                                                    
                                                } else if(location.host == 'wender101.github.io') {
                                                    location.href = `https://${location.host}/html-css/desafio/EDStore/Sobre-Produto.html`
                                                }
                                            }, 500)
                                        })
                                    }
                                })
                            })
    
                            child.appendChild(strong)
                            child.appendChild(p)
                            container.appendChild(child)
                            container.appendChild(imgProd)
                            article.appendChild(container)
                        }
                    }
                }
            } else {
                abaNotificacao.innerHTML = ''
                notificacaoCarregado = false
                setTimeout(() => {
                    checarChatNotificacao()
                }, 500)
            }
        })
    })
} checarChatNotificacao()