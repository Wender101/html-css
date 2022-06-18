 // Valor da pesquisa
 const pesquisa1 = localStorage.getItem('pesquisaSalva');
 const pesquisa2 = JSON.parse(pesquisa1);
 const valorPesquisa = pesquisa2.toLowerCase()

 // Vai mudar o titulo da pág, pro o que foi pesquisado.
 const title = document.querySelector('title')
 title.innerHTML = pesquisa2

// Vai puxar do navegador as categorias salvas
const sobre1 = localStorage.getItem('sobre');
const sobre2 = JSON.parse(sobre1);

const sobre = []

for(let c = 0; c < sobre2.length; c++) {
    sobre.push(sobre2[c])
    criarInterface(sobre2[c].)
}

function criarInterface(img, classe, desc, valor) {

}