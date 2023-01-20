let igual = false
let estadoSite = 'Normal'
let admCheck = false
db.collection('Admins').onSnapshot((data) => {
    data.docs.map(function(val) {
        let Admins = val.data()

        for(let c = 0; c < Admins.Email.length; c++) {
            if(Admins.Email[c] == email) {
                admCheck = true
            }
        }

        if(igual == false && Admins.EmManutencao == true) {
            estadoSite = 'Em Manutenção'
            try {
                if(estadoSite == 'Em Manutenção') {
                    document.getElementById('btnSuspender').style.backgroundColor = 'red'
                }
            } catch {}

            for(let c = 0; c < Admins.Email.length; c++) {
                if(Admins.Email[c] == email) {
                    igual = true
                }
            }

            setTimeout(() => {
                if(igual == true) {
                    if(location.href == 'http://127.0.0.1:5500/Manutencao.html') {
                        location.href = 'http://127.0.0.1:5500/AdminPage.html'

                    } else if(location.href == 'https://wender101.github.io/html-css/desafio/EDStore/Manutencao.html') {
                        location.href = 'https://wender101.github.io/html-css/desafio/EDStore/AdminPage.html'
                    }
                    
                } else {
                    if(location.host == '127.0.0.1:5500' && location.href != 'http://127.0.0.1:5500/Manutencao.html') {
                        location.href = 'http://127.0.0.1:5500/Manutencao.html'

                    } else if(location.host == 'wender101.github.io' && location.href != 'https://wender101.github.io/html-css/desafio/EDStore/Manutencao.html') {
                        location.href = 'https://wender101.github.io/html-css/desafio/EDStore/Manutencao.html'
                    }
                }
            }, 200)
        }
    })
})

setTimeout(() => {
    if(admCheck == false) {
        localStorage.setItem('conectado', 'false')
    } else {
        localStorage.setItem('conectado', 'true')
    }
}, 500)