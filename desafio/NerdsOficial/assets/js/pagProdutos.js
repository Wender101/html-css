const produtoPesquisado1 = localStorage.getItem('produtoPesquisado')
const produtoPesquisado2 = JSON.parse(produtoPesquisado1)

// Vai mudar o titulo da pág para o nome da classe pesquisada
document.querySelector('title').innerText = produtoPesquisado2
document.getElementById('classProduto').innerText = produtoPesquisado2

let maxC = 1
for(let c = 0; c <= maxC; c++) {
    const main = document.querySelector('main')
    const containerProduto = document.createElement('div')
    const localImgProduto = document.createElement('div')
    const imgProduto = document.createElement('img')
    const strong = document.createElement('strong')
    const p = document.createElement('p')

    containerProduto.className = 'containerProduto'
    localImgProduto.className = 'localImgProduto'
    imgProduto.className = 'imgProduto'

    //! Produtos
    if(produtoPesquisado2 == 'Cabos') {
        maxC = 20
        if(c == 0) {
            imgProduto.src = `assets/img/CatalogoNerd/Cabo AV/6b3089994518ca63a6a7a3aa87fa5f55.jpg`
            strong.innerHTML = 'Cabo de audio'
            p.innerText = 'Cabo de audio e video 3RCA macho x 3RCA macho'

        } else if(c == 1) {
            imgProduto.src = `assets/img/CatalogoNerd/Cabo AV para Ps2/H2d11e470dfbb4f08a303f803e6f23b9dL.jpg`
            strong.innerHTML = 'Cabo para Ps2'
            p.innerText = 'Cabo AV para Ps2'

        } else if(c == 2) {
            imgProduto.src = `assets/img/CatalogoNerd/Cabo AV para Xbox/8(1).png`
            strong.innerHTML = 'Cabo para Xbox 360'
            p.innerText = 'Cabo AV para Xbox 360'

        } else if(c == 3) {
            imgProduto.src = `assets/img/CatalogoNerd/cabo de força/66734_index_g.jpg`
            strong.innerHTML = 'Cabo de Força'
            p.innerText = 'Cabo de Força'

        } else if(c == 4) {
            imgProduto.src = `assets/img/CatalogoNerd/cabo de força/Cabo-de-forca.jpg`
            strong.innerHTML = 'Cabo de Força'
            p.innerText = 'Cabo de Força'

        } else if(c == 5) {
            imgProduto.src = `assets/img/CatalogoNerd/cabo de força/cabo_de_energia_atx_padrao_novo_3_pinos_120cm_kirin_cb_37a120_1860_1_f49cd6b62d575a50d5f25b098f7df063_20211215123121.jpg`
            strong.innerHTML = 'Cabo de Força'
            p.innerText = 'Cabo de Força'

        } else if(c == 6) {
            imgProduto.src = `assets/img/CatalogoNerd/Cabo de rede/61H7YduyBZL._AC_SY450_.jpg`
            strong.innerHTML = 'Cabo de rede - para internet'
            p.innerText = 'R$ 1,25 o metro e R$ 2,00 cada ponta crimpada'

        } else if(c == 7) {
            imgProduto.src = `assets/img/CatalogoNerd/Cabo DVI/e0662b9e97.jpg`
            strong.innerHTML = 'Cabo DVI'
            p.innerText = 'O Cabo DVI - Modelo DVI-D traz uma transmissão de vídeo digital de alta performance'

        } else if(c == 8) {
            imgProduto.src = `assets/img/CatalogoNerd/Cabo DVI HDMI/cabo_conversor_hdmi_macho_para_dvi_i_macho_com_filtro_1_8_m_1566818115_4a8c_600x600.jpeg`
            strong.innerHTML = 'Cabo hdmi para dvi'
            p.innerText = 'Cabo hdmi para dvi conexão digital'

        } else if(c == 9) {
            imgProduto.src = `assets/img/CatalogoNerd/Cabo HDMI/cabo-hdmi-02.jpg`
            strong.innerHTML = 'Cabo HDMI'
            p.innerText = "Cabo para ligar o seu X-Box, PC, Monitore, TV, Projetores ou quaisquer outros dispositivos que têm"

        } else if(c == 10) {
            imgProduto.src = `assets/img/CatalogoNerd/Cabo HDMI mini HDMI/934cc8f8c2.jpg`
            strong.innerHTML = 'Cabo HDMI mini HDMI'
            p.innerText = 'Este cabo permite transmissão de imagens e áudio de um equipamento que possua entrada MINI HDMI a um monitor ou TV com entrada HDMI'

        } else if(c == 11) {
            imgProduto.src =`assets/img/CatalogoNerd/Cabo HDMI RCA/e938594ac4bb0f9ab30fc4370bae90f1.jpg`
            strong.innerHTML = 'Cabo HDMI RCA'
            p.innerText = 'Cabo HDMI RCA'

        } else if(c == 12) {
            imgProduto.src = `assets/img/CatalogoNerd/cabo Optico/871a3f25253961ab6773fd47a1bd1091.jpg`
            strong.innerHTML = 'Cabo Optico'
            p.innerText = 'Cabo Optico'

        } else if(c == 13) {
            imgProduto.src = `assets/img/CatalogoNerd/Cabo P2/955c72ec226391e5c5f4458e10bbc7ec.jpg`
            strong.innerHTML = 'Cabo P2'
            p.innerText = 'Este cabo possibilita a conexão de equipamentos com entradas de som tipo P2 (3,5mm)'

        } else if(c == 14) {
            imgProduto.src = `assets/img/CatalogoNerd/Cabo P3 RCA/414K9YB-GNL._AC_.jpg`
            strong.innerHTML = 'Cabo P3 RCA'
            p.innerText = 'Cabo P3 RCA'

        } else if(c == 15) {
            imgProduto.src = `assets/img/CatalogoNerd/Cabo P3 x Usb Femea/3283771_6869.jpg`
            strong.innerHTML = 'Cabo P3 / USB (femea)'
            p.innerText = 'Cabo P3 / USB (femea)'

        } else if(c == 16) {
            imgProduto.src = `assets/img/CatalogoNerd/Cabo para celular/cabo_de_dados_e_carregamento_kingo_usb_type_c_1261_1_b25f6c32487e46f7df7e143180ae2e5c.jpg`
            strong.innerHTML = 'Cabo carregador'
            p.innerText = 'Cabo carregador e transmissor de dados para celular e tablet Temos com entradas V8 (micro USB), Tipo-C ou IP8 (iPhone)'

        } else if(c == 17) {
            imgProduto.src = `assets/img/CatalogoNerd/Cabo para impressora/cabo_usb_3_0_para_impressora_1_8_metros_1355_1_20190613180111.jpg`
            strong.innerHTML = 'Cabo para impressora'
            p.innerText = 'Cabo para impressora'

        } else if(c == 18) {
            imgProduto.src = `assets/img/CatalogoNerd/Cabo USB/242115-cabo-usb-para-usb-macho-1-8-m-cirilocabos-1.jpg`
            strong.innerHTML = 'Cabo USB para USB'
            p.innerText = 'É possível transferir com facilidade arquivos de um computador para o outro ou até mesmo montar uma pequena rede'

        } else if(c == 19) {
            imgProduto.src = `assets/img/CatalogoNerd/Cabo V3/D_NQ_NP_958524-MLB31147955933_062019-O.jpg`
            strong.innerHTML = 'Cabo V3'
            p.innerText = 'Cabo Carregador de Dados V3 Micro Usb'

        } else if(c == 20) {
            imgProduto.src = `assets/img/CatalogoNerd/Cabo VGA/cabo-rgb-para-monitor-180-metros---1-0-.jpg`
            strong.innerHTML = 'Cabo VGA'
            p.innerText = 'Este cabo é utilizado apenas para transmissão de imagem. O som não é transmitido com ele'

        }

    } else if(produtoPesquisado2 == 'Adaptadores') {
        maxC = 19
        if(c == 0) {
            imgProduto.src = `assets/img/CatalogoNerd/Adaptador Bluetooth para PC/b2782e3f79dde434cfb03874214fb28b.jpg`
            strong.innerHTML = 'Adaptador Bluetooth'
            p.innerText = 'Adaptador Bluetooth 5.0 para computador'

        } else if(c == 1) {
            imgProduto.src = `assets/img/CatalogoNerd/Adaptador HDMI DVI/ArquivoExibir.jfif`
            strong.innerHTML = 'Adaptador HDMI / DVI'
            p.innerText = 'Adaptador HDMI / DVI'

        } else if(c == 2) {
            imgProduto.src = `assets/img/CatalogoNerd/Adaptador HDMI VGA Energizado/XkSHdvNqaR2ac4yc.jpg`
            strong.innerHTML = 'Conversor HDMI para VGA'
            p.innerText = 'Cabo Adaptador conversor HDMI para VGA Fêmea com Áudio Converte HDMI para VGA HDMI macho e VGA Fêmea'

        } else if(c == 3) {
            imgProduto.src = `assets/img/CatalogoNerd/Adaptador V8 para tipo-c/5f90bb69a2919391fd9e2ddcd1520dc1.jpg`
            strong.innerHTML = 'Adaptador V8 para tipo-c'
            p.innerText = 'Adaptador V8 para tipo-c'

        } else if(c == 4) {
            imgProduto.src = `assets/img/CatalogoNerd/Adaptador BT para carro/1b0d1bd754ad05e979a5b308929f7a40.jpg`
            strong.innerHTML = 'Receptor Bluetooth USB Para P2'
            p.innerText = 'Transforme entradas P2 para receber sinais bluetooth. Ideal para conectar ao som do carro'

        } else if(c == 5) {
            imgProduto.src = `assets/img/CatalogoNerd/Adaptador HDMI DVI/162322z.jpg`
            strong.innerHTML = 'Adaptador HDMI'
            p.innerText = 'Adaptador HDMI'

        } else if(c == 6) {
            imgProduto.src = `assets/img/CatalogoNerd/Adaptador P2/5b756865cb10d50e9c8fab7f.png`
            strong.innerHTML = 'Adaptador P2 X P3'
            p.innerText = 'Para usar aquele seu Headset com microfone em qualquer entrada P2 que aceite fone e microfone como celulares'

        } else if(c == 7) {
            imgProduto.src = `assets/img/CatalogoNerd/Adaptador VGA mini Displayport/minidp_vga1.jpg`
            strong.innerHTML = 'Adaptador VGA para mini Displayport'
            p.innerText = 'Adaptador VGA para mini Displayport'

        } else if(c == 8) {
            imgProduto.src = `assets/img/CatalogoNerd/Adaptador DVI VGA/75632465bd.jpg`
            strong.innerHTML = 'Adaptador DVI para VGA'
            p.innerText = 'Adaptador DVI para VGA'

        } else if(c == 9) {
            imgProduto.src = `assets/img/CatalogoNerd/Adaptador HDMI micro HDMI/41f3dHI1rRL._AC_.jpg`
            strong.innerHTML = 'Adaptador HDMI para micro HDMIr'
            p.innerText = 'Adaptador HDMI para micro HDMIr'

        } else if(c == 10) {
            imgProduto.src = `assets/img/CatalogoNerd/Adaptador SATA USB/adaptador_usb_2_0_para_hd_sata_kp_hd014_knup_2839_2_6cdbc2b8e1b001e0eae83365fc77d98a.jpg`
            strong.innerHTML = 'Adaptador SATA USB'
            p.innerText = 'Adaptador SATA USB'

        } else if(c == 11) {
            imgProduto.src = `assets/img/CatalogoNerd/Adaptador wifi/Adaptador-Wireless-c-Antena-Wi-Fi-USB-PC-e-Notebook-1200Mbps_1626701951_gg.jpg`
            strong.innerHTML = 'Adaptador wifi'
            p.innerText = 'Adaptador wifi, Com antena - 1200Mbps ou Sem antena - 950Mbps'

        } else if(c == 12) {
            imgProduto.src = `assets/img/CatalogoNerd/Adaptador HDMI 90°/162319z.jpg`
            strong.innerHTML = 'Adaptador HDMI com curva 90°'
            p.innerText = 'Adaptador HDMI com curva 90°'

        } else if(c == 13) {
            imgProduto.src = `assets/img/CatalogoNerd/Adaptador HDMI mini HDMI/adaptador-mini-hdmi-para-hdmi-femea-frente.jpg`
            strong.innerHTML = 'Adaptador HDMI para mini HDMI'
            p.innerText = 'Adaptador HDMI para mini HDMI'

        } else if(c == 14) {
            imgProduto.src = `assets/img/CatalogoNerd/Adaptador USB RJ45/162215z.jpg`
            strong.innerHTML = 'Adaptador conector RJ45 para USB'
            p.innerText = 'Adaptador conector RJ45 para USB'

        } else if(c == 15) {
            imgProduto.src = `assets/img/CatalogoNerd/Y VGA/2971463374_1.jpg`
            strong.innerHTML = 'Adaptador Y VGA'
            p.innerText = 'Adaptador Y VGA'

        } else if(c == 16) {
            imgProduto.src = `assets/img/CatalogoNerd/Conversor HDMI para AV/48e044401e7c8ee15ae1aca54210edc0.jpeg`
            strong.innerHTML = 'Conversor HDMI para AV (audio e video)'
            p.innerText = 'Conversor HDMI para AV (audio e video)'

        } else if(c == 17) {
            imgProduto.src = `assets/img/CatalogoNerd/OTG/74181_index_g.jpg`
            strong.innerHTML = 'OTG'
            p.innerText = 'Acesse pen drive e use teclado e mouse no seu celular Temos para celular com entrada Tipo-c e V8 (micro USB)'

        } else if(c == 18) {
            imgProduto.src = `assets/img/CatalogoNerd/Cabo P2 P3/D_NQ_NP_919231-MLB42247876249_062020-O.jpg`
            strong.innerHTML = 'Adaptador P2'
            p.innerText = 'Cabo adaptador P2 (fone e microfone) para P3'

        } else if(c == 19) {
            imgProduto.src = `assets/img/CatalogoNerd/Cabo P3 P2/5c1c840e6d8ec625f2341bc76fc5ead5.jpg`
            strong.innerHTML = 'Adaptador P3'
            p.innerText = 'Cabo adaptador P3 para P2 (fone e microfone)'
        }   

    } else if(produtoPesquisado2 == 'Teclados') {
        maxC = 4
        if(c == 0) {
            imgProduto.src = `assets/img/CatalogoNerd/Teclado gamer de 1 mão/90.png`
            strong.innerHTML = 'Teclado de 1 mao'
            p.innerText = 'Teclado Gamer de 1 mao RGB'

        } else if(c == 1) {
            imgProduto.src = `assets/img/CatalogoNerd/Teclado Kumara RGB/teclado-redragon-kumara-rgb-k552-02.png`
            strong.innerHTML = 'Teclado Mecanico Kumara'
            p.innerText = 'Teclado Mecanico Kumara Marca: Redragon Iluminação RGB'

        } else if(c == 2) {
            imgProduto.src = `assets/img/CatalogoNerd/Teclado mecanico mitra/c2fb0cbc-2e2c-458d-9d7f-7a36876c817c.jpg`
            strong.innerHTML = 'Teclado Mecanico Mitra '
            p.innerText = 'Teclado Mecanico Mitra Marca: Redragon Cor: Preto Led Vermelho'

        } else if(c == 3) {
            imgProduto.src = `assets/img/CatalogoNerd/Teclado semi mecanico/2450a708213ceca4fa2dd8f7ed28857c.jpg`
            strong.innerHTML = 'Teclado semi mecanico'
            p.innerText = 'Teclado semi mecanico Com iluminação RGB'

        } else if(c == 4) {
            imgProduto.src = `assets/img/CatalogoNerd/Teclado USB/105519-1-teclado_usb_logitech_keyboard_k120_920_004423-5.jpg`
            strong.innerHTML = 'Teclado USB'
            p.innerText = 'Teclado USB'

        } 
    }

    //! AppendChild
    localImgProduto.appendChild(imgProduto)
    containerProduto.appendChild(localImgProduto)
    containerProduto.appendChild(strong)
    containerProduto.appendChild(p)
    main.appendChild(containerProduto)
}

