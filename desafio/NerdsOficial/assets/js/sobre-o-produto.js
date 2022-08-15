const sobreProduto1 = localStorage.getItem('sobreProduto')
const sobreProduto2 = JSON.parse(sobreProduto1)

document.querySelector('title').innerText = sobreProduto2.titulo

function img() {
    const el = sobreProduto2.imgProduto
    
    var novoLink1 = el.slice(0, -1)
    
    if(novoLink1.substr(-1) == 'e') {
        var novoLink2 = novoLink1.slice(0, -1)
        var novoLink23 = novoLink2.slice(0, -1)
        var novoLink24 = novoLink23.slice(0, -1)
        var novoLink3 = novoLink24.slice(0, -1)
        var novoLink4 = novoLink3.slice(0, -1)
    
    } else {
        var novoLink2 = novoLink1.slice(0, -1)
        var novoLink23 = novoLink2.slice(0, -1)
        var novoLink3 = novoLink23.slice(0, -1)
        var novoLink4 = novoLink3.slice(0, -1)
    }
    
    const imgProduto = document.getElementById('imgProduto')
    
    if(novoLink1.substr(-1) == 'e') {
        imgProduto.src = `${novoLink4}.jpeg`
    
    } else if(novoLink2.substr(-1) == 'j') {
        imgProduto.src = `${novoLink4}.jpg`
    
    } else {
        imgProduto.src = `${novoLink4}.png`
    }

} img()

//! img1
let img1 = document.getElementById('img1')
img1.src = sobreProduto2.imgProduto

// * Vai alterar a img principal para a img1
img1.addEventListener('click', () => {
    imgProduto.src = img1.src
})

//! img2
let img2 = document.getElementById('img2')
img2.src = imgProduto.src

// * Vai alterar a img principal para a img2
img2.addEventListener('click', () => {
    imgProduto.src = img2.src
})

document.getElementById('titulo').innerText = sobreProduto2.titulo
document.getElementById('desc').innerText = sobreProduto2.desc