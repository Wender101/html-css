function tempoRestante() {
    var one_day = 1000 * 60 * 60 * 24
    var present_date = new Date();
    var diaX = new Date(present_date.getFullYear(), 7, 8)

    if (present_date.getMonth() == 11 && present_date.getdate() > 25) diaX.setFullYear(diaX.getFullYear() + 1)

    var Result = Math.round(diaX.getTime() - present_date.getTime()) / (one_day);
    var Final_Result = Result.toFixed(0);

    
    
    //! Time ---------------------------------
    const time = document.getElementById('time')
    const localDia = time.getElementsByTagName('span')[0]
    const localHora = time.getElementsByTagName('span')[1]
    const localMin = time.getElementsByTagName('span')[2]
    const localSeg = time.getElementsByTagName('span')[3]
    localDia.innerText = Final_Result
    
    const hrTotal = 23
    const minTotal = 60
    const segTotal = 60
    setInterval(() => {
        let timeNow = new Date()
        let hora = hrTotal - timeNow.getHours()
        let min = minTotal - timeNow.getMinutes()
        let seg = segTotal - timeNow.getSeconds()

        if(hora < 10) {
            localHora.innerText = '0' + hora
        } else {
            localHora.innerText = hora
        }

        if(min < 10) {
            localMin.innerText = ':0' + min
        } else {
            localMin.innerText = ':' + min
        }

        if(seg < 10) {
            localSeg.innerText = ':0' + seg
        } else {
            localSeg.innerText = ':' + seg
        }
        
    }, 100)

} tempoRestante()

//! Vai adicionar um fundo ao menu, quando rola o scroll
window.addEventListener("scroll", (event) => {
	let scroll = this.scrollY;
	const nav = document.querySelector('nav')

	if(scroll < 30) {
		nav.id = 'semFundo'

	} else {
		nav.id = 'comFundo'
	}
})

let at = false
function abrirMenu() {
    const menu = document.getElementById('menu')
    const nav = document.querySelector('nav')
    const sombra = document.getElementById('sombra')
    menu.style.display = 'none'
    nav.style.display = 'block'
    sombra.style.display = 'block'
    at = true
}

function fecharMenu() {
    const menu = document.getElementById('menu')
    const nav = document.querySelector('nav')
    const sombra = document.getElementById('sombra')
    menu.style.display = 'block'
    nav.style.display = 'none'
    sombra.style.display = 'none'
    at = false
}

setInterval(() => {
    let tamanhoTela = document.defaultView.innerWidth
    if(tamanhoTela > 480) {
        const nav = document.querySelector('nav')
        nav.style.display = 'block'
    } else {
        if(at == false) {
            fecharMenu()
        } 
    }
}, 10)