const cadastro1 = localStorage.getItem('cadastro');
const cadastro2 = JSON.parse(cadastro1);

const salvar = []
for(let c = 0; c < cadastro2.length; c++) {
    salvar.push(cadastro2[c])
}


function fazerLogin() {
    const nome = document.querySelector('#nome').value
    const email = document.querySelector('#email').value
    const senha = document.querySelector('#senha').value
    const cadastro1 = localStorage.getItem('cadastro');
    const btnLembrar = document.getElementById('lembrar').value
    const cadastro2 = JSON.parse(cadastro1);

    if(nome.length > 0 && email.length > 0) {
        if(senha.length > 7) {
            // Vai checar se esse amail já foi cadastrado
            let a = false
            for(let c = 0; c < salvar.length; c++) {
                if(cadastro2[c].Email == email) {
                    a = true
                }
            }

            setTimeout(() => {
                if (a == false) {
                    const salvarCadastro = {
                        Nome: nome,
                        Email: email,
                        Senha: senha,
                        lembrar: btnLembrar
                    }
                
                    salvar.push(salvarCadastro)
                
                    var cadastroJSON = JSON.stringify(salvar);
                    localStorage.setItem('cadastro', cadastroJSON);

                } else {
                    window.alert('Este email já está cadastrado')
                }
            }, 100)
            
        } else {
            window.alert('A senha tem que ter no minimo 8 caracteres')
        }

    } else {
        window.alert('Preencha todos os campos')
    }
}