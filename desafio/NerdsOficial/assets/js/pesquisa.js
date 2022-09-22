for(let c = 1; c <= 14; c++) {
    const localCategorias = document.getElementById('localCategorias')
    const a = document.createElement('a')
    const p = document.createElement('p')
    const img = document.createElement('img')

    a.id = `categoria-${c}`

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
        p.innerText =  'Mouse Pad'
        a.href = `pagProduto.html`
        a.className = 'contrario'
        
    } else if(c == 10) {
        p.innerText =  'Processadores'
        a.href = `pagProduto.html`
        
    } else if(c == 11) {
        p.innerText =  'Memoria'
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