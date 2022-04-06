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
