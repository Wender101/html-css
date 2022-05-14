
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

    let btnMenu2 = document.getElementById('btnMenu2')

    if(scroll < 200) {
        nav.style.transition = '100ms height linear'
        nav.style.height = '180px'
        buttonNav.style.transition = '400ms margin-top linear'
        buttonNav.style.transition = '400ms margin-left linear'
        buttonNav.style.marginTop = '100px'
        buttonNav.style.marginLeft = '10px'

        btnMenu2.style.transition = '200ms top linear'
        btnMenu2.style.top = '110px'
        
    } else {
        const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
        console.log(vw);

        if (vw > 560) {
            buttonNav.style.transition = '200ms margin-top linear'
            buttonNav.style.marginTop = '20px'
            buttonNav.style.marginLeft = '250px'
            nav.style.transition = '200ms height linear'
            nav.style.height = '100px'

            btnMenu2.style.transition = '200ms top linear'
            btnMenu2.style.top = '31px'
        }
        
    }
});