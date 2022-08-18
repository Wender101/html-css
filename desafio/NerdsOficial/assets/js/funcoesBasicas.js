//! Vai adicionar um favIcon em todas as pags do site
document.querySelector('head').innerHTML += '<link rel="shortcut icon" href="assets/img/icons/faveIcoNerds.png" type="image/x-icon">'

function login() {
    const msgLogin = document.getElementById('msgLogin')
    msgLogin.style.display = 'block'
    document.getElementById('pMsgLogin').innerText = 'Ops! Ainda estamos trabalhando nisso...'
    fecharMenu()
}

function fecharMsg() {
    const msgLogin = document.getElementById('msgLogin')
    msgLogin.style.display = 'none'
}


//! Vai adicionar um fundo ao menu, quando rola o scroll
window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    const nav = document.querySelector('nav')

    if(scroll < 30) {
        nav.id = 'semFundo'

    } else {
        nav.id = 'comFundo'
    }
})

let at = false
function abrirMenu() {
    const menu = document.getElementById('menu')
    const nav = document.querySelector('nav')
    const sombra = document.getElementById('sombra')
    const html = document.querySelector('html')
    menu.style.display = 'none'
    nav.style.display = 'block'
    sombra.style.display = 'block'
    html.style.overflow = 'hidden'
    at = true
    fecharMsg()
}

function fecharMenu() {
    const menu = document.getElementById('menu')
    const nav = document.querySelector('nav')
    const sombra = document.getElementById('sombra')
    const html = document.querySelector('html')
    menu.style.display = 'block'
    nav.style.display = 'none'
    sombra.style.display = 'none'
    html.style.overflow = 'auto'
    at = false
}

//! Vai checar qual o tamho da tela e alterar o menu de acordo com o tamanho
setInterval(() => {
    let tamanhoTela = document.defaultView.innerWidth
    if(tamanhoTela > 480) {
        const nav = document.querySelector('nav')
        const menu = document.getElementById('menu')
        nav.style.display = 'block'
        menu.style.display = 'none'

    } else {
        if(at == false) fecharMenu()
    }
}, 10)