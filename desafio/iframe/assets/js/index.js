
let historico = document.getElementById('historico')
let input = document.querySelector('input')
const pesquisa1 = localStorage.getItem('pesquisa');
const pesquisa2 = JSON.parse(pesquisa1);

let ja = false
function abrirHistorico() {
    if(ja == false) {
        for(let c = 0; c < pesquisa2.length; c++) {
            let p = document.createElement('p')
            p.innerText = pesquisa2[c]
            historico.appendChild(p)
        }
        
        ja = true
    }
    historico.style.display = 'block'
}

if(pesquisa2.length > 0) {
    var salvarPesquisa = pesquisa2

} else {
    var salvarPesquisa = []
}

function enviar() {
    let iframe = document.querySelector('iframe')
    iframe.src = input.value
    historico.style.display = 'none'
    
    
    // Vai salvar a pesquisa
    if(salvarPesquisa.length < 4) {
        let p = document.createElement('p')
        p.innerText = input.value
        historico.appendChild(p)

        console.log(salvarPesquisa);
        salvarPesquisa.push(input.value)
        var pesquisaJSON = JSON.stringify(salvarPesquisa);
        localStorage.setItem('pesquisa', pesquisaJSON);

    } else {
        console.log('a');
    }
}