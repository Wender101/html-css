function abrirMenu() {
    let fundo = document.getElementById('fundo')
    let ul = document.getElementById('menu')
    ul.style.transition = '200ms left linear'
    ul.style.left = '0px'
    fundo.style.transition = '200ms left linear'
    fundo.style.left = '0px'
}

function fecharMenu() {
    let fundo = document.getElementById('fundo')
    let ul = document.getElementById('menu')
    ul.style.transition = '100ms left linear'
    ul.style.left = '-300px'
    fundo.style.transition = '0ms left linear'
    fundo.style.left = '-150vw'
}