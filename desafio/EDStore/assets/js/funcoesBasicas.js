//? Trabalhamos com Cookies
function fecharAviso() {
    document.getElementById('cookies').style.display = 'none'
}

let menu = document.getElementById('menu')
function abrirMenu() {
    menu.style.display = 'block'
}

menu.addEventListener('click', (e) => {
    let el = e.target.id 
    if(el == 'menu') {
        fecharMenu()
    }
})

function fecharMenu() {
    menu.style.display = 'none'
}

let modoAtual = false
if(localStorage.getItem('Modo') == null || localStorage.getItem('Modo') == undefined) {
    modoAtual = false 
    modoPage(modoAtual)
} else {
    modoAtual = localStorage.getItem('Modo')
    modoPage(modoAtual)
}

function modoPage(modo = '') {
    //? Vai alterar o modo
    if(modoAtual == false && modo == '' || modoAtual == 'false'  && modo == '') {
        modoAtual = true
    } else if(modoAtual == true && modo == '' || modoAtual == 'true' && modo == '') {
        modoAtual = false
    }

    localStorage.setItem('Modo', modoAtual)
    let cor0 = 'black'
    let cor1 = '#fff' 
    let cor2 = '#181a1b' 
    let cor3 = '#e5edf0'
    let cor4 = '#04b3ff'
    let cor5 = '#0075a7'

    for(let c = 0; c < 10; c++) {
        try {
            document.getElementsByClassName('aDivMenu')[c].querySelector('span').id = 'spanDark' + (c + 1)
        } catch {}
    }

    if(modoAtual == false || modoAtual == 'false') {
        //! Modo dark
        try {
            document.getElementById('carregando').style.backgroundColor = cor2
        } catch {
            document.getElementById('carregando1').style.backgroundColor = cor2
        }
        
        setTimeout(() => {
        try {
            document.getElementById('carregando').style.display = 'none'
            document.getElementsByClassName('slide-btn')[0].style.backgroundColor = cor2
            document.getElementsByClassName('slide-btn')[1].style.backgroundColor = cor2
            document.getElementsByClassName('slide-btn')[0].style.color = cor1
            document.getElementsByClassName('slide-btn')[1].style.color = cor1
        } catch {}
        try {
            document.getElementById('mainP').style.backgroundColor = cor2
            document.getElementById('infos').style.backgroundColor = cor2
            document.getElementById('valorDoProduto').style.border = '1px solid var(--cor4)'
        } catch (error) {
            
        }

        try {
            document.getElementById('cookies').querySelector('article').style.background = '#1c1c1c'
            document.getElementById('cookies').querySelector('article').querySelector('button').style.background = cor5
            document.querySelector('footer').style.background = cor5
        } catch {
            document.getElementById('popUpAddProd').style.background = cor2
            document.getElementById('prodEx').style.background = cor2
            document.getElementById('ex2').style.background = cor2
            document.getElementById('ex2').style.color = cor1

        }
        document.getElementById('menu').querySelector('ul').style.background = cor2
        document.getElementById('menu').querySelector('ul').style.color = cor1
        document.getElementsByClassName('modoClaro')[0].style.backgroundImage = 'url(assets/img/icon/sol.png)'
        document.getElementsByClassName('modoClaro')[1].style.backgroundImage = 'url(assets/img/icon/sol.png)'
        document.querySelector('body').style.backgroundColor = cor2
        document.querySelector('body').style.color = cor1
        document.querySelector('header').querySelector('span').style.color = cor1
        document.getElementById('aCarrinho').style.color = cor1
        document.getElementById('pesquisaInput')

        for(let c = 0; c < 100; c++) {
            try {
                document.getElementById('spanDark' + c).style.color = cor1
                document.getElementById('spanDark-1').style.color = cor0
            } catch {}

            try {
                document.getElementsByClassName('Categorias')[c].style.backgroundColor = cor2
                document.getElementsByClassName('Categorias')[c].style.color = cor1
                document.getElementsByClassName('Categorias')[c].style.border = '1px solid var(--cor4)'
                document.getElementById('selected').style.backgroundColor = cor4
            } catch {}

            try {
                document.getElementById('popUp').style.color = cor1
                document.getElementById('popUp').getElementsByTagName('button')[0].style.color = cor0
                document.getElementById('popUp').getElementsByTagName('button')[1].style.color = cor0
                document.getElementById('popUp').getElementsByTagName('button')[2].style.color = cor0
                document.getElementById('popUp').style.background = cor2
            } catch {}
        }
        }, 1000)

        //! ---------------------------------------------------------------

        //! Modo claro
    } else {
        try {
            document.getElementById('carregando').style.backgroundColor = cor1
        } catch {
            document.getElementById('carregando1').style.backgroundColor = cor1
        }
        setTimeout(() => {
            try {
                document.getElementById('menu').querySelector('ul').style.background = cor1
                document.getElementById('menu').querySelector('ul').style.color = cor0
                document.getElementById('carregando').style.display = 'none'
                document.getElementsByClassName('slide-btn')[0].style.backgroundColor = cor1
                document.getElementsByClassName('slide-btn')[1].style.backgroundColor = cor1
                document.getElementsByClassName('slide-btn')[0].style.color = cor0
                document.getElementsByClassName('slide-btn')[1].style.color = cor0
            } catch {}
            try {
                document.getElementById('mainP').style.backgroundColor = '#04b3ff'
                document.getElementById('infos').style.backgroundColor = '#04b3ff'
                document.getElementById('valorDoProduto').style.border = '1px solid var(--cor3)'
                document.getElementById('popUp').style.background = cor1
                document.getElementById('popUp').style.color = cor0
                document.getElementById('popUp').getElementsByTagName('button')[0].style.color = cor0
                document.getElementById('popUp').getElementsByTagName('button')[1].style.color = cor0
                document.getElementById('popUp').getElementsByTagName('button')[2].style.color = cor0

            } catch {}

            try {
                document.getElementById('popUp').style.background = cor1
                document.getElementById('popUp').style.color = cor0
                document.getElementById('popUp').getElementsByTagName('button')[0].style.color = cor0
                document.getElementById('popUp').getElementsByTagName('button')[1].style.color = cor0
                document.getElementById('popUp').getElementsByTagName('button')[2].style.color = cor0
            } catch {}

            try {
                document.getElementById('cookies').querySelector('article').style.background = cor1
                document.getElementById('cookies').querySelector('article').querySelector('button').style.background = 'var(--cor4)'
                document.querySelector('footer').style.background = 'var(--cor4)'
            } catch {}
            document.getElementsByClassName('modoClaro')[0].style.backgroundImage = 'url(assets/img/icon/lua.png)'
            document.getElementsByClassName('modoClaro')[1].style.backgroundImage = 'url(assets/img/icon/lua.png)'
            document.querySelector('body').style.backgroundColor = cor1
            document.querySelector('body').style.color = cor0
            document.querySelector('header').querySelector('span').style.color = cor0
            document.getElementById('aCarrinho').style.color = cor0
            
            for(let c = 0; c < 100; c++) {
                try {
                    document.getElementById('spanDark' + c).style.color = cor0
                    document.getElementById('spanDark-1').style.color = cor0
                } catch {}

                try {
                    document.getElementsByClassName('Categorias')[c].style.backgroundColor = cor3
                    document.getElementsByClassName('Categorias')[c].style.color = cor0
                    document.getElementById('selected').style.backgroundColor = cor4
                    document.getElementById('selected').style.color = cor1
                    document.getElementsByClassName('Categorias')[c].style.border = '1px solid var(--cor3)'
                } catch {}
            }
        }, 1000)
    }
}

