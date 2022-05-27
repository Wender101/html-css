var menu = window.document.querySelector('ul#menu')
var btnmenu = window.document.querySelector('button')
var fundo = window.document.querySelector('div#fundo')
var fecharmenu = window.document.querySelector('button#fecharmenu')
var html = window.document.querySelector('html')

var body = window.document.querySelector('body')
var btntema = window.document.querySelector('a#tema')
var esfera1 = window.document.getElementById('esfera1')
var esfera2 = window.document.getElementById('esfera2')

//body.style.backgroundImage = 'linear-gradient(to top, rgb(134 10 10), red, rgb(255 235 0))'

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

btntema.addEventListener('click', function() {
    tema(Vtema)
})

function tema(y) {
    if(y == false) {
        body.style.background = '#100636'
        menu.style.background = '#100636'
        esfera1.style.backgroundImage = 'linear-gradient(to top, rgb(10, 12, 134), blue, rgb(0, 255, 179))'
        esfera2.style.backgroundImage = 'linear-gradient(to top, rgb(10, 12, 134), blue, rgb(0, 255, 179))'

        y = true

    } else {
        body.style.background = '#830505'
        menu.style.background = '#830505'
        esfera1.style.backgroundImage = 'linear-gradient(to top, rgb(134 10 10), red, rgb(255 235 0))'
        esfera2.style.backgroundImage = 'linear-gradient(to top, rgb(134 10 10), red, rgb(255 235 0))'

        y = false
    }

    console.log(Vtema)
    var VtemaJSON = JSON.stringify(Vtema);
    localStorage.setItem('vtema', VtemaJSON);
}


function adicionaTemaSalvo() {
    const vtema1 = localStorage.getItem('vtema');
    const Vtema2 = JSON.parse(vtema1);
    Vtema = Vtema2

        if(Vtema === false) {
            body.style.background = '#100636'
            menu.style.background = '#100636'
            esfera1.style.backgroundImage = 'linear-gradient(to top, rgb(10, 12, 134), blue, rgb(0, 255, 179))'
            esfera2.style.backgroundImage = 'linear-gradient(to top, rgb(10, 12, 134), blue, rgb(0, 255, 179))'
    
            Vtema = true
    
        } else {
            body.style.background = '#830505'
            menu.style.background = '#830505'
            esfera1.style.backgroundImage = 'linear-gradient(to top, rgb(134 10 10), red, rgb(255 235 0))'
            esfera2.style.backgroundImage = 'linear-gradient(to top, rgb(134 10 10), red, rgb(255 235 0))'
    
            Vtema = false
        }
}
adicionaTemaSalvo();

