//? Carregar noticias criadas
function carregarNoticiasCriadas() {
    let suasNoticias = document.querySelector('#suasNoticias')
    suasNoticias.innerHTML = ''

    db.collection('UsersMigueley').onSnapshot((data) => {
        data.docs.map(function(valor) {
            let UsersMigueley = valor.data()
            
            if(UsersMigueley.EmailUser == email) {

                for (let c = 0; c < UsersMigueley.Noticias.length; c++) {
                    let div = document.createElement('div')
                    let img = document.createElement('img')
                    let div2 = document.createElement('div')
                    let h2 = document.createElement('h2')

                    div.className = 'noticiasCriadasPeloUser'

                    img.src = UsersMigueley.Noticias[c].Img
                    h2.innerText = UsersMigueley.Noticias[c].Titulo

                    div.appendChild(img)
                    div2.appendChild(h2)
                    div.appendChild(div2)
                    suasNoticias.appendChild(div)

                    //? Função de click
                    div.addEventListener('click', () => {
                        // window.location.href = `Home.html?=${encodeURIComponent(UsersMigueley.Noticias[c].Texto.toLocaleLowerCase())}`
                    })
                }
            }
        })
    })
} carregarNoticiasCriadas()

//? Criar noticias
function abrirAbaCriarNoticia() {
    let abaCriarNoticia = document.getElementById('abaCriarNoticia')
    abaCriarNoticia.style.display = 'block'
}

let arquivo

document.querySelector('#enviarDoc').addEventListener('change', (event) => {
    arquivo = event.target.files[0]
    
    let imgNoticia = document.getElementById('imgNoticia')
    let enviarDoc = document.querySelector('#enviarDoc')
    imgNoticia.src = arquivo

    if (arquivo) {
        const reader = new FileReader()

        reader.addEventListener('load', function() {
            imgNoticia.src = reader.result // Exibir a imagem no elemento <img>
        })

        reader.readAsDataURL(arquivo) // Ler o arquivo como URL de dados
    } else {
        imgNoticia.src = 'assets/imgs/imgs/7510961.jpg'
    }
})

let podePostar = false
function checarPostar() {
    let tituloCriarNoticia = document.querySelector('#tituloCriarNoticia')
    let textoCriarNoticia = document.querySelector('#textoCriarNoticia')
    let enviarDoc = document.querySelector('#enviarDoc')

    if(tituloCriarNoticia.value.length > 0 && textoCriarNoticia.value.length > 0 && enviarDoc.value.length > 0) {
        document.querySelector('#postarMateria').style.background = '#4992ff'
        podePostar = true

    } else {
        document.querySelector('#postarMateria').style.background = '#616161'
    }
}

function cacelarPostagem() {
    document.querySelector('#tituloCriarNoticia').value = ''
    document.querySelector('#textoCriarNoticia').value = ''
    document.querySelector('#enviarDoc').value = ''
    document.getElementById('abaCriarNoticia').style.display = 'none'
    document.querySelector('#postarMateria').style.background = '#616161'
    document.getElementById('imgNoticia').src = 'assets/imgs/imgs/7510961.jpg'
    podePostar = false
}

function postarMateria() {
    if(podePostar == true) {
        let feito = false

        db.collection('UsersMigueley').onSnapshot((data) => {
            data.docs.map(function(valor) {
                let UsersMigueley = valor.data()

                if(UsersMigueley.EmailUser == email && feito == false) {
                    feito = true
                    var uploadTask = storage.ref().child('Migueley').child(arquivo.name).put(arquivo)

                    uploadTask.on('Migueley', (snapshot) => {document.querySelector('#carregando').style.display = 'flex'}, (error) => {document.querySelector('#carregando').style.display = 'none', alert('Algo deu errado: ' + error)}, 
                    () => {
                        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                            let arrayNoticias = UsersMigueley.Noticias

                            let DataAtual = new Date()
                            let dia = DataAtual.getDate()
                            let mes = DataAtual.getMonth()
                            let ano = DataAtual.getFullYear()

                            let NoticiaCriada = {
                                Titulo: document.querySelector('#tituloCriarNoticia').value,
                                Texto: document.querySelector('#textoCriarNoticia').value,
                                Img: downloadURL,
                                Data: `${mes}${dia}${ano}`,
                                EstadoNoticia: 'Pendente'
                            }

                            arrayNoticias.push(NoticiaCriada)
                            db.collection('UsersMigueley').doc(valor.id).update({Noticias: arrayNoticias})

                            setTimeout(() => {
                                document.querySelector('#carregando').style.display = 'none'
                                cacelarPostagem()
                            }, 1000)
                        })
                    })
                }
            })
        })
    }
}