for(let c = 1; c <= 14; c++) {
    const localCategorias = document.getElementById('localCategorias')
    const a = document.createElement('a')
    const p = document.createElement('p')
    const img = document.createElement('img')

    a.id = `categoria-${c}`
    p.className = 'pCategoria'

    if(c == 1) {
        p.innerText =  'Cabos'
        a.href = `pagProduto.html`
        a.className = 'contrario'

    } else if(c == 2) {
        p.innerText =  'Adaptadores'
        a.href = `pagProduto.html`

    } else if(c == 3) {
        p.innerText =  'Teclados'
        a.href = `pagProduto.html`
        a.className = 'contrario'
        
    } else if(c == 4) {
        p.innerText =  'Mouse'
        a.href = `pagProduto.html`
        
    } else if(c == 5) {
        p.innerText =  'Gabinetes'
        a.href = `pagProduto.html`
        a.className = 'contrario'
        
    } else if(c == 6) {
        p.innerText =  'Headset'
        a.href = `pagProduto.html`
        
    } else if(c == 7) {
        p.innerText =  'Controles'
        a.href = `pagProduto.html`
        a.className = 'contrario'
        
    } else if(c == 8) {
        p.innerText =  'Fontes'
        a.href = `pagProduto.html`
        
    } else if(c == 9) {
        p.innerText =  'MousePad'
        a.href = `pagProduto.html`
        a.className = 'contrario'
        
    } else if(c == 10) {
        p.innerText =  'Processadores'
        a.href = `pagProduto.html`
        
    } else if(c == 11) {
        p.innerText =  'Memória'
        a.href = `pagProduto.html`
        a.className = 'contrario'
        
    } else if(c == 12) {
        p.innerText =  'SSD'
        a.href = `pagProduto.html`
        
    } else if(c == 13) {
        p.innerText =  'Coolers'
        a.href = `pagProduto.html`
        img.className = 'Coolers'
        a.className = 'contrario'

    } else {
        p.innerText =  'Outros'
        a.href = `pagProduto.html`
    }

    img.src = `assets/img/icons/${c}.png`

    a.appendChild(img)
    a.appendChild(p)
    localCategorias.appendChild(a)
    
    // Vai guardar na memória qual produto foi pesquisado
    a.addEventListener('click', () => {
        let pesquisa = [p.innerText, c]
        const produtoPesquisado = JSON.stringify(pesquisa)
        localStorage.setItem('produtoPesquisado', produtoPesquisado)
    })
}

try {
    const produtoQPesquisado1 = localStorage.getItem('produtoPesquisado')
    const produtoQPesquisado2 = JSON.parse(produtoQPesquisado1)
    document.getElementById(`categoria-${produtoQPesquisado2[1]}`).id = `after`
    
} catch {}

//! botões do painel de categorias
var viewport
let press = 0
let q = 0
let btnE = document.getElementsByClassName('btns')[0]
let btnD = document.getElementsByClassName('btns')[1]
let localCategorias = document.getElementById('localCategorias')
setInterval(() => {
    viewport = visualViewport.width

    if(viewport > 1255) {
        localCategorias.style.marginLeft = `0px`
        btnE.style.display = 'none'
        btnD.style.display = 'none'
        press = 0
        q = 0

    } else if(viewport < 1255 && press == 0) {
        btnD.style.display = 'block'
    } 
    
    //! Vai controlar quando a seta direita vai sumir
    if(viewport >= 1085 && press == 1) {
        btnD.style.display = 'none'

    } else if(viewport >= 883 && press == 2) {
        btnD.style.display = 'none'

    } else if(viewport <= 883 && viewport >= 644 && press == 3) {
        btnD.style.display = 'none'
        
    } else if(viewport <= 644 && viewport >= 484 && press == 4) {
        btnD.style.display = 'none'
        
    } else if(viewport < 484 && press == 5) {
        btnD.style.display = 'none'
    }

    //! Vai controlar quando a seta esquerda vai sumir
    if(press == 0) {
        btnE.style.display = 'none'

    } else {
        btnE.style.display = 'block'
    }
}, 100)

function btnEsquerda() {
    q += 145
    localCategorias.style.marginLeft = `${q}px`
    btnD.style.display = 'block'
    press--
}

function btnDireita() {
    q -= 145
    localCategorias.style.marginLeft = `${q}px`
    btnE.style.display = 'block'
    press++
}

//? Barra de pesquisa
let input = document.getElementById('pesquisar')
document.addEventListener('keypress', (e) => {
    if(e.keyCode == 13 && input.value.length > 5) {
        let pesquisa = [input.value, 15]
        const produtoPesquisado = JSON.stringify(pesquisa)
        localStorage.setItem('produtoPesquisado', produtoPesquisado)

        if(location.pathname != '/html-css/desafio/NerdsFirebase/pagProduto.html') {
            location.href = 'https://wender101.github.io/html-css/desafio/NerdsFirebase/pagProduto.html'
        }
    }
})

document.getElementById('btnPesquisar').addEventListener('click', () => {
    let pesquisa = [input.value, 15]
    const produtoPesquisado = JSON.stringify(pesquisa)
    localStorage.setItem('produtoPesquisado', produtoPesquisado)

    if(location.pathname != '/html-css/desafio/NerdsFirebase/pagProduto.html') {
        location.href = 'https://wender101.github.io/html-css/desafio/NerdsFirebase/pagProduto.html'
    }
})
