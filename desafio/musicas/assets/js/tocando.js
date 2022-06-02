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
    
    if(fJSON2 == 0) {
        musicaAtual.src = 'assets/img/Photo 6.png'
        audioAtual.src = 'assets/audios/music1.mpeg'
        time = 210
    
    } else if(fJSON2 == 1) {
        musicaAtual.src = 'assets/img/Photo 7.png'
        audioAtual.src = 'assets/audios/music2.mpeg'
    
    } else if(fJSON2 == 2) {
        musicaAtual.src = 'assets/img/download.jpg'
        audioAtual.src = 'assets/audios/music3.mpeg'
    
    } else if(fJSON2 == 3) {
        musicaAtual.src = 'assets/img/4.jpg'
        audioAtual.src = 'assets/audios/music4.mpeg'
    }

    let t = time * 10
    setInterval(function() {
        segundos++
        input.value = segundos
    }, t)

    musica.appendChild(musicaAtual)
    musica.appendChild(audioAtual)
    musica.appendChild(input)
}
qualMusica()

