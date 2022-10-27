auth.onAuthStateChanged((val) => {
    if(val.email == 'wendernatanael2019@gmail.com') {
        let a = document.createElement('a')
        let li = document.getElementById('li')

        a.innerText = 'Todos'
        a.href = 'todos-os-produtos.html'
        li.style.display = 'block'
        document.getElementById('hr').style.display = 'block'
        li.appendChild(a)
    }
})


//! Vai escolher os produtos em destaque
let numeros = []
    let max = 4
    
    function numeroAleatorio() {
        while (numeros.length < max) {
            let aleatoreo = Math.floor(Math.random() * 21)
            
            if (numeros.indexOf(aleatoreo) == -1) numeros.push(aleatoreo)
        }

        for(let c = 0; c < max; c++) {
            addOfertas(numeros[c])
        }
    } numeroAleatorio()

function addOfertas(num) {
    db.collection('Produtos').onSnapshot((data) => {
        data.docs.map(function(valProduto) {
            let p = valProduto.data()
            if(p.id == num) {
                const ofertas = document.getElementById('ofertas')
                const divP = document.createElement('div')
                const localImg = document.createElement('a')
                const divImg = document.createElement('div')
                const strong = document.createElement('strong')
                const desc = document.createElement('p')
                
                divP.className = 'p'
                localImg.className = 'localImg'
                divImg.className = 'img'
                
                divImg.style.backgroundImage = `url(${p.imagem1})`
                strong.innerText = p.nome
                desc.innerText = p.desc
                
                localImg.addEventListener('click', () => {
                    console.log(p.id);

                    localStorage.setItem('sobreProduto', p.id)
                })

                localImg.href = `sobre-o-produto.html`
                localImg.appendChild(divImg)
                divP.appendChild(localImg)
                divP.appendChild(strong)
                divP.appendChild(desc)
                ofertas.appendChild(divP)
            }
        })
    })
    
} addOfertas()

//! Sliders
let slide = document.querySelector('.slideshow-wrapper')
let btnSlide1 = document.getElementsByClassName('slide-btn-1')[0]
let btnSlide2 = document.getElementsByClassName('slide-btn-2')[0]
let anin = 0
let stop = false

setInterval( function animacao() {
    if(stop == false) {
        if(anin < 300) {
            anin += 100
            
        } else {
            anin = 0
        }
    
        slide.style.left = `-${anin}%`
    }
}, 3500);

function btnSliderE() {
    if(anin > 0) {
        stop = true
        anin -= 100
        slide.style.left = `-${anin}%`
        btnSlide2.style.display = 'block'
    }
}

function btnSliderD() {
    if(anin < 300) {
        stop = true
        anin += 100
        slide.style.left = `-${anin}%`
        btnSlide1.style.display = 'block'

    }
}

setInterval(() => {
    //! Vai controlar quando o bnt1 vai aparecer ou sumir
    if(anin == 0) {
        btnSlide1.style.display = 'none'

    } else {
        btnSlide1.style.display = 'block'
    } 

    //! Vai controlar qunado o bnt2 vai aparecer ou sumir
    if(anin == 300) {
        btnSlide2.style.display = 'none'

    } else {
        btnSlide2.style.display = 'block'
    }
}, 500);

document.addEventListener('click', (el) => {
    let e = el.target.className
    if(e != 'slide-btn slide-btn-1' && e != 'slide-btn slide-btn-2') {
        stop = false
    }
})