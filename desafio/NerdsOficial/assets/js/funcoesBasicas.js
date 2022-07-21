function login() {
    const msgLogin = document.getElementById('msgLogin')
    msgLogin.style.display = 'block'
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
    menu.style.display = 'none'
    nav.style.display = 'block'
    sombra.style.display = 'block'
    at = true
}

function fecharMenu() {
    const menu = document.getElementById('menu')
    const nav = document.querySelector('nav')
    const sombra = document.getElementById('sombra')
    menu.style.display = 'block'
    nav.style.display = 'none'
    sombra.style.display = 'none'
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