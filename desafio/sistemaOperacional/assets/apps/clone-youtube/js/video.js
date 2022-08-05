// Vai alterar a foto do canal pra a escolhida
function exibirCanal() {
    const canal1 = localStorage.getItem('srcCanal')
    const canal2 = JSON.parse(canal1)
    
    let localUser = document.getElementById('localUser')
    localUser.src = canal2
    
} exibirCanal()

// Funcionalidades do menu
function abrirMenu() {
    let barraLateral = document.getElementById('barra-lateral')
    let fundo = document.getElementById('fundo')
    
    if(barraLateral.style.display == 'block') {
        barraLateral.style.display = 'none'
        fundo.style.display = 'none'
        
    } else {
        barraLateral.style.display = 'block'
        fundo.style.display = 'block'
    }
}

// Vai:
// fechar o menu
// mover o 'nav' pro lado e a setinha do nav
// e exibir o fundo

function fecharFundo() {
    let barraLateral = document.getElementById('barra-lateral')
    let fundo = document.getElementById('fundo')
    
    if(barraLateral.style.display == 'block') {
        barraLateral.style.display = 'none'
        fundo.style.display = 'none'
        
    } else {
        barraLateral.style.display = 'block'
        fundo.style.display = 'block'
    }
}

function inscrever() {
    let btn = document.getElementById('inscreva')
    
    if(btn.style.background == 'red') {
        btn.style.background = '#303030'
        btn.innerText = 'INSCRITO'  
        
    } else {
        btn.style.background = 'red'
        btn.innerText = 'INSCREVER-SE'
    }
}

// função comentar
let comentNumber = 0
document.addEventListener('keypress', (e) => {
    if(e.keyCode == 13) {
        const inputComentario = document.getElementById('comentario')

        if(inputComentario.value.length > 0) {
            const sobre = document.getElementById('comentarios')
            const div = document.createElement('div')
            const img = document.createElement('img')
            const nome = document.createElement('p')
            const coment = document.createElement('p')
            const like = document.createElement('img')
            const deslike = document.createElement('img')
        
            div.className = 'coment'
            img.src = 'http://127.0.0.1:5500/img/users/User-Avatar.png'
            nome.className = 'nomeComent'
            nome.innerText = 'User006'
            coment.innerText = inputComentario.value

            like.className = 'like'
            deslike.className = 'deslike'
            like.src = '/img/videos/config/Button1.png'
            deslike.src = '/img/videos/config/Button (2).png'
            
            div.appendChild(img)
            div.appendChild(nome)
            div.appendChild(coment)
            div.appendChild(like)
            div.appendChild(deslike)
            sobre.appendChild(div)

            inputComentario.value = ''

            comentNumber++
            const resComentarios = document.getElementById('resComentarios')
            if(comentNumber == 1) {
                resComentarios.innerText = `${comentNumber} Comentario`
            } else {
                resComentarios.innerText = `${comentNumber} Comentarios`
            }

        } else {
            window.alert('Seu comentario está vazio :(')
        }
    }
})