function cadastrar() {
    let input = document.querySelector('input')
    if(input.value.length <= 0) {
        alert('Você não pode fazer um cadastro ou logar em sua conta sem informar um nome antes.')

    } else {
        login()
    }
}