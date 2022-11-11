db.collection('Manutenção').onSnapshot((data) => {
    data.docs.map(function(manutencao) {

        let checkManutencao = manutencao.data().EmManutencao
        
        if(checkManutencao == true && window.location.pathname != '/Manutencao.html') {
            window.location.pathname = '/Manutencao.html'
            setTimeout(() => {
                location.reload()
            }, 300)

        } else if(checkManutencao == false && window.location.pathname == '/Manutencao.html') {
            window.location.pathname = '/home.html'
            setTimeout(() => {
                window.history.back()
            }, 300)
        }
    })
})