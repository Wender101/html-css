//? Vai gerar o codigo para o user
var respostaFinal = ''
function gerarCodigo(max = 0) {
    const letras = 'aabcdefghijklmnopqrstuvwxyz' 
    const letrasMaiuculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const simbolos = '!@#$%¨&*()_+=-'
    const numeros = '1234567890'

    for(let c = 0; c < max; c++) {
        if(c < max) {
            let num1 = Math.floor(Math.random() * 14) 
            let resSimbolo = simbolos.charAt(num1) 
            respostaFinal += resSimbolo
        } 

        if(c < max) {
            let num1 = Math.floor(Math.random() * 26) 
            let resLetrasMinusculas = letras.charAt(num1) 
            respostaFinal += resLetrasMinusculas
        } 

        if(c < max) {
            let num3 = Math.floor(Math.random() * 10) 
            let resNumeros = numeros.charAt(num3)
            respostaFinal += resNumeros

        }

        if(c < max) {
            let num2 = Math.floor(Math.random() * 26) 
            let resletrasMaiuculas = letrasMaiuculas.charAt(num2)
            respostaFinal += resletrasMaiuculas
        }
    }

    document.getElementById('codigo').innerText = respostaFinal
} gerarCodigo(5)

//? Vai checar se os inputs foram respondidos e destravar o btn
let prontoPress = false
setInterval(() => {
    const inputNome = document.getElementById('inputNome').value
    const inputRecado = document.getElementById('inputRecado').value
    const imgUser = document.getElementById('imgUser').src

    if(inputNome.length > 0 && inputRecado.length > 0) {
        const btnPronto = document.getElementById('btnPronto')
        btnPronto.innerText = 'Pronto'
        btnPronto.style.background = '#8ddce2'
        btnPronto.style.color = '#fff'

        btnPronto.addEventListener('click', () => {
            if(prontoPress == false) {
                prontoPress = true
                cadastrarUSer(imgUser, document.getElementById('inputNome').value, document.getElementById('inputRecado').value, email, respostaFinal)
            }
        })
    }
}, 100)

function cadastrarUSer(img, nome, recado, emailUser, codigo) {

    const objFinal = {
        Sobre: {
            FotoPerfil: img,
            Nome: nome,
            Recado: recado,
            Email: emailUser,
            Codigo: codigo,
        },

        Contatos: []
    }

    
    db.collection('SobreUser').add(objFinal)
}

db.collection('SobreUser').onSnapshot((data) => {
    data.docs.map(function(val) {
    if(prontoPress == true) {
        setTimeout(() => {
            //? Vai mandar o user para o home
            const link = location.origin + location.pathname
            window.location.href = link.replace('Personalizar.html', '') + 'home.html'
        }, 2000)
        }
    })
})
