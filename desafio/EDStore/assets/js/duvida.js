//? Abrir duvida
function abrirLocalDuvida() {
    document.getElementById('localDuvida').style.display = 'block'
}

for(let c = 0; c < 30; c++) {
    try {
        let select = document.getElementById('barralateralDuvidas').querySelectorAll('select')[c]

        select.addEventListener('change', () => {
            abrirMenuDuvidaFN()
            mostrarSolucao(select.value)
        })
    } catch{}
}

let abrirMenuDuvida = document.getElementById('abrirMenuDuvida')
let img = document.getElementById('barralateralDuvidas').querySelector('img')
let strong = document.getElementById('barralateralDuvidas').querySelector('strong')

let duvidaLocalAberto = false
abrirMenuDuvida.addEventListener('click', () => {
    abrirMenuDuvidaFN()
})

function abrirMenuDuvidaFN() {
    if(duvidaLocalAberto == false) {
        duvidaLocalAberto = true

        img.style.display = 'none'
        strong.style.display = 'block'
        for(let c = 0; c < 5; c++) {
            try {
                let select = document.getElementById('barralateralDuvidas').querySelectorAll('select')[c]
                select.style.display = 'block'
                select.addEventListener('click', () => {
                    for(let b = 0; b < 5; b++) {
                        try {
                            document.getElementById('barralateralDuvidas').querySelectorAll('select')[b].style.backgroundColor = 'var(--cor1)'
                            document.getElementById('barralateralDuvidas').querySelectorAll('select')[b].style.color = 'var(--cor2)'
                        } catch{}
                    }
                    select.style.backgroundColor = 'var(--cor4)'
                    select.style.color = 'var(--cor1)'
                })
            } catch{}
        }
        document.getElementById('barralateralDuvidas').style.width = '250px'
        abrirMenuDuvida.style.rotate = '180deg'
        abrirMenuDuvida.style.left = 'auto'
        abrirMenuDuvida.style.right = '50%'

    } else {
        duvidaLocalAberto = false

        img.style.display = 'block'
        strong.style.display = 'none'
        for(let c = 0; c < 5; c++) {
            try {
                document.getElementById('barralateralDuvidas').querySelectorAll('select')[c].style.display = 'none'
            } catch{}
        }
        document.getElementById('barralateralDuvidas').style.width = '30px'
        abrirMenuDuvida.style.rotate = '0deg'
        abrirMenuDuvida.style.left = '50%'
        abrirMenuDuvida.style.right = 'auto'
    }
}

//? Fehcar Duvida
function fecharLocalDuvida() {
    document.getElementById('localDuvida').style.display = 'none'

}

//? Vai mostrar a solução da duvida celecionada
function mostrarSolucao(duvida) {
    for (let c = 0; c < 30; c++) {
        try {
            document.getElementById('localDuvida').querySelectorAll('article')[c].style.display = 'none'
        } catch{}
        
    }
    duvida = duvida.replace(/\s+/g, '-')
    document.getElementById(duvida).style.display = 'block'
}