// Vai alterar a foto do canal pra a escolhida
function exibirCanal() {
    const canal1 = localStorage.getItem('srcCanal')
    const canal2 = JSON.parse(canal1)

    let localUser = document.getElementById('localUser')
    localUser.src = canal2
} exibirCanal()

// Funcionalidades do menu
function abrirMenu() {
    let barraLateral = document.getElementById('barra-lateral')
    let ul = document.getElementById('ul')
    let fundo = document.getElementById('fundo')
    
    if(barraLateral.style.display == 'block') {
        barraLateral.style.display = 'none'
        ul.style.marginLeft = '0px'
        fundo.style.display = 'none'
        
    } else {
        barraLateral.style.display = 'block'
        ul.style.marginLeft = '240px'
        fundo.style.display = 'block'
    }
}

// Vai:
// fechar o menu
// mover o 'nav' pro lado e a setinha do nav
// e exibir o fundo

function fecharFundo() {
    let barraLateral = document.getElementById('barra-lateral')
    let ul = document.getElementById('ul')
    let fundo = document.getElementById('fundo')
    
    if(barraLateral.style.display == 'block') {
        barraLateral.style.display = 'none'
        ul.style.marginLeft = '0px'
        fundo.style.display = 'none'
        
    } else {
        barraLateral.style.display = 'block'
        ul.style.marginLeft = '240px'
        fundo.style.display = 'block'
    }
}

function inscrever() {
    let btn = document.getElementById('inscreva')
    
    if(btn.style.background == 'red') {
        btn.style.background = '#303030'
        btn.innerText = 'INSCRITO'  
        
    } else {
        btn.style.background = 'red'
        btn.innerText = 'INSCREVER-SE'
    }
}