function ligando() {
    const title = document.querySelector('title')
    title.innerText = 'Inicializando'
    let timeRandom1 = Math.random() * 2000 + 1000
    let timeRandom2 = Math.random() * 6000 + 3000
    setTimeout(() => {
        const localLogo = document.getElementById('localLogo')
        localLogo.style.display = 'block'
        
        setTimeout(() => {
            const telaIniciando = document.getElementById('telaIniciando')
            telaIniciando.style.display = 'none'
            start()
        }, timeRandom2) // 6000
    }, timeRandom1) // 2000

} ligando()

function start() {
    const audioligado = new Audio('assets/sons/ligando.mpeg')
    audioligado.play()

    const title = document.querySelector('title')
    title.innerText = 'Tela de Bloqueio'

    function exibirData() {
        // Horas
    const tempo = new Date()
    let hr = tempo.getHours()
    if(hr < 10) hr = `0${hr}`

    let min = tempo.getMinutes()
    if(min < 10) min = `0${min}`

    const horas = document.getElementById('horas')
    horas.innerText = `${hr}:${min} `

    const horasBarra = document.getElementById('horasBarra')
    horasBarra.innerText = `${hr}:${min} `

    // Data
    let diaSemana = tempo.getDay()

    if(diaSemana == 0) {
        diaSemana = 'domingo'
    } else if(diaSemana == 1) {
        diaSemana = 'segunda-feira'
    } else if(diaSemana == 2) {
    diaSemana = 'terça-feira'
    } else if(diaSemana == 3) {
        diaSemana = 'quarta-feira'
    } else if(diaSemana == 4) {
        diaSemana = 'quinta-feira'
    } else if(diaSemana == 5) {
        diaSemana = 'sexta-feira'
    } else if(diaSemana == 6) {
        diaSemana = 'sabado'
    }

    let hoje = tempo.getDate()

    let mes = tempo.getMonth()

    if(mes == 0) {
        mes = 'janeiro'
    } else if(mes == 1) {
        mes = 'fevereiro'
    } else if(mes == 2) {
        mes = 'março'
    } else if(mes == 3) {
        mes = 'abril'
    } else if(mes == 4) {
        mes = 'maio'
    } else if(mes == 5) {
        mes = 'junho'
    } else if(mes == 6) {
        mes = 'julho'
    } else if(mes == 7) {
        mes = 'agosto'
    } else if(mes == 8) {
        mes = 'setembro'
    } else if(mes == 9) {
        mes = 'outubro'
    } else if(mes == 10) {
        mes = 'novembro'
    } else if(mes == 11) {
        mes = 'dezembro'
    }

    const data = document.getElementById('data')
    data.innerText = `${diaSemana}, ${hoje} de ${mes}`
    }

    setInterval(() => {
        exibirData()
    }, 100)

    let log = false

    document.addEventListener('click', () => {
        if(log == false) {
            logar()
            log = true
        }
    })

    document.addEventListener('keydown', (e) => {
        if(e.keyCode == 13) {
            if(log == false) {
                logar()
                log = true
            }
        }
    })

    function logar() {
        const title = document.querySelector('title')
        title.innerText = 'Bem-vindo(a)'
        const inf = document.getElementById('inf')
        inf.style.transition = '300ms bottom linear'
        inf.style.bottom = '120vh'

        setTimeout(() => {
            const logar = document.getElementById('logar')
            const filter = document.getElementById('filter')
            logar.style.transition = '300ms filter linear'
            logar.style.filter = 'opacity(100%)'
            filter.style.transition = '1s filter linear'
            filter.style.filter = 'blur(6px)'
        }, 1000)

        let timeIniciar = Math.floor(Math.random() * 5000)

        if(timeIniciar < 2000) timeIniciar = 2000

        setTimeout(() => {

            const logar = document.getElementById('logar')
            const filter = document.getElementById('filter')
            logar.style.transition = '300ms filter linear'
            logar.style.filter = 'opacity(0%)'
            filter.style.transition = '300ms filter linear'
            filter.style.filter = 'opacity(0%)'

            const telaDeBloqueio = document.getElementById('telaDeBloqueio')
            telaDeBloqueio.style.display = 'none'

            const areaDeTrabalho = document.getElementById('areaDeTrabalho')
            areaDeTrabalho.style.display = 'block'

            const title = document.querySelector('title')
            title.innerText = 'Aréa de Trabalho'
        }, timeIniciar)
    }

}
