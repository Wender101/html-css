// Mostra um resulmo sobre as tecnologias estutadas
var html5 = document.querySelector('li#html')
var css = document.querySelector('li#css')
var js = document.querySelector('li#js')
var react = document.querySelector('li#react')
var sql = document.querySelector('li#sql')

var resulmo = document.querySelector('div#resulmo')
var h1 = document.querySelector('h1#h1-resulmo')
var p = document.querySelector('p#p-resulmo')

html5.addEventListener('click', function() {
    resulmo.style.display = 'block'
    h1.innerHTML = 'HTML5'
    p.innerHTML = 'HTML é a sigla de HyperText Markup Language, expressão inglesa que significa "Linguagem de Marcação de Hipertexto". Consiste em uma linguagem de marcação utilizada para produção de páginas na web, que permite a criação de documentos que podem ser lidos em praticamente qualquer tipo de computador e transmitidos pela internet.'
})

css.addEventListener('click', function() {
    resulmo.style.display = 'block'
    h1.innerHTML = 'CSS3'
    p.innerHTML = 'CSS (Cascading Style Sheets) são folhas de estilo em cascata. O CSS é uma linguagem que complementa e formata o HTML (HyperText Markup Language, a Linguagem de Marcação de Hipertexto) organizando melhor as linhas e adicionando novas possibilidades ao código.'
})

js.addEventListener('click', function() {
    resulmo.style.display = 'block'
    h1.innerHTML = 'Js'
    p.innerHTML = 'O JS ou JavaScript é uma linguagem de programação de alto-nível, criada no meio da década de 90, mais precisamente em 1996 pelo lendário programador Brendan Eich que, além de criar o JavaScript, foi também um dos fundadores da Mozilla Corporation.'
})

react.addEventListener('click', function() {
    resulmo.style.display = 'block'
    h1.innerHTML = 'React'
    p.innerHTML = 'ReactJs ou React é uma biblioteca JavaScript usada para construir interfaces de usuário, permitindo a elaboração de aplicativos baseados em JavaScript. Os aplicativos React são executados no navegador e não precisam esperar por uma resposta do servidor.'
})

//------------------------------------------------------------------------------------

// Faz o menu aparecer quando clicar no 'botão do menu' e também faz o scroll da pag sumir 

var btnMenu = document.querySelector('button#btn-menu')
var FaleComigo = document.querySelector('div#fale-comigo')
var html = document.querySelector('html')

btnMenu.addEventListener('click', function() {
    if(FaleComigo.style.display === 'block') {
        FaleComigo.style.display = 'none'
    } else {
        FaleComigo.style.display = 'block'
    }

    if(fundo.style.display === 'block') {
        fundo.style.display = 'none'
    } else {
        fundo.style.display = 'block'
    }

    if(html.style.overflow === 'hidden') {
        html.style.overflow = 'auto'
    } else {
        html.style.overflow = 'hidden'
    }
})

// Faz a div 'fale-comigo' e a div 'fundo' sumir ao clicar e também faz o scroll da pag aparecer 

var fundo = document.querySelector('div#fundo')

fundo.addEventListener('click', function() {
    if(FaleComigo.style.display === 'none') {
        FaleComigo.style.display = 'block'
    } else {
        FaleComigo.style.display = 'none'
    }

    if(fundo.style.display === 'none') {
        fundo.style.display = 'block'
    } else {
        fundo.style.display = 'none'
    }

    if(html.style.overflow === 'auto') {
        html.style.overflow = 'hidden'
    } else {
        html.style.overflow = 'auto'
    }
})