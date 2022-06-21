const login = document.getElementById('login')
const sombraCadastro = document.getElementById('sombraCadastro')
const cadastro = document.getElementById('cadastro')

// Vai fazer o pop up de login aparecer ao clicar na tela
function abrirAbalogin() {
    login.style.transition = '300ms top linear'
    login.style.top = '150px'
    sombraCadastro.style.display = 'block'
}

// Vai fazer o pop up sumir
function fecharLogin() {
    login.style.transition = '300ms top linear'
    login.style.top = '-600px'
    sombraCadastro.style.display = 'none'
    cadastro.style.transition = '300ms top linear'
    cadastro.style.top = '-600px'
}

function irParaCadastro() {
    login.style.transition = '300ms top linear'
    login.style.top = '-600px'
    cadastro.style.transition = '300ms top linear'
    cadastro.style.top = '150px'
}