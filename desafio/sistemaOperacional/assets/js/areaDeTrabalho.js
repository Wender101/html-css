let QuantasVezesreiniciado
try {
    const Qreiniciadas1 = localStorage.getItem('Qreiniciadas')
    const Qreiniciadas2 = JSON.parse(Qreiniciadas1)
    QuantasVezesreiniciado = Qreiniciadas2

    if(Qreiniciadas2 > 2) {
        const telaAzul = document.getElementById('telaAzul')
        telaAzul.style.display = 'block'

        setTimeout(() => {
            QuantasVezesreiniciado = -1
            let Qreiniciadas = JSON.stringify(QuantasVezesreiniciado)
            localStorage.setItem('Qreiniciadas', Qreiniciadas)
            reiniciar()
        }, 20000)
    }

} catch {
    QuantasVezesreiniciado = 0
}

var menuAberto = false
function abrirMenu() {
    if(menuAberto == false) {
        const menu = document.getElementById('menu')
        menu.style.transition = '200ms bottom linear'
        menu.style.bottom = '40px'
        const fundo = document.getElementById('fundo')
        fundo.style.display = 'block'

        menuAberto = true

    } else {
        fecharMenu()
    }
}

function fecharMenu() {
    if(menuAberto == true) {
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

// Ao clicar na tela
function tela() {
    fecharMenu()
}

// Voltar pra aréa de tarefas
function valtarAreaDeTarefas() {
    const title = document.querySelector('title')
    title.innerText = 'Aréa de Trabalho'

    fecharMenu()
    const pageConfig = document.getElementById('pageConfig')
    pageConfig.style.display = 'none'
}

// Ao clicar em abrir config
let openconfig = false // Vai impedir que seja abero mais de 1 pag de config
let iconfig = false // Vai impedir que sejá criado mais de um icone
function abrirConfig() {
    const title = document.querySelector('title')
    title.innerText = 'Configurações'
    if(openconfig == false) {
        setTimeout(() => {
            const pageConfig = document.getElementById('pageConfig')
            pageConfig.style.display = 'block'
            
            if(iconfig == false) {
                const barraDeTarefas = document.getElementById('barraDeTarefas')
                const div = document.createElement('div')
                div.className = 'icones'
                div.id = 'configIcone'
                div.style.backgroundImage = 'url(assets/img/icones/config2.png)'
                barraDeTarefas.appendChild(div)

                iconfig = true

            } else {
                const configIcone = document.getElementById('configIcone')
                configIcone.style.display = 'block'
            }
            
            const configIcone = document.getElementById('configIcone')
            configIcone.addEventListener('click', () => {
                openconfig = false
                abrirConfig()
            })
        }, 500)

        fecharMenu()
    }
}

// Ao clicar em fechar config
function fecharConfig() {
    const title = document.querySelector('title')
    title.innerText = 'Aréa de Trabalho'

    const pageConfig = document.getElementById('pageConfig')
    pageConfig.style.display = 'none'
    const configIcone = document.getElementById('configIcone')
    configIcone.style.display = 'none'
    openconfig = false
}

//Vai fechar todas as abas
function fecharAbas() {
    for(let c = 0; c < 100; c++) {
        const aba = document.getElementsByClassName('aba')[c]
        aba.style.display = 'none'
        const icones = document.getElementsByClassName('icones')[c]
        icones.style.display = 'none'
    }
}

function opsIniciar() {
    const opsIniciar = document.getElementById('opsIniciar')
    opsIniciar.style.display = 'block'
    const lateralMenu = document.getElementById('lateralMenu')
    lateralMenu.style.width = '200px'
}

// Funções do menu iniciar
function suspender() {
    setTimeout(() => {
        fecharMenu()
        const black = document.getElementById('black')
        black.style.display = 'block'

        setTimeout(() => {
            document.addEventListener('click', () => {
                const black = document.getElementById('black')
                black.style.display = 'none'
            })
        
            document.addEventListener('keydown', (e) => {
                if(e.keyCode == 13) {
                    const black = document.getElementById('black')
                    black.style.display = 'none'
                }
            })

        }, 400)
    }, 400)
}

function desligar() {
    setTimeout(() => {
        fecharMenu()
        const black = document.getElementById('black')
        black.style.display = 'block'

        setTimeout(() => {
            document.addEventListener('click', () => {
                location.reload()
            })
        
            document.addEventListener('keydown', (e) => {
                if(e.keyCode == 13) {
                    location.reload()
                }
            })

        }, 400)
    }, 400)
}

function reiniciar() {
    QuantasVezesreiniciado++

    const main = document.querySelector('main')
    main.style.display = 'none'

    const body= document.querySelector('body')
    body.style.background = 'black'

    setTimeout(() => {
        let Qreiniciadas = JSON.stringify(QuantasVezesreiniciado)
        localStorage.setItem('Qreiniciadas', Qreiniciadas)
        location.reload()

    }, 3000)
}