let btncontato = document.getElementById('btnContato');
let navcontato = document.getElementById('navContato');
let contato = document.getElementById('fale-comigo');
let fundo = document.getElementById('fundo');

//Faz a div fale-comigo e a div fundo aparecer
btncontato.addEventListener('click', function() {
    contato.style.display = 'block'
    fundo.style.display = 'block'
})

//Faz a div fale-comigo e a div fundo aparecer
navcontato.addEventListener('click', function() {
    contato.style.display = 'block'
    fundo.style.display = 'block'
})

//Faz a div fale-comigo e a div fundo sumir
fundo.addEventListener('click', function() {
    contato.style.display = 'none'
    fundo.style.display = 'none'
})

// Vai atualizar a idade sempre que passar do meu aniversario
function atualizarIdade() {
    let anoReferencia = 2022
    let idade = 17
    let data = new Date()
    let anoAtual = data.getFullYear()

    document.getElementById('idade').innerText = (anoAtual - anoReferencia) + idade
    
} atualizarIdade()