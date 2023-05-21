for(let c = 0; c  < 10; c++) {
    try {
        let opcoesMenu = document.getElementsByClassName('opcoesMenu')[c]
        //? Ao clicar no menu
        opcoesMenu.addEventListener('click', () => {
            for(let c = 0; c  < 10; c++) {
                try {
                    let opcoesMenu = document.getElementsByClassName('opcoesMenu')[c]
                    opcoesMenu.id = ''
                    document.getElementsByClassName('abasAdmins')[c].style.display = 'none'
                } catch{}
            }

            //? Vai ocorrer
            opcoesMenu.id = 'ativo'
            document.querySelector('#opcaoH1').innerText = opcoesMenu.innerText
            document.getElementsByClassName('abasAdmins')[c].style.display = 'block'

            if(c == 0) {
                buscarAdmins()

            } else if(c == 1) {
                buscarUsers()
            } else if(c == 2) {
                carregarNoticias()
            }
        })
    } catch{}

}

let corCargos = [
    {
        Cargo: 'Admin Supremo',
        Cor: '#9d00ff'
    },
    {
        Cargo: 'Admin',
        Cor: '#2079ff'
    },
    {
        Cargo: 'Repórter',
        Cor: 'red'
    },
]

let estadoNoticiaCor = [
    {
        Estado: 'No Ar',
        Cor: '#2079ff'
    },
    {
        Estado: 'Suspenso',
        Cor: '#ff810094'
    },
    {
        Estado: 'Pendente',
        Cor: '#5bb75b'
    },
]

function buscarAdmins() {
    let abaAdmsMostrar = document.getElementsByClassName('abaAdmsMostrar')[0]
    abaAdmsMostrar.innerHTML = ''
    let adminSupremo = false


    db.collection('ConfigMigueley').onSnapshot((data) => {
        data.docs.map(function(valor) {
            let ConfigMigueley = valor.data()
            
            for (let c = 0; c < ConfigMigueley.PessoalAltorizado.length; c++) {

                for(let b = 0; b < ConfigMigueley.PessoalAltorizado[c].Cargo.length; b++) {
                    if(ConfigMigueley.PessoalAltorizado[c].Cargo[b] == 'Admin' || ConfigMigueley.PessoalAltorizado[c].Cargo[b] == 'Admin Supremo') {
                        let emailUserPesquisado = false

                        let adms = document.createElement('div')
                        let inputCheckBox = document.createElement('input')
                        let emailUser = document.createElement('p')
                        let nomeAdm = document.createElement('p')
                        let span = document.createElement('span')
    
                        adms.className = 'adms'
                        inputCheckBox.type = 'checkbox'
                        inputCheckBox.className = 'checkBoxAdmins'
                        inputCheckBox.disabled = true
    
                        emailUser.innerHTML = ConfigMigueley.PessoalAltorizado[c].EmailUser
    
                        db.collection('UsersMigueley').onSnapshot((data) => {
                            data.docs.map(function(valor) {
                                let UsersMigueley = valor.data()
                                
                                if(emailUserPesquisado == false && UsersMigueley.EmailUser == ConfigMigueley.PessoalAltorizado[c].EmailUser) {
                                    emailUserPesquisado = true
                                    nomeAdm.innerHTML = UsersMigueley.Nome
                                }
                            })
                        })

                        if(ConfigMigueley.PessoalAltorizado[c].Cargo[b] == 'Admin Supremo') {
                            span.innerHTML = 'Admin Supremo'
                            
                            if(email == ConfigMigueley.PessoalAltorizado[c].EmailUser && adminSupremo == false) {
                                adminSupremo = true
                                
                                setTimeout(() => {
                                    for(let c = 0; c < ConfigMigueley.PessoalAltorizado.length; c++) {
                                        try {
                                            document.getElementsByClassName('checkBoxAdmins')[c].disabled = false
                                        } catch{}
                                    }
                                }, 2000)
                            }

                        } else {
                            span.innerHTML = 'Admin'
                        }

                        //? Vai checar a cor do cargo
                        for(let contCor = 0; contCor < corCargos.length; contCor++) {
                            if(ConfigMigueley.PessoalAltorizado[c].Cargo[b] == corCargos[contCor].Cargo) {
                                span.style.color = corCargos[contCor].Cor
                                span.style.border = `1px solid ${corCargos[contCor].Cor}`
                            }
                        }
    
                        adms.appendChild(inputCheckBox)
                        adms.appendChild(emailUser)
                        adms.appendChild(nomeAdm)
                        adms.appendChild(span)
                        abaAdmsMostrar.appendChild(adms)
                    }
                }
            }
        })
    })
} document.getElementsByClassName('abasAdmins')[0].style.display = 'block' 
 buscarAdmins()

