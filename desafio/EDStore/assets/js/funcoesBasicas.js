let menu = document.getElementById('menu')
function abrirMenu() {
    menu.style.display = 'block'
}

menu.addEventListener('click', (e) => {
    let el = e.target.id 
    if(el == 'menu') {
        fecharMenu()
    }
})

function fecharMenu() {
    menu.style.display = 'none'
}

let darkModeAtivo = false
if(localStorage.getItem('Modo') == null || localStorage.getItem('Modo') == undefined) {
    darkModeAtivo = false 
    modoPage(darkModeAtivo)
} else {
    darkModeAtivo = localStorage.getItem('Modo')
    modoPage(darkModeAtivo)
}

function modoPage(modo = '') {
    //? Vai alterar o modo
    if(darkModeAtivo == false && modo == '' || darkModeAtivo == 'false'  && modo == '') {
        darkModeAtivo = true
    } else if(darkModeAtivo == true && modo == '' || darkModeAtivo == 'true' && modo == '') {
        darkModeAtivo = false
    }

    localStorage.setItem('Modo', darkModeAtivo)
    let cor0 = 'black'
    let cor1 = '#fff' 
    let cor2 = '#181a1b' 
    let cor3 = '#e5edf0'
    let cor4 = '#04b3ff'

    if(darkModeAtivo == true || darkModeAtivo == 'true') {
        document.getElementById('carregando').style.backgroundColor = cor2
        
        setTimeout(() => {
        document.getElementById('carregando').style.display = 'none'
        document.getElementById('modoClaro').style.backgroundImage = 'url(assets/img/icon/sol.png)'
        document.querySelector('body').style.backgroundColor = cor2
        document.querySelector('body').style.color = cor1
        document.querySelector('header').querySelector('span').style.color = cor1
        document.querySelector('header').querySelector('a').style.color = cor1
        document.getElementsByClassName('slide-btn')[0].style.backgroundColor = cor2
        document.getElementsByClassName('slide-btn')[1].style.backgroundColor = cor2
        document.getElementsByClassName('slide-btn')[0].style.color = cor1
        document.getElementsByClassName('slide-btn')[1].style.color = cor1
        document.getElementById('pesquisaInput')

        for(let c = 0; c < 100; c++) {
            try {
                    document.getElementsByClassName('Categorias')[c].style.backgroundColor = cor2
                    document.getElementsByClassName('Categorias')[c].style.color = cor1
                    document.getElementsByClassName('Categorias')[c].style.border = '1px solid var(--cor4)'
                    document.getElementById('selected').style.backgroundColor = cor4
                } catch (error) {console.warn(error)}
            }
        }, 1000)

    } else {
        document.getElementById('carregando').style.backgroundColor = cor1
        setTimeout(() => {
        document.getElementById('carregando').style.display = 'none'
        document.getElementById('modoClaro').style.backgroundImage = 'url(assets/img/icon/lua.png)'
        document.querySelector('body').style.backgroundColor = cor1
        document.querySelector('body').style.color = cor0
        document.querySelector('header').querySelector('span').style.color = cor0
        document.querySelector('header').querySelector('a').style.color = cor1
        document.getElementsByClassName('slide-btn')[0].style.backgroundColor = cor1
        document.getElementsByClassName('slide-btn')[1].style.backgroundColor = cor1
        document.getElementsByClassName('slide-btn')[0].style.color = cor0
        document.getElementsByClassName('slide-btn')[1].style.color = cor0
        
        for(let c = 0; c < 100; c++) {
            try {
                    document.getElementsByClassName('Categorias')[c].style.backgroundColor = cor3
                    document.getElementsByClassName('Categorias')[c].style.color = cor0
                    document.getElementById('selected').style.backgroundColor = cor4
                    document.getElementById('selected').style.color = cor1
                    document.getElementsByClassName('Categorias')[c].style.border = '1px solid var(--cor3)'
                } catch (error) {console.warn(error)}
            }
        }, 1000)
    }
}