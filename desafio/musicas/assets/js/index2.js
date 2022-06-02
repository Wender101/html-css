const d1 = document.getElementById('d1')
const d2 = document.getElementById('d2')
const d3 = document.getElementById('d3')
const d4 = document.getElementById('d4')

// Vai criar um desenho de triângulo
function criaSeta() {
    for(let c = 0; c < 4; c++) {
        let div = document.getElementsByClassName('div')[c]
        div.style.width = '0px'
        div.style.height = '0px'
        div.style.left = '23px'
        div.style.top = '15px'
        div.style.borderTop = '15px solid transparent'
        div.style.borderBottom = '15px solid transparent'
        div.style.borderLeft = '20px solid black'
        div.style.position = 'absolute'
        div.style.background = 'transparent'
    }
}
criaSeta()

// Vai criar um desenho de cubo
function criaCubo(a = c) {
    for(let c = 0; c < 4; c++) {
        let div = document.getElementsByClassName('div')[a]
        div.style.width = '20px'
        div.style.height = '20px'
        div.style.background = 'black'
        div.style.left = '21px'
        div.style.top = '21px'
        div.style.position = 'absolute'
        div.style.border = 'none'
    }
}

// Vai iniciar a musica e pausar
function iniciar(a) {
    if(a == 0) {
        d1.play()
        d4.pause()
        d2.pause()
        d3.pause()
        criaCubo(0)

    } else if(a == 1) {
        d2.play()
        d4.pause()
        d1.pause()
        d3.pause()
        criaCubo(1)

    } else if(a == 2) {
        d4.pause()
        d3.play()
        d2.pause()
        d1.pause()
        criaCubo(2)

    } else if(a == 3) {
        d4.play()
        d3.pause()
        d2.pause()
        d1.pause()
        criaCubo(3)

    } else {
        d4.pause()
        d3.pause()
        d2.pause()
        d1.pause()
        criaSeta()
    }
}

// Vai ativar ao clicar na musica
let iniciou = false
function audio1() {
    if(iniciou == false) {
        iniciar(0)
        iniciou = true
    } else {
        iniciar()
        iniciou = false
    }
}

function audio2() {
    if(iniciou == false) {
        iniciar(1)
        iniciou = true
    } else {
        iniciar()
        iniciou = false
    }
}

function audio3() {  
    if(iniciou == false) {
        iniciar(2)
        iniciou = true
    } else {
        iniciar()
        iniciou = false
    }
}

function audio4() {  
    if(iniciou == false) {
        iniciar(3)
        iniciou = true
    } else {
        iniciar()
        iniciou = false
    }
}