//? Vai fechar os cookies
function fecharCookies() {
    document.getElementById('cookies').querySelector('article').style.transition = '1s bottom cubic-bezier(0.18, 0.89, 0.32, 1.28)'
    document.getElementById('cookies').querySelector('article').style.bottom = '-300px'

    setTimeout(() => {
        document.getElementById('cookies').style.display = 'none'
    }, 150)

    //? Vai salvar a info que o user aceitou o cookie
    db.collection('User').onSnapshot((data) => {
        data.docs.map(function(valCarrinho) {
            let User = valCarrinho.data()

            if(User.Email == email) {
                db.collection('User').doc(valCarrinho.id).update({Cookie: true})
            }
        })
    })
}

//? Vai abrir os cookies
function abrirCookies() {
    document.getElementById('cookies').style.display = 'block'
    setTimeout(() => {
        document.getElementById('cookies').querySelector('article').style.transition = '1s bottom cubic-bezier(0.18, 0.89, 0.32, 1.28)'
        document.getElementById('cookies').querySelector('article').style.bottom = '0px'
    }, 100)
}

let cookie = false
setInterval(() => {
    try {
        if(document.getElementById('carregando').style.display == 'none' && cookie == false && email != undefined && email != 'undefined') {
            db.collection('User').onSnapshot((data) => {
                data.docs.map(function(valCarrinho) {
                    let User = valCarrinho.data()
        
                    if(User.Email == email && User.Cookie != true) {
                        cookie = true
                        abrirCookies()
                    }
                })
            })
        }
    } catch {
        if(document.getElementById('carregando1').style.display == 'none' && cookie == false && email != undefined && email != 'undefined') {
            db.collection('User').onSnapshot((data) => {
                data.docs.map(function(valCarrinho) {
                    let User = valCarrinho.data()
        
                    if(User.Email == email && User.Cookie != true) {
                        cookie = true
                        abrirCookies()
                    }
                })
            })
        }
    }
}, 100)