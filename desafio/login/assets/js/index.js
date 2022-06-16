const cadastro1 = localStorage.getItem('cadastro');
const cadastro2 = JSON.parse(cadastro1);

function fazerLogin() {
    const email = document.querySelector('#email').value
    const senha = document.querySelector('#senha').value

    if(email.length > 0) {

        // Vai checar se esse amail já foi cadastrado
        for(let c = 0; c < cadastro2.length; c++) {
            if(cadastro2[c].Email == email) {
                alert('Bem-Vindo')
                return

            } else {
                alert('Essa conta não está cadastrada.')
                return
            }
        }

    } else {
        window.alert('Preencha todos os campos')
    }
    
}