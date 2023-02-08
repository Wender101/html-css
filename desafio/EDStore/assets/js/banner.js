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

//? Categorias
let catCarregada = false
let catRecarregada = false
let cloneCat = []
function chamaCategorias() {
    document.getElementById('localCategorias').querySelector('article').innerHTML = ''
    db.collection('Categorias').onSnapshot((data) => {
        data.docs.map(function(val) {
            let Categorias = val.data()
            cloneCat = Categorias.TodasCategorias

            if(catCarregada == false) {
                catCarregada = true
                catRecarregada = false
                for(let c = 0; c < Categorias.TodasCategorias.length; c++) {
                    document.getElementById('localCategorias').style.display = 'block'
                    let localCategorias = document.getElementById('localCategorias').querySelector('article')
                    let categorias = document.createElement('div')
                    let img = document.createElement('img')
                    let p = document.createElement('p')
    
                    categorias.className = 'categorias'
    
                    img.src = Categorias.TodasCategorias[c].UrlImg
                    p.innerText = Categorias.TodasCategorias[c].Nome
    
                    categorias.appendChild(img)
                    categorias.appendChild(p)
                    localCategorias.appendChild(categorias)

                    categorias.addEventListener('click', () => {

                        //? Vai levar o user para a pág de pesquisa
                        if(document.querySelector('title').innerText != 'EDStore - Admin Page') {
                            let pesquisaFeita = localStorage.getItem('produtoPagProduto')
                            pesquisaFeita = JSON.parse(pesquisaFeita)
                            location.href = location.href.replace('?' + pesquisaFeita, '')
                            localStorage.setItem('produtoPagProduto', p.innerText)
                            
                            if(location.host == '127.0.0.1:5500') {
                                if(location.pathname == '/pagProduto.html') {
                                    setTimeout(() => {
                                        location.reload()
                                    }, 1000)
                                } else {
                                    
                                    location.pathname = '/pagProduto.html'
                                }
                                
                            } else if(location.host == 'wender101.github.io') {
                                if(location.href == 'https://wender101.github.io/html-css/desafio/EDStore/pagProduto.html') {
                                    setTimeout(() => {
                                        location.reload()
                                    }, 1000)
                                } else {
                                    location.href = 'https://wender101.github.io/html-css/desafio/EDStore/pagProduto.html'
                                }
                            }
                            //? função admin
                        } else {
                            document.getElementById('editarCategorias').style.display = 'flex'
                            document.getElementById('textoCategoriaEditar').value = p.innerText
                            
                            document.getElementById('calcelEditCat').addEventListener('click' , () => {
                                document.getElementById('editarCategorias').style.display = 'none'
                            })

                            let arquivo
                            let novaImg = document.getElementById('novaImgCategoriaEditar')
                            novaImg.onchange = function (event) {
                                arquivo = event.target.files[0]
                            }

                            //? Vai salvar as alterações feitas na categoria
                            document.getElementById('salveEditCat').addEventListener('click' , () => {
                                let imgAlterada = false
                                document.getElementById('editarCategorias').style.display = 'none'
                                //? vai pegar o nome antigo da categoria para alterar a categoria de todos os produtos q tem este nome como categoria para o novo nome
                                let nomeCategoriaAnterior = p.innerText

                                //? vai salvar o novo nome da categoria
                                cloneCat[c].Nome = document.getElementById('textoCategoriaEditar').value
                                db.collection('Categorias').doc(val.id).update({TodasCategorias: cloneCat})

                                //? Vai excluir a imagem antiga da categoria
                                if(novaImg.value != '') {
                                    let carregandoPag = document.getElementById('carregandoPag')
                                    carregandoPag.style.display = 'flex'
                                    storage.ref().child('imgCategorias').child(cloneCat[c].NomeImg).delete()

                                    //? Vai adicionar a nova imagem da categoria
                                    var uploadTask = storage.ref().child('imgCategorias').child(arquivo.name).put(arquivo)

                                    uploadTask.on('imgCategorias', 
                                    (snapshot) => {
                                        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                                        let parteCarregada = document.getElementById('parteCarregada')
                                        parteCarregada.style.width = `${progress}%`
                                        document.getElementById('numCarregar').innerText = `${progress.toFixed(0)}%`

                                        if(progress >= 100) {
                                            setTimeout(() => {
                                                carregandoPag.style.display = 'none'
                                            }, 2000)
                                        }
                                    }, 
                                    (error) => {}, 
                                    () => {
                                        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                                            //? Vai alterar os link da nova img
                                            db.collection('Categorias').onSnapshot((data) => {
                                                data.docs.map(function(val) {
                                                    let Categorias = val.data()

                                                    for(let contadorCategoriaFor = 0; contadorCategoriaFor < Categorias.TodasCategorias.length; contadorCategoriaFor++) {

                                                        if(Categorias.TodasCategorias[contadorCategoriaFor].UrlImg == img.src && imgAlterada == false) {
                                                            imgAlterada = true
                                                            let arrayCategorias = Categorias.TodasCategorias

                                                            arrayCategorias[contadorCategoriaFor].NomeImg = arquivo.name
                                                            arrayCategorias[contadorCategoriaFor].UrlImg = downloadURL

                                                            db.collection('Categorias').doc(val.id).update({TodasCategorias: arrayCategorias})
                                                        }
                                                    }
                                                })
                                            })
                                        })
                                    })
                                }

                                //? Vai alterar a categorias dos produtos para a nova categoria
                                db.collection('Produtos').onSnapshot((data) => {
                                    data.docs.map(function(valorProduto) {
                                        let Produto = valorProduto.data()

                                        if(Produto.Categoria == nomeCategoriaAnterior) {
                                            db.collection('Produtos').doc(valorProduto.id).update({Categoria: cloneCat[c].Nome})
                                        }
                                    })
                                })
                            })

                            document.getElementById('ExcluirCat').addEventListener('click' , () => {
                                document.getElementById('editarCategorias').style.display = 'none'
                                storage.ref().child('imgCategorias').child(cloneCat[c].NomeImg).delete().then(() => {
                                    cloneCat.splice(c, 1)
                                    db.collection('Categorias').doc(val.id).update({TodasCategorias: cloneCat})
                                })
                            })
                        }
                    })
                }
            } else if(catRecarregada == false) {
                catRecarregada = true
                catCarregada = false
                chamaCategorias()
            }
        })
    })
} chamaCategorias()