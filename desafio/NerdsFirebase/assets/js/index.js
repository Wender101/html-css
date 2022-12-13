function tempoRestante() {
    var one_day = 1000 * 60 * 60 * 24
    var present_date = new Date();
    var diaX = new Date(present_date.getFullYear(), 12, 2)
    
    if (present_date.getMonth() == 12 && present_date.getdate() > 0) diaX.setFullYear(diaX.getFullYear() + 1)
    
    var Result = Math.round(diaX.getTime() - present_date.getTime()) / (one_day)
    var Final_Result = Result.toFixed(0)
    
    const time = document.getElementById('time')
    const localDia = time.getElementsByTagName('span')[0]
    const localHora = time.getElementsByTagName('span')[1]
    const localMin = time.getElementsByTagName('span')[2]
    const localSeg = time.getElementsByTagName('span')[3]

    const hrTotal = 23
    const minTotal = 60
    const segTotal = 60

    setInterval(() => {
        let timeNow = new Date()
        let hora = hrTotal - timeNow.getHours()
        let min = minTotal - timeNow.getMinutes()
        let seg = segTotal - timeNow.getSeconds()

        if(hora < 10) {
            localHora.innerHTML = `0${hora} <p>Horas</p>`
        } else {
            localHora.innerHTML = `${hora} <p>Horas</p>`
        }

        if(min < 10) {
            localMin.innerHTML = `:0${min} <p>Minutos</p>`
        } else {
            localMin.innerHTML = `:${min} <p>Minutos</p>`
        }

        if(seg < 10) {
            localSeg.innerHTML = `:0${seg} <p>Segundos</p>`
        } else {
            localSeg.innerHTML = `:${seg} <p>Segundos</p>`
        }
        


        const lTime = document.getElementById('lTime')
        if(Final_Result < 10 && Final_Result > 0) {
            localDia.innerHTML = `0${Final_Result} <p>Dias</p>`
            lTime.className = ''
    
        } else if(Final_Result < 0) {
            localDia.innerHTML = '00 <p>Dias</p>'
            localHora.innerHTML = '00 <p>Horas</p>'
            localMin.innerHTML = '00 <p>Minutos</p>'
            localSeg.innerHTML = '00 <p>Segundos</p>'

            lTime.className = 'lTime'
    
        } else {
            localDia.innerHTML = `${Final_Result} <p>Dias</p>`
            lTime.className = ''
        }

    }, 100)

} tempoRestante()

//! Vai trocar os popups de acordo com a data
let data = new Date()
let mes = data.getMonth() + 1
let dia = data.getDate()

console.log(mes, dia);

let infEventos =  document.getElementById('infEventos')
let imgEventos =  document.getElementById('imgEventos')

if(mes == 9 && dia >= 9 && dia <= 15) {
    ativarPopUp('assets/img/site/diaDasCrianças.gif')
}

function ativarPopUp(url) {
    imgEventos.src = url
    
    //! Vai ativar o popup
    setTimeout(() => {
        infEventos.style.top = '0px'
        document.querySelector('html').style.overflow = 'hidden'
    }, 1000);   
}

//! Vai fechar o popup
function fecharPopUp() {
    infEventos.style.top = '110vh'
    document.querySelector('html').style.overflow = 'auto'
}