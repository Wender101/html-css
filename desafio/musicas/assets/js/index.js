
const d1 = document.getElementById('d1')
const d2 = document.getElementById('d2')
const d3 = document.getElementById('d3')

let qAudio
function audio1() {  
    if(qAudio != 1) {
        d1.play()
        d2.pause()
        d3.pause()
        qAudio = 1
    } else {
        d1.pause()
        qAudio = 0
    }

}

function audio2() {
    if(qAudio != 2) {
        d2.play()
        d1.pause()
        d3.pause()
        qAudio = 2
        
    } else {
        d2.pause()
        qAudio = 0
    }
}

function audio3() {
    if(qAudio != 3) {
        d3.play()
        d2.pause()
        d1.pause()
        qAudio = 3
        
    } else {
        d3.pause()
        qAudio = 0
    }
}

