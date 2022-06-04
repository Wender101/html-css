// Vai puxar do navegador qual foi a musica escolhida
function qualMusica() {
    const  fJSON1 = localStorage.getItem('ff');
    const fJSON2 = JSON.parse(fJSON1);
    
    let musica = document.getElementById('musica')
    let musicaAtual = document.createElement('img')
    let audioAtual = document.createElement('audio')
    let input = document.createElement('input')
    let segundos = 0
    let time
    input.type = 'range'
    input.value = 0
    
    function criaMusica(a) {
        musicaAtual.src = 'assets/img/' + a + '.png'
        audioAtual.src = 'assets/audios/music' + a + '.mpeg'
        musica.appendChild(musicaAtual)
        musica.appendChild(audioAtual)
        musica.appendChild(input)
        
        function clicar(pausarOuNao = false) {
            if(pausarOuNao == false) {
                audioAtual.play()
            } else {
                audioAtual.pause()
            }
        }
        clicar()

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

    let t = time * 10
    setInterval(function() {
        segundos++
        input.value = segundos
    }, t)
}
qualMusica()

var playNow = false
function pausar() {
    if(playNow == false) {
        playNow = true
        clicar(true)

    } else {
        clicar(false)
        playNow = false
    }
}



