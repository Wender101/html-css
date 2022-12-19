const produtoPesquisado1 = localStorage.getItem('produtoPesquisado')
const produtoPesquisado2 = JSON.parse(produtoPesquisado1)

setTimeout(() => {
    if(countCheck == true) {
        let configs = document.getElementById('configs')
        let btnAdicionarProduto = document.createElement('button')
        let span = document.createElement('span')
    
        btnAdicionarProduto.id = 'btnAdicionarProduto'
        span.innerText = '+'
    
        //! AppendChild
        btnAdicionarProduto.appendChild(span)
        configs.appendChild(btnAdicionarProduto)
    
        //! Vai colocar os produtos, banners e etc na tela
        chamarBD()
        colocarBannerNaTela() 
    
        //! Eventos de click
        btnAdicionarProduto.addEventListener('click', () => {
            document.getElementById('btnAdd').innerText = 'Adicionar'
            document.getElementById('addProduto').style.display = 'flex'
        })
    
        addProduto.addEventListener('click', (e) => {
            let el = e.target.id
            if(el == 'addProduto') {
                document.getElementById('addProduto').style.display = 'none'
            }
        })
    
        document.getElementById('classeProdutos').style.display = 'block'
    
        setInterval(() => {
            if(document.getElementById('carregando').style.display != 'flex') {
                for(let c = 0; c <= 999; c++) {
                    try {
                        document.getElementsByClassName('btnEdit')[c].style.display = 'flex'
                        
                    } catch {
                        c = 999
                    }
                }
            }
        }, 100)
    
    } else {
        // window.location.href = 'https://wender101.github.io/html-css/desafio/NerdsFirebase/home.html'
        window.location.href = 'http://127.0.0.1:5501/home.html'
    }
}, 1000)

fecharMenu()

//! Vai cancelar a ação de adiconar um produto
let editando = 0
function cancelar() {
    document.getElementById('addProduto').style.display = 'none'
    document.getElementById('alert').style.display = 'none'
    document.getElementById('excluirProduto').style.display = 'none'
    editando = 0

    for(let c = 0; c < 5; c++) {
        let obrigatorios = document.getElementsByClassName('obrigatorios')[c]
        obrigatorios.style.animation = 'none'
    }

    limpar()
}

function limpar() {
    document.getElementById('nomeProduto').value = ''
    document.getElementById('descProduto').value = ''
    document.getElementById('linkImg1').value = ''
    document.getElementById('linkImg2').value = ''
    document.getElementById('valorProduto').value = 0.00
    document.getElementById('descontoProduto').value = '0%'
    document.getElementById('sobreDesconto').value = 'Individual'
}

//! vai adicionar o produto
let id = 0
function chamarBD(classeSelecionada = 'Todos') {
    document.getElementById('classProduto').innerText = document.getElementById('classeProdutos').value
    document.querySelector('main').innerHTML = ''
    db.collection('Produtos').onSnapshot((data) => {
        const main = document.querySelector('main')
        main.innerHTML = ''
        data.docs.map(function(val) {
            let p = val.data()
    
            if(classeSelecionada == 'Todos') {
                document.getElementById('carregando').style.display = 'none'
                construirProduto(p.classe, p.nome, p.desc, p.imagem1, p.imagem2, p.id, p.valor, p.desconto, p.tipoDesconto)
                
                if(p.id > id) {
                    id = p.id
                }

            } else {
                if(classeSelecionada == 'Com desconto') {
                    document.getElementById('carregando').style.display = 'none'

                    if(p.desconto != undefined && p.desconto != '0%') {
                        construirProduto(p.classe, p.nome, p.desc, p.imagem1, p.imagem2, p.id, p.valor, p.desconto, p.tipoDesconto)
                    }
                    
                    if(p.id > id) {
                        id = p.id
                    }

                } else if(p.classe == classeSelecionada) {
                    document.getElementById('carregando').style.display = 'none'
                    construirProduto(p.classe, p.nome, p.desc, p.imagem1, p.imagem2, p.id, p.valor, p.desconto, p.tipoDesconto)
                    
                    if(p.id > id) {
                        id = p.id
                    }
                }
            }
    
            setTimeout(() => {
                let carregando = document.getElementById('carregando')
                if(carregando.style.display != 'none') {
                    carregando.style.display = 'none'
                    document.getElementById('classProduto').innerText = 'Parece que algo deu errado :('
                }
            }, 8000)
        })
    }) 
}

