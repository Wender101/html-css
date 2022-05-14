
let produtosAmostras = document.getElementById('produtosAmostras')
const body = document.querySelector('body')
let entrou = false

// Coisas que vão acotencer quando o mouse entrar no site
body.addEventListener('mousemove', function() {
    if (entrou == false) {
        produtosAmostras.style.transition = '2s left linear'
        produtosAmostras.style.left = '0px'  
        entrou = true
    } 

})

// Coisas que vão acontecer quando clicar no botão do header
function abrirMenu() {
    const nav = document.querySelector('nav')
    const sombra = document.getElementById('sombra')

    nav.style.transition = '170ms left linear'
    nav.style.left = '0px'
    sombra.style.display = 'block'
}

// Coisas que vão acontecer quando clicar na div sombra
function fecharSombra() {
    const nav = document.querySelector('nav')
    const sombra = document.getElementById('sombra')

    nav.style.transition = '170ms left linear'
    nav.style.left = '-320px'
    sombra.style.display = 'none'
}

let btnUm = document.getElementById('btn1')
let btnDois = document.getElementById('btn2')

let c1 = -1
let c2 = 3
let contagem = 0


btnUm.addEventListener('click', function() {
    btnDois.style.display = 'block'
    c1 = c1 - 1
    c2 = c2 + 1

    contagem = contagem + 600
    produtosAmostras.style.transition = '400ms left linear'
    produtosAmostras.style.left = contagem + 'px'

    if (c1 < 0) {
        btnUm.style.display = 'none'
    }

})

btnDois.addEventListener('click', function() {
    btnUm.style.display = 'block'
    c2 = c2 - 1
    c1 = c1 + 1

    contagem = contagem - 600
    produtosAmostras.style.transition = '400ms left linear'
    produtosAmostras.style.left = contagem + 'px'

    if (c2 == 0) {
    btnDois.style.display = 'none'
    }
})

// Coisas que vão acontecer quando rolar a pág
window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    let nav = document.querySelector('nav')
    let buttonNav = document.getElementById('menu')

    if(scroll < 200) {
        nav.style.transition = '100ms height linear'
        nav.style.height = '180px'
        buttonNav.style.transition = '400ms margin-top linear'
        buttonNav.style.transition = '400ms margin-left linear'
        buttonNav.style.marginTop = '100px'
        buttonNav.style.marginLeft = '10px'
        
    } else {
        const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
        console.log(vw);

        if (vw > 560) {
            buttonNav.style.transition = '200ms margin-top linear'
            buttonNav.style.marginTop = '20px'
            buttonNav.style.marginLeft = '250px'
            nav.style.transition = '200ms height linear'
            nav.style.height = '100px'
        }
        
    }
});

// Footer 

let horas = new Date;
let dia = new Date;
let hoje = dia.getDay();
let horario = horas.getHours();

let lojaAberta = document.getElementById('lojaAberta');
let vaiAbrir = document.getElementById('vaiAbrir');
let FaltaParaAbrir = (24 - horario) + 8;
let Aberto = false

// Vai checar se a loja está aberta ou não
if (hoje == 1 || hoje == 2 || hoje == 3 || hoje == 4 || hoje == 5) {
    if(horario >= 8 && horario < 19) {
        Aberto = true

    } else {
        Aberto = false
    
        vaiAbrir.innerText = `Vamos Abrir daqui ${FaltaParaAbrir} horas.`
    }
} else if (hoje == 6) {
    if(horario >= 8 && horario < 16) {
        Aberto = true

    } else {
        Aberto = false

        vaiAbrir.innerText = `Vamos Abrir daqui ${FaltaParaAbrir} horas.`
    }
} else {
    Aberto = false

    vaiAbrir.innerText = `Vamos Abrir daqui ${FaltaParaAbrir} horas.`
}

// Vai escrevar qual o estado da loja
if(Aberto == true) {
    lojaAberta.innerText = 'Nossa loja física está aberta neste momento'

} else {
    lojaAberta.innerText = 'Nossa loja física está fechada neste momento'

}
 
