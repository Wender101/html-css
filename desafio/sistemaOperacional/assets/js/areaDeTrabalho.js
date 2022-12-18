//? Vai abrir e fechar o menu do w10
let menuAberto = false
function abrirMenu() {
    if(menuAberto == false) {
        const menu = document.getElementById('menu')
        menu.style.transition = '200ms bottom linear'
        menu.style.bottom = '40px'
        const fundo = document.getElementById('fundo')
        fundo.style.display = 'block'
        menuAberto = true

    } else {
        const menu = document.getElementById('menu')
        menu.style.transition = '100ms bottom linear'
        menu.style.bottom = '-100vh'
        const fundo = document.getElementById('fundo')
        fundo.style.display = 'none'
        const opsIniciar = document.getElementById('opsIniciar')
        opsIniciar.style.display = 'none'
        menuAberto = false
    }
}

//? Abrir Edge
function abrirEdge() {
    
}