let carregado = false
let cloneBanner = []
let editandoBanner = false
function colocarBannerNaTela() {
    db.collection('Banners').onSnapshot((data) => {
        data.docs.map(function(vaBanners) {
            let pBanners = vaBanners.data()
    
            if(editandoBanner == true) {
                setTimeout(() => {
                    location.reload()
                }, 1500)
    
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
}

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
    divBanner.id = id
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

    contadorBanners++
    qBanner = (contadorBanners * 100) - 100

    imgBanners.addEventListener('click', () => {
        document.getElementById('editarBanner').style.display = 'flex'
        idImgSelecionada = id
        stop = true
    })
}

//! Vai adicionar um no banner
function adicionarBanner() {
    let imagem1 = document.getElementById('imgbanner1').value
    let imagem2 = document.getElementById('imgbanner2').value

    if(editandoBanner == false) {

        let objBanner = {
            imagemAltaEscala: imagem1,
            imagemPequenaEscala: imagem2,
            id: contadorBanners
        }

        cloneBanner.push(objBanner)

        db.collection('Banners').onSnapshot((data) => {
            data.docs.map(function(vaBanners) {
                db.collection('Banners').doc(vaBanners.id).update({Banner: cloneBanner})
            })
        })
        cacelarAddBanner()

        document.getElementById('carregando').style.display = 'flex'
        carregado = true

    } else {
        db.collection('Banners').onSnapshot((data) => {
            data.docs.map(function(vaBanners) {
                let pBanners = vaBanners.data()
        
                for (let c = 0; c < pBanners.Banner.length; c++) {
                    if(idImgSelecionada == pBanners.Banner[c].id) {
                        cloneBanner[c].imagemAltaEscala = imagem1
                        cloneBanner[c].imagemPequenaEscala = imagem2
                        db.collection('Banners').doc(vaBanners.id).update({Banner: cloneBanner})

                        document.getElementById('carregando').style.display = 'flex'
                    }
                }

            })
        })
    }
}

//! Vai editar um banner já existente
function editarBanner() {
    db.collection('Banners').onSnapshot((data) => {
        data.docs.map(function(vaBanners) {
            let pBanners = vaBanners.data()
    
            for (let c = 0; c < pBanners.Banner.length; c++) {
                if(idImgSelecionada == pBanners.Banner[c].id) {
                    document.getElementById('imgbanner1').value = pBanners.Banner[c].imagemAltaEscala
                    document.getElementById('imgbanner2').value = pBanners.Banner[c].imagemPequenaEscala

                    editandoBanner = true
                }
            }
        })
    })
}

//! Vai excluir o banner selecionado
function excluirBanner() {
    db.collection('Banners').onSnapshot((data) => {
        data.docs.map(function(vaBanners) {
            let pBanners = vaBanners.data()
    
            for (let c = 0; c < pBanners.Banner.length; c++) {
                if(idImgSelecionada == pBanners.Banner[c].id) {
                    cloneBanner.splice(c, 1)
                    db.collection('Banners').doc(vaBanners.id).update({Banner: cloneBanner})

                    editandoBanner = true
                }
            }
        })
    })
}

//! Vai fechar a aba de editar/ adicionar novo banner
function cacelarAddBanner() {
    document.getElementById('editarBanner').style.display = 'none'
    document.getElementById('imgbanner1').value = ''
    document.getElementById('imgbanner2').value = ''

    editandoBanner = false
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


//! Vai colocar os produtos na tela
function construirProduto(classe, nome, desc, imagem1, imagem2 = imagem1, id, valor, desconto, tipoDesconto) {
    const main = document.querySelector('main')
    const containerProduto = document.createElement('div')
    const localImgProduto = document.createElement('a')
    const imgProduto = document.createElement('img')
    const strong = document.createElement('strong')
    const p = document.createElement('p')
    const buttonEdit = document.createElement('button')
    const spanEdit = document.createElement('span')

    containerProduto.className = 'containerProduto'
    localImgProduto.className = 'localImgProduto'
    localImgProduto.href = 'sobre-o-produto.html'
    imgProduto.className = 'imgProduto'
    spanEdit.innerText = '='
    buttonEdit.className = 'btnEdit'

    try {
        imgProduto.src = imagem1
        strong.innerHTML = nome
        p.innerText = desc
        
    } catch {
        imgProduto.src = 'assets/img/site/error.png'
        strong.innerText = 'Algo deu errado!'
        p.innerText = 'Parece que esse produto não foi carregado corretamente'
    }

    //! AppendChild
    localImgProduto.appendChild(imgProduto)
    buttonEdit.appendChild(spanEdit)
    containerProduto.appendChild(buttonEdit)
    containerProduto.appendChild(localImgProduto)
    containerProduto.appendChild(strong)
    containerProduto.appendChild(p)
    main.appendChild(containerProduto)

    //! Editar produto
    buttonEdit.addEventListener('click', () => {
        editando = id

        document.getElementById('classe').value = classe
        document.getElementById('nomeProduto').value = nome
        document.getElementById('descProduto').value = desc
        document.getElementById('linkImg1').value = imagem1
        document.getElementById('linkImg2').value = imagem2

        document.getElementById('valorProduto').value =  valor
        document.getElementById('descontoProduto').value =  desconto
        document.getElementById('sobreDesconto').value =  tipoDesconto

        document.getElementById('btnAdd').innerText = 'Editar'
        document.getElementById('excluirProduto').style.display = 'block'
        document.getElementById('addProduto').style.display = 'flex'
    })

    //!Vai trocar a img do produto ao passar o mouse em cima
    imgProduto.addEventListener('mouseenter', () => {
        imgProduto.src = imagem2
    })

    imgProduto.addEventListener('mouseout', () => {
        imgProduto.src = imagem1
    })

    //! Ao clicar na img do produto
    localImgProduto.addEventListener('click', () => {
        localStorage.setItem('sobreProduto', id)
    })
}

//! Função q vai add
function adicionarProduto() {
    
    let select = document.getElementById('classe').value
    let nomeProduto = document.getElementById('nomeProduto').value
    let descProduto = document.getElementById('descProduto').value
    let linkImg1 = document.getElementById('linkImg1').value
    let linkImg2 = document.getElementById('linkImg2').value

    let valorProduto = document.getElementById('valorProduto').value
    let descontoProduto = document.getElementById('descontoProduto').value
    let tipoDesconto = document.getElementById('sobreDesconto').value


    if(linkImg2 == '') {
        linkImg2 = linkImg1
    }

    if(descontoProduto == '') {
        descontoProduto = '0%'
    } else if(descontoProduto.substr(-1) != '%') {
        descontoProduto += '%'
    }
    
    if(nomeProduto == '' || descProduto == '' || linkImg1 == '') {
        document.getElementById('alert').style.display = 'block'
        for(let c = 0; c < 4; c++) {
            let obrigatorios = document.getElementsByClassName('obrigatorios')[c]
            obrigatorios.style.animation = '1s obrigatorios infinite linear'
        }
        return

    } else {
        id++
        addNoBancoDeDados(select, nomeProduto, descProduto, linkImg1, linkImg2, id, valorProduto, descontoProduto, tipoDesconto)
        document.getElementById('addProduto').style.display = 'none'
    }

    limpar()
}

function addNoBancoDeDados(classe, nome, desc, imagem1, imagem2, id, valor, desconto, tipoDesconto) {
    let objProdutos = {
        classe,
        imagem1,
        imagem2,
        nome,
        desc,
        valor,
        desconto,
        tipoDesconto,
        id
    }

    if(editando == 0) {
        db.collection('Produtos').add(objProdutos)


    } else {
        //! Vai editar o produto selecionado
        db.collection('Produtos').onSnapshot((data) => {
            data.docs.map(function(val) {
                let p = val.data()

                if(tipoDesconto != 'Por classe') {
                    if(val.data().id == editando) {
                        db.collection('Produtos').doc(val.id).update({classe: classe, imagem1: imagem1, imagem2: imagem2, nome: nome, desc: desc, id: editando, valor: valor, desconto: desconto, tipoDesconto: tipoDesconto})
                        editando = 0
                        return
                    }
                } else if(tipoDesconto == 'Por classe') {
                    if(val.data().classe == classe) {
                        db.collection('Produtos').doc(val.id).update({desconto: desconto, tipoDesconto: tipoDesconto})
                        editando = 0
                        return
                    }
                }
            })
        })
    }
    
    document.getElementById('excluirProduto').style.display = 'none'
}

//! Vai excluir o produto do BD
function excluirProduto() {
    let classe = document.getElementById('classe').value
    let nome = document.getElementById('nomeProduto').value
    let desc = document.getElementById('descProduto').value
    let img1 = document.getElementById('linkImg1').value
    let img2 = document.getElementById('linkImg2').value
    
    // let valorProduto = document.getElementById('valorProduto').value
    // let descontoProduto = document.getElementById('descontoProduto').value
    // let tipoDesconto = document.getElementById('sobreDesconto').value

    db.collection('Produtos').onSnapshot((data) => {
        data.docs.map(function(val) {
            let p = val.data()
            if(classe == p.classe && nome == p.nome && desc == p.desc && img1 == p.imagem1 && img2 == p.imagem2) {
                db.collection('Produtos').doc(val.id).delete()
            }
        })
    })

    cancelar()
    limpar()
}

//! Vai filtrar os produtos
let selectValue
function filtro() {
    selectValue = document.getElementById('classeProdutos').value
    setInterval(() => {
        if(selectValue != document.getElementById('classeProdutos').value) {
            selectValue = document.getElementById('classeProdutos').value
            chamarBD(selectValue)
        }
    }, 50)
} filtro()
