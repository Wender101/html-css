function abrirMenu() {
    let nav = document.querySelector('nav')
    let fundo = document.getElementById('fundo')
    let html = document.querySelector('html')

    if(fundo.style.display == 'block') {
        fundo.style.display = 'none'
        nav.style.transition = '100ms left linear'
        nav.style.left = '-200px'
        html.style.overflow = 'auto'
        
    } else {
        fundo.style.display = 'block'
        nav.style.transition = '200ms left linear'
        nav.style.left = '0px'
        html.style.overflow = 'hidden'
    }
}

function fecharFundo() {
    let nav = document.querySelector('nav')
    let fundo = document.getElementById('fundo')
    let html = document.querySelector('html')
    fundo.style.display = 'none'
    nav.style.transition = '100ms left linear'
    nav.style.left = '-200px'
    html.style.overflow = 'auto'
}