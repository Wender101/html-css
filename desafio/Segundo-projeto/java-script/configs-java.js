    // Faz o menu aparecer e tbm sumir

 var prosseguir = document.getElementById("menu")
 var categorias = document.getElementById("categorias")

 menu.addEventListener('click', function() {

     if(categorias.style.display === "block"){
         categorias.style.display = "none";
     } else{
         categorias.style.display = "block";
     }
 });

 //---------------------------------------

    // Deixa o site escuro, ativado quando o menu é aberto

 var prosseguir = document.getElementById("menu")
 var fundo = document.getElementById("fundo-pop-up")

 menu.addEventListener('click', function() {

     if(fundo.style.display === "block"){
         fundo.style.display = "none";
     } else{
         fundo.style.display = "block";
     }
 });

 //---------------------------------------

    // Botão de fechar "X" do menu

 var body = document.getElementById("Xc")
 var categorias = document.getElementById("categorias")

 Xc.addEventListener('click', function() {

     if(categorias.style.display === "none"){
         categorias.style.display = "block";
     } else{
         categorias.style.display = "none";
     }
 });
  //---------------------------------------

  // Também faz a div categoria sumir

 var fundo = document.getElementById("fundo-pop-up")
 var categorias = document.getElementById("categorias")

 fundo.addEventListener('click', function() {

     if(categorias.style.display === "none"){
         categorias.style.display = "block";
     } else{
         categorias.style.display = "none";
     }
 });
 //---------------------------------------

   // Também faz a div fundo-pop-up sumir

   var fundo = document.getElementById("fundo-pop-up")
   var fundo = document.getElementById("fundo-pop-up")
  
   fundo.addEventListener('click', function() {
  
       if(fundo.style.display === "none"){
           fundo.style.display = "block";
       } else{
           fundo.style.display = "none";
       }
   });
 //---------------------------------------

    // Botão de fechar "X" do menu que tbm fecha o pop-up

 var body = document.getElementById("Xc")
 var fundo = document.getElementById("fundo-pop-up")

 Xc.addEventListener('click', function() {

     if(fundo.style.display === "none"){
         fundo.style.display = "block";
     } else{
         fundo.style.display = "none";
     }
 });

 //---------------------------------------

    // Faz a div fundo aparcer 

 var p1 = document.getElementById("produtos")
 var fundoinf = document.getElementById("fundo")

 p1.addEventListener('click', function() {

     if(fundoinf.style.display === "block"){
         fundoinf.style.display = "none";
     } else{
         fundoinf.style.display = "block";
     }
 });

 //---------------------------------------

    // Faz a div informe aparecer

 var p1 = document.getElementById("produtos")
 var inf = document.getElementById("informe")

 p1.addEventListener('click', function() {

     if(inf.style.display === "block"){
         inf.style.display = "none";
     } else{
         inf.style.display = "block";
     }
 });

 //---------------------------------------

    // Fecha a div fundo

 var fecharinf = document.getElementById("fecharINF")
 var fundoinf = document.getElementById("fundo")

 fecharinf.addEventListener('click', function() {

     if(fundoinf.style.display === "block"){
         fundoinf.style.display = "none";
     } else{
         fundoinf.style.display = "block";
     }
 });
//---------------------------------------

 // Faz o scroll da pag sumir ao abrir o aviso

var p1 = document.getElementById("produtos")
 var html = document.getElementById("html")

 p1.addEventListener('click', function() {

     if(html.style.overflowY === "hidden"){
         html.style.overflowX = "auto";
     } else{
         html.style.overflowY = "hidden";
     }
 });
//---------------------------------------

 // Também faz o scroll da pag sumir, ao abrir o menu

 var fundo = document.getElementById("fundo-pop-up")
 var html = document.getElementById("html")

 fundo.addEventListener('click', function() {

     if(html.style.overflowY === "hidden"){
         html.style.overflowY = "auto";
     } else{
         html.style.overflowY = "hidden";
     }
 });
//---------------------------------------

 // Faz o scroll da pag sumir, ao abrir o menu

 var prosseguir = document.getElementById("menu")
 var html = document.getElementById("html")

 menu.addEventListener('click', function() {

     if(html.style.overflowY === "hidden"){
         html.style.overflowY = "auto";
     } else{
         html.style.overflowY = "hidden";
     }
 });
//---------------------------------------

    // Fecha a div informe

 var fecharinf = document.getElementById("fecharINF")
 var inf = document.getElementById("informe")

 fecharinf.addEventListener('click', function() {

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

 //---------------------------------------