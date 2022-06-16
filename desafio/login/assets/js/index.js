const cadastro1 = localStorage.getItem('cadastro');
const cadastro2 = JSON.parse(cadastro1);

function fazerLogin() {
    const email = document.querySelector('#email').value
    const senha = document.querySelector('#senha').value

    if(email.length > 0) {
        try {
            // Vai checar se esse amail já foi cadastrado
            for(let c = 0; c < cadastro2.length; c++) {
                if(cadastro2[c].Email == email && cadastro2[c].Senha == senha) {
                    alert('Bem-Vindo')
                    return
    
                }
            } 

            if(cadastro2[c].Email != email || cadastro2[c].Senha != senha) {
                alert('Senha ou email estão incorretos!')
                return

            } else {
                alert('Essa conta não está cadastrada.')
                return
            }

        } catch {
            alert('Essa conta não está cadastrada.')
        }

    } else {
        alert('Preencha todos os campos')
    }
    
}