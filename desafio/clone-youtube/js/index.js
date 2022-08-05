var imgs = 1
var usuarios = 1
for(let c = 0; c < 20; c++) {
    exibir(imgs, usuarios)

    if(imgs > 7) {
        imgs = 1
    } else {
        imgs++
    }

    if(usuarios > 3) {
        usuarios = 1
    } else {
        usuarios++
    }
}

function exibir(imgs, usuarios) {
    const main = document.querySelector('main')
    const article = document.createElement('article')
    const a = document.createElement('a')
    const user = document.createElement('div')
    const a2 = document.createElement('a')
    const texto = document.createElement('div')
    const h5 = document.createElement('h5')
    const p = document.createElement('p')
    const p2 = document.createElement('p')

    
    a.innerHTML = `<img src="img/users/t${imgs}.png" alt="" class="imgvideo">`
    a.href="video-youtube.html"
    
    user.className = 'user'
    
    a2.innerHTML = `<img src="img/users/user${usuarios}.png" alt="" class="imguser">`
    a2.href="video-youtube.html"
    
    texto.className = 'texto'
    
    h5.innerText = 'Lorem ipsum dolor sit amet, consecte adipiscing elit.'
    p.innerText = 'James Gouse'
    p2.innerText = '15 mil visualizações há 1 dia'

    article.id = `img/users/user${usuarios}.png`

    // Essa função vai identificar em qual canal vc clicou
    article.addEventListener('click', (e) => {
        const el = `img/users/user${usuarios}.png`
        let srcCanal = JSON.stringify(el)
        localStorage.setItem('srcCanal', srcCanal)
    })

    main.appendChild(article)
    article.appendChild(a)
    article.appendChild(user)
    user.appendChild(a2)
    user.appendChild(texto)
    texto.appendChild(h5)
    texto.appendChild(p)
    texto.appendChild(p2)
}

//                               Lógica

// A var c1 vai diminuir toda vez que clicar no botão do menu pra ir pro lado diteiro ->
// e com isso tbm, vai somar 1 á var c2, e quando c2 for maior que '0' o botão pro lado 
// direito vai aparecer, já quando c1 for = a '0' ele vai sumir, e quando clicar no btn 
// pro lado esquerdo c1 vai receber 1

let c1 = 2
let c2 = 0

function irProLadoDireito() {
    let ul = document.getElementById('ul')
    let btnEsquerdo = document.getElementById('btnAvancarMenu1')
    let btnDireito = document.getElementById('btnAvancarMenu2')
    
    ul.style.transition = '200ms transform linear'
    ul.style.transform +='translateX(-15%)' 
    btnEsquerdo.style.display = 'block'

    c1 -= 1
    c2 += 1

    if(c1 == 0) {
        btnDireito.style.display = 'none'
    }
    
}

function irProLadoEsquerdo() {
    let ul = document.getElementById('ul')
    let btnEsquerdo = document.getElementById('btnAvancarMenu1')
    let btnDireito = document.getElementById('btnAvancarMenu2')
    
    ul.style.transition = '200ms transform linear'
    ul.style.transform +='translateX(15%)' 
    btnDireito.style.display = 'block'

    c2 -= 1
    c1 += 1

    if(c2 == 0) {
        btnEsquerdo.style.display = 'none'
    }
}

// Funcionalidades do menu

function abrirMenu() {
    let barraLateral = document.getElementById('barra-lateral')
    let btnEsquerdo = document.getElementById('btnAvancarMenu1')
    let ul = document.getElementById('ul')
    let fundo = document.getElementById('fundo')
    
    if(barraLateral.style.left == '0px') {
        barraLateral.style.transition = '200ms left linear'
        barraLateral.style.left = '-110vw'
        ul.style.marginLeft = '0px'
        btnEsquerdo.style.marginLeft = '0px'
        fundo.style.display = 'none'
        
    } else {
        barraLateral.style.transition = '200ms left linear'
        barraLateral.style.left = '0px'
        btnEsquerdo.style.marginLeft = '239px'
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
    let btnEsquerdo = document.getElementById('btnAvancarMenu1')
    let ul = document.getElementById('ul')
    let fundo = document.getElementById('fundo')
    
    barraLateral.style.transition = '200ms left linear'
    barraLateral.style.left = '-110vw'
    ul.style.marginLeft = '0px'
    btnEsquerdo.style.marginLeft = '0px'
    fundo.style.display = 'none'
}
