// Vai escolher os produtos em destaque
const array = []
for(let c = 0; c  < 5; c++) {
    const num = Math.floor(Math.random() * 10)

    if(num != array[0] && num != array[1] && num != array[2] && num != array[3] && num != array[4] && num != array[5]) {
        addOfertas(num)
    }
    array.push(num)
}    

function addOfertas(num) {

    const ofertas = document.getElementById('ofertas')
    const divP = document.createElement('div')
    const localImg = document.createElement('a')
    const divImg = document.createElement('div')
    const strong = document.createElement('strong')
    const p = document.createElement('p')
    
    divP.className = 'p'
    localImg.className = 'localImg'
    divImg.className = 'img'

    if(num == 0) {
        localImg.href = 'home.html'
        divImg.style.backgroundImage = 'url(assets/img/ofertas/HeadsetHylas/71YjrSgj-FL._AC_SY450_.jpg)'
        strong.innerText = 'Headset Gamer Hylas'
        p.innerText = 'Marca: Redragon, com iluminação RGB e Alto Falantes de 50mm'

    } else if(num == 1) {
        localImg.href = 'home.html'
        divImg.style.backgroundImage = 'url(assets/img/ofertas/GabineteTdaggerRosa/gabinete-gamer-t-dagger-p03p-mid-tower-rgb-pink-atx-sem-fonte-sem-fan-tgc-p03p_114992.jpg)'
        strong.innerText = 'Gabinete Rosa'
        p.innerText = 'Marca: T Dagger, lateral em acrilico, RGB frontal'

    } else if(num == 2) {
        localImg.href = 'home.html'
        divImg.style.backgroundImage = 'url(assets/img/ofertas/MouseGamerInfernal/mouseRedragon.png)'
        strong.innerText = 'Mouse Gamer Infernal'
        p.innerText = 'Marca: Redragon, diversos efeitos e cores, 8 Botões 16.000 DPI, Cabo: 1.8m'

    } else if(num == 3) {
        localImg.href = 'home.html'
        divImg.style.backgroundImage = 'url(assets/img/ofertas/GabineteGamerMarsM1/gabinete-gamer-gamdias-mars-m1-mid-tower-s-fan-vidro-temperado-black-s-fonte_133657.jpg)'
        strong.innerText = 'Gabinete Mars M1 '
        p.innerText = 'Marca: Gamdias, lateral em vidro temperado, RGB Frontal, não incluso as fans'

    } else if(num == 4) {
        localImg.href = 'home.html'
        divImg.style.backgroundImage = 'url(assets/img/ofertas/ControlePs3/2906190795_1GG.jpg)'
        strong.innerText = 'Controle PS3'
        p.innerText = 'Controle PS3 padrão para aparelho de video game PlayStation 3 no consagrado formato ergonomico'
        
    }  else if(num == 5) {
        localImg.href = 'home.html'
        divImg.style.backgroundImage = 'url(assets/img/ofertas/FitaLEd/fita-3d-11-c9ad4c28a90baf04df16137000811895-1024-1024.jpeg)'
        strong.innerText = 'Fita Led'
        p.innerText = 'Fita Led + controle + fonte'
        
    } else if(num == 6) {
        localImg.href = 'home.html'
        divImg.style.backgroundImage = 'url(assets/img/ofertas/FitaLEd/615HDJQJ+6S._AC_SY450_.jpg)'
        strong.innerText = 'Fita Led'
        p.innerText = 'Fita Led + controle + fonte'
        
    } else if(num == 7) {
        localImg.href = 'home.html'
        divImg.style.backgroundImage = 'url(assets/img/ofertas/ControleXboxsemfio/235132374_1GG.jpg)'
        strong.innerText = 'Controle Xbox'
        p.innerText = 'controle sem fio, possui iluminação de LED para identificação do jogador, sistema de vibração e design anatômico;'
        
    } else if(num == 8) {
        localImg.href = 'home.html'
        divImg.style.backgroundImage = 'url(assets/img/ofertas/TecladoKumaraRGB/teclado-redragon-kumara-rgb-k552-02.png)'
        strong.innerText = 'Teclado Mecanico Kumara'
        p.innerText = 'Marca: Redragon, iluminação RGB'
        
    } else {
        localImg.href = 'home.html'
        divImg.style.backgroundImage = 'url(assets/img/ofertas/WaterCooler/water-cooler-gamdias-chione-e2-120-lite-controlador-argb-120mm-intel-amd_104384.jpg)'
        strong.innerText = 'Water Cooler'
        p.innerText = 'Water Cooler Iluminação RGB'
    } 

    localImg.appendChild(divImg)
    divP.appendChild(localImg)
    divP.appendChild(strong)
    divP.appendChild(p)
    ofertas.appendChild(divP)
}

// Vai mudar a img dos produtos ao passar o mause em cima deles
for(let c = 0; c < 100; c++) {
    const img = document.getElementsByClassName('img')[c]
    img.id = c
    img.addEventListener('mouseenter', (e) => {
        const el = e.target.src
        const novoLink1 = el.slice(0, -1)
        const novoLink2 = novoLink1.slice(0, -1)
        const novoLink3 = novoLink2.slice(0, -1)
        const novoLink4 = novoLink3.slice(0, -1)
        const idElemnto = e.target.id

        const imgSelected = document.getElementById(idElemnto)

        if(novoLink2.substr(-1) == 'j') {
            imgSelected.src = `${novoLink4}2.jpg`

        } else {
            imgSelected.src = `${novoLink4}2.png`
        }

        img.addEventListener('mouseout', () => {
            imgSelected.src = el     
        })
    })
}

