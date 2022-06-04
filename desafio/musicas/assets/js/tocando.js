let time
const  fJSON1 = localStorage.getItem('ff')
const fJSON2 = JSON.parse(fJSON1)

// Vai puxar do navegador qual foi a musica escolhida
function qualMusica() {
    
    let musica = document.getElementById('musica')
    let musicaAtual = document.createElement('img')
    let audioAtual = document.createElement('audio')
    
    function criaMusica(a) {
        musicaAtual.src = 'assets/img/' + a + '.png'
        audioAtual.src = 'assets/audios/music' + a + '.mpeg'
        musica.appendChild(musicaAtual)
        musica.appendChild(audioAtual)
        var f = a

        if(a == 0) {
            time = 210
        
        } else if(a == 1) {
            time = 203
        
        } else if(a == 2) {
            time = 203
        
        } else if(a == 3) {
            time = 210
        }
    }
    criaMusica(fJSON2)

    let segundos = 0
    let input = document.getElementById('inputDentro')
    let t = time * 6.3
    let qSegundos = 1
    //Inicio
    function iniciaRelogio() {
        setInterval(function() {
            segundos += qSegundos
            input.style.width = segundos + '%'

            if(segundos == 100) {
                qSegundos = 0
                input.style.borderRadius = '10px'
                f = fJSON2 + 1
                segundos = 0
                qSegundos = 1
                criaMusica(f)
                clicar()
            }
        }, t)

    }
    iniciaRelogio()
}
qualMusica()

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
       
    } else if(pausarOuNao == true){
        audio.pause()
        qSegundos = 0
    }
}
clicar()