//! Vai mudar a img dos produtos ao passar o mause em cima deles
for(let c = 0; c < 100; c++) {
    const imgProduto = document.getElementsByClassName('imgProduto')[c]
    imgProduto.id = c
    imgProduto.addEventListener('mouseenter', (e) => {
        const el = e.target.src
        const idElemnto = e.target.id

        var novoLink1 = el.slice(0, -1)

        if(novoLink1.substr(-1) == 'e') {
            var novoLink2 = novoLink1.slice(0, -1)
            var novoLink23 = novoLink2.slice(0, -1)
            var novoLink3 = novoLink23.slice(0, -1)
            var novoLink4 = novoLink3.slice(0, -1)

        } else {
            var novoLink2 = novoLink1.slice(0, -1)
            var novoLink3 = novoLink2.slice(0, -1)
            var novoLink4 = novoLink3.slice(0, -1)
        }

        const imgSelected = document.getElementById(idElemnto)

        if(novoLink1.substr(-1) == 'e') {
            imgSelected.src = `${novoLink4}2.jpeg`

        } else if(novoLink2.substr(-1) == 'j') {
            imgSelected.src = `${novoLink4}2.jpg`

        } else {
            imgSelected.src = `${novoLink4}2.png`
        }

        imgProduto.addEventListener('mouseout', () => {
            imgSelected.src = el     
        })
    })
}