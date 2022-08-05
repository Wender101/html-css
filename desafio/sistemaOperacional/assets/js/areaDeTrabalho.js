var openconfig = false // Vai impedir que seja abero mais de 1 pag de config
var iconfig = false // Vai impedir que sejá criado mais de um icone

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
    for(let c = 0; c < 100; c++) {
        const aba = document.getElementsByClassName('aba')[c]
        aba.style.display = 'none'
    }
}

let dicaIcone = false
const ulApps = document.getElementById('apps')
for(let c = 0; c < 100; c++) {
    const li = ulApps.getElementsByTagName('li')[c]

    if(li.id != 'yt') {
        li.addEventListener('click', () => {
            fecharMenu()
            const dica = document.getElementById('dica')
            dica.style.display = 'block'
            
            if(dicaIcone == false ) {
                const barraDeTarefas = document.getElementById('barraDeTarefas')
                const iconDica = document.createElement('div')
                iconDica.id = 'iconeDica'
                iconDica.className = 'icones'
                iconDica.style.backgroundImage = 'url(assets/img/icones/lampada.png)'
                barraDeTarefas.appendChild(iconDica)
                dicaIcone = true
                
            } else {
                const iconeDica = document.getElementById('iconeDica')
                iconeDica.style.display = 'block'
            }
        })
    }
}

// Ao clicar em abrir config
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
                div.id = 'configIcone'
                div.className = 'icones'
                div.style.backgroundImage = 'url(assets/img/icones/config2.png)'
                barraDeTarefas.appendChild(div)

                iconfig = true

            } else {
                const configIcone = document.getElementById('configIcone')
                configIcone.style.display = 'block'
            }
        }, 500)

        fecharMenu()
    }
}

for(let c = 0; c < 100; c++) {
    const aba = document.getElementsByClassName('aba')[c]
    aba.addEventListener('mouseenter', () => {

        const icones = document.getElementsByClassName('icones')[c]
        
        icones.addEventListener('click', () => {
            if(aba.style.display == 'none') {
                aba.style.display = 'block'
    
            } else {
                aba.style.display = 'none'
            }
        })
        
        fechar()
        minimizar()
    })
}

// Vai fechar as abas
function fechar() {
    const title = document.querySelector('title')
    title.innerText = 'Aréa de Trabalho'

    for(let c = 0; c < 100; c++) {
        const aba = document.getElementsByClassName('aba')[c]
        const fechar = document.getElementsByClassName('fechar')[c]
        const icones = document.getElementsByClassName('icones')[c]
        
        fechar.addEventListener('click', () => {
            aba.style.display = 'none'
            icones.style.display = 'none'
        })
    }
}

// Vai minimizar as abas
function minimizar() {
    const title = document.querySelector('title')
    title.innerText = 'Aréa de Trabalho'

    for(let c = 0; c < 100; c++) {
        const aba = document.getElementsByClassName('aba')[c]
        const minimizar = document.getElementsByClassName('minimizar')[c]
        
        minimizar.addEventListener('click', () => {
            aba.style.display = 'none'
        })
    
    }
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

// Abrir yt 
function abrirYt() {
    fecharMenu()

    const barraDeTarefas = document.getElementById('barraDeTarefas')
    const div = document.createElement('div')
    div.id = 'iconeYt'
    div.className = 'icones'
    div.style.backgroundImage = 'url(assets/apps/clone-youtube/img/Youtube-Logo2.png)'
    barraDeTarefas.appendChild(div)
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