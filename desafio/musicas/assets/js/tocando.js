let qSegundos = 1
let segundos = 0
let time
const  fJSON1 = localStorage.getItem('ff')
const fJSON2 = JSON.parse(fJSON1)
var f = fJSON2
// Vai puxar do navegador qual foi a musica escolhida
function qualMusica() {
    
    let musica = document.getElementById('musica')
    let musicaAtual = document.createElement('img')
    let audioAtual = document.createElement('audio')
    
    function criaMusica(a) {
        musicaAtual.src = 'assets/img/' + a + '.jpeg'
        audioAtual.src = 'assets/audios/music' + a + '.mpeg'
        musica.appendChild(musicaAtual)
        musica.appendChild(audioAtual)
        console.log(a);
        f += 1

        // Vai dar um time as musicas
        if(a == 0) {
            time = 210
        
        } else if(a == 1) {
            time = 134
        
        } else if(a == 2) {
            time = 203
        
        } else if(a == 3) {
            time = 210

        } else if(a == 4) {
            time = 201
            
        } else if(a == 5) {
            time = 125
            
        } else if(a == 6) {
            time = 148
            
        } else if(a == 7) {
            time = 140
            
        } else if(a == 8) {
            time = 153
            
        } else if(a == 9) {
            time = 70
            
        } else if(a == 10) {
            time = 212
            
        } else if(a == 11) {
            time = 210
            
        } else if(a == 12) {
            time = 238
            
        } else if(a == 13) {
            time = 118
            
        }
    }
    criaMusica(fJSON2)
    let input = document.getElementById('inputDentro')
    let t = time * 6.6
    //Inicio
    function iniciaRelogio() {
        setInterval(function() {
            segundos += qSegundos
            input.style.width = segundos + '%'

            if(segundos == 100) {
                input.style.borderRadius = '10px'
                segundos = 0
                criaMusica(f)
                clicar()
            }
        }, t)

    }
    iniciaRelogio()
}
qualMusica()


let pauseIcon = document.getElementById('pause')
var playNow = false
function pausar() {
    if(playNow == false) {
        playNow = true
        clicar(playNow)
        
    } else {
        playNow = false
        clicar(playNow)
    }
}

function clicar(pausarOuNao = false) {
    let audio = document.querySelector('audio')
    if(pausarOuNao == false) {
        audio.play()
        qSegundos = 1
        pauseIcon.style.backgroundImage = 'url(assets/img/config/Pauseicon.png)'
        
    } else if(pausarOuNao == true){
        audio.pause()
        qSegundos = 0
        pauseIcon.style.backgroundImage = 'url(assets/img/config/dispause.png)'
    }
}
clicar()

function voltar() {
    // Caso esteja pausado quando o indivuo apertar em vlt ele vai despausar
    clicar()
    playNow = false

    if(f > 1) {
        f -= 2
        segundos = 99
    } else {
        f = 13
        segundos = 99
    }
}

function proxima() {
    // Caso esteja pausado quando o indivuo apertar em proxima ele vai despausar
    clicar()
    playNow = false

    if(f == 14) {
        f = 0
        segundos = 99
    } else {
        segundos = 99
    }
}


