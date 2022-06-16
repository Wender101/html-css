const cadastro1 = localStorage.getItem('cadastro');
const cadastro2 = JSON.parse(cadastro1);

const salvar = []
Login = (nome, email, senha, lembrar) => {
    const salvarCadastro = {
        Nome: nome,
        Email: email,
        Senha: senha,
        lembrar: lembrar
    }

    salvar.push(salvarCadastro)

    console.log(salvar);

    var cadastroJSON = JSON.stringify(salvar);
    localStorage.setItem('cadastro', cadastroJSON);
}

// Vai ver se o usuario quer lembrar a senha
let btnLembrar = 'off'
function lembrar() {
    btnLembrar = 'on'
}

function fazerLogin() {
    const nome = document.querySelector('#nome').value
    const email = document.querySelector('#email').value
    const senha = document.querySelector('#senha').value

    if(nome.length > 0 && email.length > 0) {
        if(senha.length > 7) {
            // Vai checar se esse amail já foi cadastrado
            for(let c = 0; c < cadastro1.length; c++) {
            if(cadastro2[c].Email != email) {
                Login(nome, email, senha, btnLembrar)

            } else {
                alert('Você já tem uma conta com esse email!')
                return;
            }
        }

        } else {
            window.alert('A senha tem que ter no minimo 8 caracteres')
        }

    } else {
        window.alert('Preencha todos os campos')
    }
    
}