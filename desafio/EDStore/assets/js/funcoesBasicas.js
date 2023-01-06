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