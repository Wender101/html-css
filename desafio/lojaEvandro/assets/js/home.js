function criarProdutos(c) {
    const main = document.querySelector('main')
    const div1 = document.createElement('div')
    const div2 = document.createElement('div')
    const p = document.createElement('p')
    const img = document.createElement('img')
    const strong = document.createElement('strong')

    p.innerHTML = 'Name of the product'
    img.src = `assets/img/produtos/p${c}.jpg`
    strong.innerText = `R$ 2500.00`
    div2.appendChild(p)
    div2.appendChild(img)
    div2.appendChild(strong)
    div1.appendChild(div2)
    main.appendChild(div1)
}

for(let c = 0; c < 6; c++) {
    criarProdutos(c)
}