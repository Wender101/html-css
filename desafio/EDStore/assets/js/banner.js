//! Sliders
let carregado = false
let cloneBanner = []
let editandoBanner = false
let bannerSelect
db.collection('Banners').onSnapshot((data) => {
    data.docs.map(function(vaBanners) {
        let pBanners = vaBanners.data()

        if(cloneBanner.length != 0 && pBanners.Banner.length != cloneBanner.length) {
            setTimeout(() => {
                location.reload()
            }, 1000)

        } else if(carregado == false) {
            for (let c = 0; c < pBanners.Banner.length; c++) {
                criaBanners(pBanners.Banner[c].imagemAltaEscala, pBanners.Banner[c].imagemPequenaEscala, pBanners.Banner[c].id)
                cloneBanner = pBanners.Banner
            }

        } else {
            setTimeout(() => {
                location.reload()
            }, 1000)
        }

    })
})

let contadorBanners = 0
let qBanner
let stop = false //! Vai parar a animação do banner
let idImgSelecionada //! Vai mostar o id do banner que vai ser editado
function criaBanners(imagem1, imagem2, id) {
    let slideshowWrapper = document.getElementsByClassName('slideshow-wrapper')[0]
    let divBanner = document.createElement('div')
    let imgBanners = document.createElement('img')

    slideshowWrapper.style.width = `${qBanner + 200}%`

    divBanner.className = 'slide'
    divBanner.id = `Bannrer-${id}`
    imgBanners.className = 'slide-img stop'

    //! Vai alterar o banner de acordo com a tela
    setInterval(() => {
        if(visualViewport.width <= 500) {
            imgBanners.src = imagem2
        } else {
            imgBanners.src = imagem1
        }
    }, 100)

    divBanner.appendChild(imgBanners)
    slideshowWrapper.appendChild(divBanner)

    qBanner = (contadorBanners * 100) 
    
    contadorBanners++
    divBanner.addEventListener('click', () => {
        try {
            bannerSelect = id
            document.getElementById('editarBanner').style.display = 'flex'
        } catch {}
    })
}

//! Sliders
let slide = document.querySelector('.slideshow-wrapper')
let btnSlide1 = document.getElementsByClassName('slide-btn-1')[0]
let btnSlide2 = document.getElementsByClassName('slide-btn-2')[0]
let anin = 0

setInterval( function animacao() {
    if(stop == false) {
        if(anin < qBanner) {
            anin += 100
            
        } else {
            anin = 0
        }
    
        slide.style.left = `-${anin}%`
    }
}, 3500)

function btnSliderE() {
    if(anin > 0) {
        stop = true
        anin -= 100
        slide.style.left = `-${anin}%`
        btnSlide2.style.display = 'block'
    }
}

function btnSliderD() {
    if(anin < qBanner) {
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
    if(anin == qBanner) {
        btnSlide2.style.display = 'none'

    } else {
        btnSlide2.style.display = 'block'
    }
}, 500)

document.addEventListener('click', (el) => {
    let e = el.target.className
    let eId = el.target.id
    if(e != 'slide-btn slide-btn-1' && e != 'slide-btn slide-btn-2' && e != 'stop' && e != 'obrigatorios stop' && e != 'slide-img stop') {
        stop = false
    }
})
//! Fim Sliders