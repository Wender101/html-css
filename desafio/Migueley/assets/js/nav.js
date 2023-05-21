try {
    document.querySelector('main').addEventListener('click', (e) => {
        let el = e.target.id
    
        if(el != 'buttonMenu') {
            abrirNav('Fechar')
        }
    })
} catch{}

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