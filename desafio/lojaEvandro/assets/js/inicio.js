var pag = 0
function proximo() {
    const corpo = document.getElementById('corpo')

    if(pag > 0) {
        corpo.className = 'animCorpo'

        if(pag === 1) {
            setTimeout(() => {
                corpo.className = ''
                const inf = document.getElementById('inf')
                const p = document.createElement('p')

                p.innerText = 'Somos uma impresa de assistencia tecnica e manutenção a maquinas agriculas, também fazemos algumas vendas do mesmo'

                inf.appendChild(p)
            }, 500)
        }

        if(pag === 2) {
            setTimeout(() => {
                const inf = document.getElementById('inf')
                inf.querySelector('p').innerText = ''
                inf.querySelector('h3').innerText = 'Let’s Go!'
                const divProximo = document.getElementById('proximo')
                const a = divProximo.querySelector('a')
                a.href = '../../home.html'
                
            }, 500)
        }
    }

    // Vai trocar a cor das bolinhas
    for(let c = 0; c < 3; c++) {  
        const div = balls.getElementsByTagName('div')[c]

        if(c != pag) {
            div.style.background = 'white'
        } else {
            div.style.background = 'var(--cor2)'
        }
    }

    pag++
}

proximo()