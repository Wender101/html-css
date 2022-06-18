// Vai pesquisar o que for escrito no input
function pesquisar() {
    const pesquisar = document.getElementById('pesquisar').value
    var pesquisaJSON = JSON.stringify(pesquisar);
    localStorage.setItem('pesquisaSalva', pesquisaJSON);
}

// Vai pesquisar a categoria que foi selecionada no menu
const ul = document.getElementById('localCategoria')
ul.addEventListener('click', (e) => {
    const el = e.target.innerText
    var pesquisaJSON = JSON.stringify(el);
    localStorage.setItem('pesquisaSalva', pesquisaJSON);
})