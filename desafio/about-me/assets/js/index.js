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