db.collection('Manutenção').onSnapshot((data) => {
    data.docs.map(function(val) {
        let valManutencao = val.data()

        for(let c = 0; c < valManutencao.Admins.length; c++) {
            if(valManutencao.Admins[c].email == email) {
                if(location.href == 'https://wender101.github.io/html-css/desafio/NerdsFirebase/em-manutencao.html') {
                    location.href = 'https://wender101.github.io/html-css/desafio/NerdsFirebase/home.html'
                    
                    setTimeout(() => {
                        location.reload()
                    }, 100)
                }
            }
        }

    })
})