document.querySelector('main').addEventListener('click', (e) => {
    let el = e.target.id

    if(el != 'buttonMenu') {
        abrirNav('Fechar')
    }
})

document.querySelector('#buttonMenu').addEventListener('click', () => {
    abrirNav()
})

let nav = document.getElementById('nav')
let btnMenu = document.querySelector('#btnMenu')
nav.style.justifyContent = 'center'
function abrirNav(estado) {
    
    if(estado == 'Fechar') {
        nav.className = 'navFechada'
        setTimeout(() => {
            btnMenu.style.display = 'block'
            nav.style.justifyContent = 'center'
        }, 500)

    } else {
        console.log(nav.style.width)
        if(nav.style.width == '270px') {
            nav.className = 'navFechada'
            setTimeout(() => {
                btnMenu.style.display = 'block'
                nav.style.justifyContent = 'center'
            }, 500)
        } else {
            btnMenu.style.display = 'none'
            nav.style.justifyContent = 'start'
            nav.className = ''
        }
    }
}

//! ------------------
function slug() {
    let pesquisado = false
    let urlPage = window.location.href
    if(location.host == '127.0.0.1:5500') {
        // urlPage = urlPage.replace('http://127.0.0.1:5500/Sobre-Noticia.html?=', "")
        urlPage = urlPage.replace('http://127.0.0.1:5500/Home.html?=', "")
        
    } else {
        urlPage = urlPage.replace('https://wender101.github.io/html-css/desafio/Migueley/Home.html?=', "")
    }
    
    db.collection('UsersMigueley').onSnapshot((data) => {
        data.docs.map(function(valor) {
            let UsersMigueley = valor.data()

            
            if(pesquisado == false) {
                setTimeout(() => {
                    pesquisado = true
                }, 3000)

                for (let c = 0; c < UsersMigueley.Noticias.length; c++) {

                    //? Vai carregar as outras noticias
                    let noticiasDoDia = document.querySelector('#noticiasDoDia')
                    let noticias = document.createElement('div')
                    let img = document.createElement('img')
                    let div = document.createElement('div')
                    let h2 = document.createElement('h2')
                    let p = document.createElement('p')
                    let span = document.createElement('span')
                    let dataStrong = document.createElement('strong')
    
                    noticias.className = 'noticias'
                    dataStrong.className = 'data'
    
                    img.src = UsersMigueley.Noticias[c].Img
                    h2.innerHTML = UsersMigueley.Noticias[c].Titulo.replace(/\*(.*?)\*/g, "<strong>$1</strong>")
                    p.innerHTML = UsersMigueley.Noticias[c].Texto.replace(/\*(.*?)\*/g, "<strong>$1</strong>")

                    let dataPostada = `${UsersMigueley.Noticias[c].Data}`
                    let ano
                    let mes
                    let dia
                    if(UsersMigueley.Noticias[c].Data.length == 7) {
                        mes = dataPostada.substr(0, 1)
                        dia = dataPostada.substr(1, 2)
                        ano = dataPostada.substr(3, 4)

                        
                        if(mes.length == 1) {
                            mes = `0${mes}`
                        }

                        if(dia.length == 1) {
                            dia = `0${dia}`
                        }
                    } else {
                        mes = dataPostada.substr(0, 2)
                        dia = dataPostada.substr(3, 2)
                        ano = dataPostada.substr(4, 4)

                        
                        if(mes.length == 1) {
                            mes = `0${mes}`
                        }

                        if(dia.length == 1) {
                            dia = `0${dia}`
                        }
                    }

                    dataStrong.innerText = `${dia} ${mes} ${ano}`
                    span.innerHTML = `Postado por: <strong>${UsersMigueley.Nome}</strong>`
    
                    noticias.appendChild(img)
                    noticias.appendChild(div)
                    div.appendChild(h2)
                    div.appendChild(p)
                    div.appendChild(span)
                    div.appendChild(dataStrong)
                    noticiasDoDia.appendChild(noticias)
    
                    noticias.addEventListener('click', () => {
                        //? Vai formatar o texto para criar um link
                        //! Altera a URL para "novaurl" sem atualizar a página
                        document.querySelector('#imgNoticia').src = ''
                        window.history.replaceState({}, '', `Home.html?=${encodeURIComponent(UsersMigueley.Noticias[c].Texto.toLocaleLowerCase())}`);
                        document.querySelector('#localNoticia').className = ''
                        document.querySelector('#tituloNoticia').innerHTML = UsersMigueley.Noticias[c].Titulo.replace(/\*(.*?)\*/g, "<strong>$1</strong>")
                        document.querySelector('#textoNoticia').innerHTML = UsersMigueley.Noticias[c].Texto.replace(/\*(.*?)\*/g, "<strong>$1</strong>")
                        document.querySelector('#imgNoticia').src = UsersMigueley.Noticias[c].Img
                    })
    
                    //? Vaoi carregar a noticia pesquisada ----------------------------
                    let TextoSlug = encodeURIComponent(UsersMigueley.Noticias[c].Texto.toLocaleLowerCase())
    
                    if(urlPage == TextoSlug) {
    
                        document.querySelector('#tituloNoticia').innerHTML = UsersMigueley.Noticias[c].Titulo.replace(/\*(.*?)\*/g, "<strong>$1</strong>")
                        document.querySelector('#textoNoticia').innerHTML = UsersMigueley.Noticias[c].Texto.replace(/\*(.*?)\*/g, "<strong>$1</strong>")
                        document.querySelector('#imgNoticia').src = UsersMigueley.Noticias[c].Img
                    }
                }
            }
        })
    })
} slug()

//? Vai fechar a aba sobre a noticia no cell
function voltarParaNoticias() {
    document.querySelector('#localNoticia').className = 'noticiaFechada'
}