function buscarUsers() {
    let abaAdmsMostrar = document.getElementsByClassName('abaAdmsMostrar')[1]
    abaAdmsMostrar.innerHTML = ''

    db.collection('ConfigMigueley').onSnapshot((data) => {
        data.docs.map(function(valor) {
            let ConfigMigueley = valor.data()
            
            for (let c = 0; c < ConfigMigueley.PessoalAltorizado.length; c++) {
                let emailUserPesquisado = false

                let adms = document.createElement('div')
                let inputCheckBox = document.createElement('input')
                let emailUser = document.createElement('p')
                let nomeAdm = document.createElement('p')
                let div = document.createElement('div')

                div.className = 'cargos'
                adms.className = 'adms'
                inputCheckBox.type = 'checkbox'

                emailUser.innerHTML = ConfigMigueley.PessoalAltorizado[c].EmailUser
                
                for(let cont = 0; cont < ConfigMigueley.PessoalAltorizado[c].Cargo.length; cont++) {
                    let span = document.createElement('span')
                    span.innerText = ConfigMigueley.PessoalAltorizado[c].Cargo[cont]

                    //? Vai checar a cor do cargo
                    for(let contCor = 0; contCor < corCargos.length; contCor++) {
                        if(ConfigMigueley.PessoalAltorizado[c].Cargo[cont] == corCargos[contCor].Cargo) {
                            span.style.color = corCargos[contCor].Cor
                            span.style.border = `1px solid ${corCargos[contCor].Cor}`
                        }
                    }

                    div.appendChild(span)
                }

                db.collection('UsersMigueley').onSnapshot((data) => {
                    data.docs.map(function(valor) {
                        let UsersMigueley = valor.data()
                        
                        if(emailUserPesquisado == false && UsersMigueley.EmailUser == ConfigMigueley.PessoalAltorizado[c].EmailUser) {
                            emailUserPesquisado = true
                            nomeAdm.innerHTML = UsersMigueley.Nome
                        }
                    })
                })

                adms.appendChild(inputCheckBox)
                adms.appendChild(emailUser)
                adms.appendChild(nomeAdm)
                adms.appendChild(div)
                abaAdmsMostrar.appendChild(adms)
            }
        })
    })
}

