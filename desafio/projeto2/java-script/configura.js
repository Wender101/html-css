//Ao clicar no botão menu, o menu 'categoria' vai ser aberto
var btmenu = window.document.getElementById('menu')
var categorias = window.document.getElementById('categorias')

btmenu.addEventListener('click', function() {
    
    if(categorias.style.display === 'block') {
        categorias.style.display = 'none'
    } 
    else {
        categorias.style.display = 'block'
    }
})

//Ao abrir o menu, a div 'subir' vai sumir
var btmenu = window.document.getElementById('menu')
var subir = window.document.getElementById('subir')

btmenu.addEventListener('click', function() {
    
    if(subir.style.display === 'none') {
        subir.style.display = 'block'
    } 
    else {
        subir.style.display = 'none'
    }
})

//Ao fechar o menu, a div 'subir' vai aparecer
var Xc = window.document.getElementById('Xc')
var subir = window.document.getElementById('subir')

Xc.addEventListener('click', function() {
    
    if(subir.style.display === 'none') {
        subir.style.display = 'block'
    } 
    else {
        subir.style.display = 'none'
    }
})

//Ao fechar o menu, a div 'subir' vai aparecer
var fundo = window.document.getElementById('fundo')
var subir = window.document.getElementById('subir')

fundo.addEventListener('click', function() {
    
    if(subir.style.display === 'none') {
        subir.style.display = 'block'
    } 
    else {
        subir.style.display = 'none'
    }
})

//Ao clicar no botão menu, a div 'fundo' sera aberto
var btmenu = window.document.getElementById('menu')
var fundo = window.document.getElementById('fundo')

btmenu.addEventListener('click', function() {

    if(fundo.style.display === 'block') {
        fundo.style.display = 'none'
    }

    else {
        fundo.style.display = 'block'
    }
})

//Ao clicar no batão na div 'fundo', o menu vai sumir
var fundo = window.document.getElementById('fundo')
var categorias = window.document.getElementById('categorias')

fundo.addEventListener('click', function() {
    
    if(categorias.style.display === 'block') {
        categorias.style.display = 'none'
    } 
    else {
        categorias.style.display = 'block'
    }
})

//Ao clicar na div 'fundo', a div 'fundo' vai sumir
var fundo = window.document.getElementById('fundo')

fundo.addEventListener('click', function() {

    if(fundo.style.display === 'block') {
        fundo.style.display = 'none'
    }

    else {
        fundo.style.display = 'block'
    }
})

//Quando o menu for aberto, o scroll da pág vai sumir
var menu = window.document.getElementById('menu')
var html = window.document.getElementById('html')

menu.addEventListener('click', function() {

    if(html.style.overflowY === 'hidden') {
        html.style.overflowY = 'scroll'
    }

    else {
        html.style.overflowY = 'hidden'
    }
})

//Quando a div 'categorias for fechada, o scroll da pág vai aparecer'
var fundo = window.document.getElementById('fundo')
var html = window.document.getElementById('html')

fundo.addEventListener('click', function() {
    
    if(html.style.overflowY === 'hidden') {
        html.style.overflowY = 'scroll'
    } 
    else {
        html.style.overflowY = 'hidden'
    }
})

//Ao clicar no 'Xc', o scroll da pág sumirá
var Xc = window.document.getElementById('Xc')
var html = window.document.getElementById('html')

Xc.addEventListener('click', function() {

    if(html.style.overflowY === 'scroll'){
        html.style.overflowY = 'hidden'
    }
    else {
        html.style.overflowY = 'scroll'
    }
})

//Ao clicar no 'Xc', a div 'categorias' sumirá
var Xc = window.document.getElementById('Xc')
var categorias = window.document.getElementById('categorias')

Xc.addEventListener('click', function() {

    if(categorias.style.display === 'block'){
        categorias.style.display = 'none'
    }
    else {
        categorias.style.display = 'block'
    }
})

//Ao clicar no 'Xc', a div 'fundo' sumirá
var Xc = window.document.getElementById('Xc')
var fundo = window.document.getElementById('fundo')

Xc.addEventListener('click', function() {

    if(fundo.style.display === 'block'){
        fundo.style.display = 'none'
    }
    else {
        fundo.style.display = 'block'
    }
})

//Faz a div 'informe aparecer'

var main = document.querySelector("main")
var inf = document.getElementById("informe")

main.addEventListener('click', function() {

    if(inf.style.display === "block"){
        inf.style.display = "none";
    } else{
        inf.style.display = "block";
    }
});

//Faz a div 'informe' sumir

var Finf = document.getElementById("fecharINF")
var inf = document.getElementById("informe")

Finf.addEventListener('click', function() {

    if(inf.style.display === "block"){
        inf.style.display = "none";
    } else{
        inf.style.display = "block";
    }
});

//---------------------------------------
// Scroll suave 

const menuLinks = document.querySelectorAll('.menu a[href^="#"]');

function getDistanceFromTheTop(element) {
const id = element.getAttribute("href");
return document.querySelector(id).offsetTop;
}

// function nativeScroll(distanceFromTheTop) {
//   window.scroll({
//     top: distanceFromTheTop,
//     behavior: "smooth",
//   });
// }

function scrollToSection(event) {
event.preventDefault();
const distanceFromTheTop = getDistanceFromTheTop(event.target) - 90;
smoothScrollTo(0, distanceFromTheTop);
}

menuLinks.forEach((link) => {
link.addEventListener("click", scrollToSection);
});

function smoothScrollTo(endX, endY, duration) {
const startX = window.scrollX || window.pageXOffset;
const startY = window.scrollY || window.pageYOffset;
const distanceX = endX - startX;
const distanceY = endY - startY;
const startTime = new Date().getTime();

duration = typeof duration !== "undefined" ? duration : 700;

const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1)
    return (distance / 2) * time * time * time * time + from;
    return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
};

const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
    clearInterval(timer);
    }
    window.scroll(newX, newY);
}, 1000 / 60);
}