let horas = new Date;
let horario = horas.getHours();
let dia = new Date;
let hoje = dia.getDay();

let lojaAberta = document.getElementById('lojaAberta');
let vaiAbrir = document.getElementById('vaiAbrir');
let FaltaParaAbrir = (24 - horario) + 8;
let Aberto = false

// Vai checar se a loja está aberta ou não
if (hoje == 1 || hoje == 2 || hoje == 3 || hoje == 4 || hoje == 5) {
    if(horario >= 8 && horario < 19) {
        Aberto = true

    } else {
        Aberto = false
    }
} else if (hoje == 6) {
    if(horario >= 8 && horario < 16) {
        Aberto = true

    } else {
        Aberto = false
    }
} else {
    Aberto = false
    
}

// Vai escrevar qual o estado da loja
if(Aberto == true) {
    lojaAberta.innerText = 'Nossa loja física está aberta neste momento'

} else {
    lojaAberta.innerText = 'Nossa loja física está fechada neste momento'
    vaiAbrir.innerText = `Vamos Abrir daqui ${FaltaParaAbrir} horas.`
}
 