function carregarNoticias() {
    let noticiasCarregadas = false
    let noticiaEditada = false
    let abaNoticias = document.querySelector('#abaNoticias')
    abaNoticias.innerHTML = ''
    let cloneNoticias = []
    let idNoticia = ''
    let numNoticia =

    db.collection('UsersMigueley').onSnapshot((data) => {
        data.docs.map(function(valor) {
            let UsersMigueley = valor.data()

            if(noticiasCarregadas == false) {
                setTimeout(() => {
                    noticiasCarregadas = true
                }, 3000)

                for(let c = 0; c < UsersMigueley.Noticias.length; c++) {
                    let noticias = document.createElement('div')
                    let img = document.createElement('img')
                    let tituloNoticia = document.createElement('p')
                    let emailUser = document.createElement('p')
                    let estadoNoticia = document.createElement('span')

                    noticias.className = 'noticias'
                    tituloNoticia.className = 'tituloNoticia'
                    estadoNoticia.className = 'estadoNoticia'

                    img.src = UsersMigueley.Noticias[c].Img
                    tituloNoticia.innerHTML = UsersMigueley.Noticias[c].Titulo.replace(/\*(.*?)\*/g, "<strong>$1</strong>")
                    emailUser.innerText = UsersMigueley.EmailUser
                    estadoNoticia.innerText = UsersMigueley.Noticias[c].EstadoNoticia

                    //? Vai checar a cor do cargo
                    for(let contCor = 0; contCor < estadoNoticiaCor.length; contCor++) {
                        if(UsersMigueley.Noticias[c].EstadoNoticia == estadoNoticiaCor[contCor].Estado) {
                            estadoNoticia.style.color = estadoNoticiaCor[contCor].Cor
                            estadoNoticia.style.border = `1px solid ${estadoNoticiaCor[contCor].Cor}`
                        }
                    }

                    noticias.appendChild(img)
                    noticias.appendChild(tituloNoticia)
                    noticias.appendChild(emailUser)
                    noticias.appendChild(estadoNoticia)
                    abaNoticias.appendChild(noticias)

                    //? Funções de click
                    noticias.addEventListener('click', () => {{
                        cloneNoticias = UsersMigueley.Noticias
                        idNoticia = valor.id
                        numNoticia = c

                        document.querySelector('body').style.overflow = 'hidden'
                        document.querySelector('#aboutTheNews').style.display = 'block'
                        document.querySelector('#imgNewsNow').src = UsersMigueley.Noticias[c].Img
                        document.querySelector('#titleNewsNow').innerHTML = UsersMigueley.Noticias[c].Titulo.replace(/\*(.*?)\*/g, "<strong>$1</strong>")
                        document.querySelector('#textNewsNow').innerHTML = UsersMigueley.Noticias[c].Texto.replace(/\*(.*?)\*/g, "<strong>$1</strong>")
                    }})

                    for(let b = 0; b < 10; b++) {
                        try {
                            let btnsAtualizarNoticia = document.getElementsByClassName('btnsAtualizarNoticia')[b]

                            btnsAtualizarNoticia.addEventListener('click', () => {

                                if(btnsAtualizarNoticia.innerText == 'Cancelar') {
                                    document.querySelector('body').style.overflow = 'auto'
                                    document.querySelector('#aboutTheNews').style.display = 'none'
                                } else if(btnsAtualizarNoticia.innerText == 'Aprovar') {
                                    document.querySelector('#sobreAnoticiaVerdadeOuFaldo').style.display = 'flex'

                                } else if(btnsAtualizarNoticia.innerText == 'Suspender') {
                                    document.querySelector('#motivoSuspender').style.display = 'flex'

                                    document.querySelector('#cancelarSuspender').addEventListener('click', () => {
                                        document.querySelector('#motivoSuspender').style.display = 'none'
                                        document.querySelector('#textAreaMotivoSuspender').value != ''
                                    })

                                    document.querySelector('#envaiarMotivoSuspender').addEventListener('click', () => {
                                        if(document.querySelector('#textAreaMotivoSuspender').value != '') {
                                            document.querySelector('#motivoSuspender').style.display = 'none'
                                            atualizarNoticia()
                                        }
                                    })
                                }

                                document.querySelector('#noticiaVerdadeira').addEventListener('click', () => {
                                    atualizarNoticia('Verdadeiro')
                                })

                                document.querySelector('#noticiaFalsa').addEventListener('click', () => {
                                    atualizarNoticia('Falso')
                                })

                                function atualizarNoticia(veracidade = '') {
                                    if(noticiaEditada == false) {
                                        noticiaEditada = true
                                    
                                        if(btnsAtualizarNoticia.innerText == 'Aprovar') {
                                            cloneNoticias[numNoticia].EstadoNoticia = 'No Ar'
                                            cloneNoticias[numNoticia].VeracidadeDaNoticia = veracidade
                                            cloneNoticias[numNoticia].Motivo = ''
                                            db.collection('UsersMigueley').doc(idNoticia).update({Noticias: cloneNoticias})
                                            
                                        } else if(btnsAtualizarNoticia.innerText == 'Suspender') {
                                            cloneNoticias[numNoticia].EstadoNoticia = 'Suspenso'
                                            cloneNoticias[numNoticia].VeracidadeDaNoticia = veracidade
                                            cloneNoticias[numNoticia].Motivo = document.querySelector('#textAreaMotivoSuspender').value
                                            db.collection('UsersMigueley').doc(idNoticia).update({Noticias: cloneNoticias})
                                            
                                        } 
                                        // else if(btnsAtualizarNoticia.innerText == 'Excluir') {
                                        //     cloneNoticias.splice(c, 1)
                                        //     db.collection('UsersMigueley').doc(idNoticia).update({Noticias: cloneNoticias})
                                        // }


                                        document.querySelector('#sobreAnoticiaVerdadeOuFaldo').style.display = 'none'
                                        document.querySelector('#motivoSuspender').style.display = 'none'
                                        document.querySelector('#textAreaMotivoSuspender').value != ''
                                        document.querySelector('#aboutTheNews').style.display = 'none'
                                        abaNoticias.innerHTML = ''
                                        carregarNoticias()
                                    }
                                }
                            })
                        } catch(e){}
                    }
                }
            }
        })
    })
}