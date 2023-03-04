let checkEstadoConta = localStorage.getItem('EstadoConta')

// if(checkEstadoConta != '1dasfr3') {
//     if(location.host == '127.0.0.1:5501' && location.href != 'http://127.0.0.1:5501/em-manutencao.html') {
//         // location.href = 'http://127.0.0.1:5501/em-manutencao.html'

//         // setTimeout(() => {
//         //     location.reload()
//         // }, 100)

//     } else if(location.host == 'wender101.github.io' && location.href != 'https://wender101.github.io/html-css/desafio/NerdsFirebase/em-manutencao.html') {
//         // location.href = 'https://wender101.github.io/html-css/desafio/NerdsFirebase/em-manutencao.html'

//         // setTimeout(() => {
//         //     location.reload()
//         // }, 100)
//     }

//     checarContaAdm()
// }

function checarContaAdm() {
    db.collection('Manutenção').onSnapshot((data) => {
        data.docs.map(function(val) {
            let valManutencao = val.data()

            if(valManutencao.EmManutencao == true) {
                let checkConta = false
                for(let c = 0; c < valManutencao.Admins.length; c++) {
                    if(email == valManutencao.Admins[c].email) {
                        checkConta = true
                        
                        if(location.href == 'http://127.0.0.1:5501/em-manutencao.html') {
                            location.href = 'http://127.0.0.1:5501/home.html'
                            localStorage.setItem('EstadoConta', '1dasfr3')

                            setTimeout(() => {
                                location.reload()
                            }, 100)

                        } else if(location.href == 'https://wender101.github.io/html-css/desafio/NerdsFirebase/em-manutencao.html') {
                            location.href = 'https://wender101.github.io/html-css/desafio/NerdsFirebase/home.html'
                            localStorage.setItem('EstadoConta', '1dasfr3')

                            setTimeout(() => {
                                location.reload()
                            }, 100)
                        }
                    }

                    setTimeout(() => {
                        if(checkConta == false) {
                            if(location.host == '127.0.0.1:5501' && location.href != 'http://127.0.0.1:5501/em-manutencao.html') {
                                location.href = 'http://127.0.0.1:5501/em-manutencao.html'
                                localStorage.setItem('EstadoConta', '1dasf3f')


                                setTimeout(() => {
                                    location.reload()
                                }, 100)

                            } else if(location.host == 'wender101.github.io' && location.href != 'https://wender101.github.io/html-css/desafio/NerdsFirebase/em-manutencao.html') {
                                location.href = 'https://wender101.github.io/html-css/desafio/NerdsFirebase/em-manutencao.html'
                                localStorage.setItem('EstadoConta', '1dasf3f')

                                setTimeout(() => {
                                    location.reload()
                                }, 100)
                            }
                        }
                    }, 200)
                }
            } else if(valManutencao.EmManutencao == false && location.href == 'http://127.0.0.1:5501/em-manutencao.html') {
                location.href = 'http://127.0.0.1:5501/home.html'

                setTimeout(() => {
                    location.reload()
                }, 100)
            } else if(valManutencao.EmManutencao == false && location.href == 'https://wender101.github.io/html-css/desafio/NerdsFirebase/em-manutencao.html') {
                location.href = 'https://wender101.github.io/html-css/desafio/NerdsFirebase/home.html'

                setTimeout(() => {
                    location.reload()
                }, 100)
            } else {
            }
        })
    })
} checarContaAdm()