var menu = window.document.querySelector('ul#menu')
var btnmenu = window.document.querySelector('button')
var fundo = window.document.querySelector('div#fundo')
var fecharmenu = window.document.querySelector('button#fecharmenu')
var html = window.document.querySelector('html')

//Faz o menu e a div fundo aparecer ao clicar no botão menu
btnmenu.addEventListener('click', function() {
    if(menu.style.display === 'block') {
        menu.style.display = 'none'
    } else {
        menu.style.display = 'block'
    }

    if(fundo.style.display === 'block') {
        fundo.style.display = 'none'
    } else {
        fundo.style.display = 'block'
    }

    if(html.style.overflow === 'hidden') {
        html.style.overflow = 'auto'
    } else {
        html.style.overflow = 'hidden'
    }
})

//Faz o menu e a div fundo sumir ao clicar no fundo
fundo.addEventListener('click', function() {
    if(menu.style.display === 'block') {
        menu.style.display = 'none'
    } else {
        menu.style.display = 'block'
    }

    if(fundo.style.display === 'block') {
        fundo.style.display = 'none'
    } else {
        fundo.style.display = 'block'
    }

    if(html.style.overflow === 'hidden') {
        html.style.overflow = 'auto'
    } else {
        html.style.overflow = 'hidden'
    }
})

//Faz o menu e a div fundo sumir ao clicar no X do menu
fecharmenu.addEventListener('click', function() {
    if(menu.style.display === 'block') {
        menu.style.display = 'none'
    } else {
        menu.style.display = 'block'
    }

    if(fundo.style.display === 'block') {
        fundo.style.display = 'none'
    } else {
        fundo.style.display = 'block'
    }

    if(html.style.overflow === 'hidden') {
        html.style.overflow = 'auto'
    } else {
        html.style.overflow = 'hidden'
    }
})