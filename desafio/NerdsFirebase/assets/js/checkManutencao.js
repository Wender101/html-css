//? Vai checar se o site esta em manutenção
db.collection('Manutenção').onSnapshot((data) => {
    data.docs.map(function(manutencao) {

        const checkManutencao = manutencao.data().EmManutencao
        
        if(checkManutencao == true && window.location.href != 'http://127.0.0.1:5501/Manutencao.html') {
            window.location.href = 'http://127.0.0.1:5501/Manutencao.html'
            // window.location.href = 'https://wender101.github.io/html-css/desafio/NerdsFirebase/Manutencao.html'
            setTimeout(() => {
                location.reload()
            }, 100)

        } else if(checkManutencao == false && window.location.href == 'http://127.0.0.1:5501/Manutencao.html') {
            window.history.back()
        }
    })
})