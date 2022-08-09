for(let c = 1; c <= 13; c++) {
    const localCategorias = document.getElementById('localCategorias')
    const a = document.createElement('a')
    const p = document.createElement('p')
    const img = document.createElement('img')

    if(c == 1) {
        p.innerText =  'Cabos'
        a.href = `pagProduto.html`

    } else if(c == 2) {
        p.innerText =  'Adaptadores'
        a.href = `pagProduto.html`

    } else if(c == 3) {
        p.innerText =  'Teclados'
        a.href = `pagProduto.html`
        
    } else if(c == 4) {
        p.innerText =  'Mouse'
        a.href = `pagProduto.html`
        
    } else if(c == 5) {
        p.innerText =  'Gabinetes'
        a.href = `pagProduto.html`
        
    } else if(c == 6) {
        p.innerText =  'Headset'
        a.href = `pagProduto.html`
        
    } else if(c == 7) {
        p.innerText =  'Controles'
        a.href = `pagProduto.html`
        
    } else if(c == 8) {
        p.innerText =  'Fontes'
        a.href = `pagProduto.html`
        
    } else if(c == 9) {
        p.innerText =  'Mouse Pad'
        a.href = `pagProduto.html`
        
    } else if(c == 10) {
        p.innerText =  'Processador'
        a.href = `pagProduto.html`
        
    } else if(c == 11) {
        p.innerText =  'Memoria Ram'
        a.href = `pagProduto.html`
        
    } else if(c == 12) {
        p.innerText =  'SSD'
        a.href = `pagProduto.html`
        
    } else {
        p.innerText =  'Fans'
        a.href = `pagProduto.html`
    }

    img.src = `assets/img/icons/${c}.png`

    a.appendChild(img)
    a.appendChild(p)
    localCategorias.appendChild(a)

    // Vai guardar na memória qual produto foi pesquisado
    a.addEventListener('click', () => {
        let pesquisa
        pesquisa = p.innerText
        const produtoPesquisado = JSON.stringify(pesquisa)
        localStorage.setItem('produtoPesquisado', produtoPesquisado)
    })
}

let distancia = 0
const localCategorias = document.getElementById('localCategorias')

function setaDireita() {
    console.log(distancia);
    if(distancia < 100) {
        distancia += 30
        localCategorias.style.transition = '300ms margin-left linear'
        localCategorias.style.marginLeft = `-${distancia}%`
    }
}

function setaEsquerda() {
    console.log(distancia);
    if(distancia > 0) {
        distancia -= 30
        localCategorias.style.transition = '300ms margin-left linear'
        localCategorias.style.marginLeft = `-${distancia}%`
    }
}