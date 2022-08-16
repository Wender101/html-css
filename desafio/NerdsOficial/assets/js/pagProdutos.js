const produtoPesquisado1 = localStorage.getItem('produtoPesquisado')
const produtoPesquisado2 = JSON.parse(produtoPesquisado1)

// Vai mudar o titulo da pág para o nome da classe pesquisada
document.querySelector('title').innerText = produtoPesquisado2
document.getElementById('classProduto').innerText = produtoPesquisado2

let maxC = 1
for(let c = 0; c < maxC; c++) {
    const main = document.querySelector('main')
    const containerProduto = document.createElement('div')
    const localImgProduto = document.createElement('a')
    const imgProduto = document.createElement('img')
    const strong = document.createElement('strong')
    const p = document.createElement('p')

    containerProduto.className = 'containerProduto'
    localImgProduto.className = 'localImgProduto'
    localImgProduto.href = 'sobre-o-produto.html'
    imgProduto.className = 'imgProduto'

    //! Produtos
    if(produtoPesquisado2 == 'Cabos') {
        maxC = 21
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
        maxC = 20
        if(c == 0) {
            imgProduto.src = `assets/img/CatalogoNerd/Adaptador Bluetooth para PC/b2782e3f79dde434cfb03874214fb28b.jpg`
            strong.innerHTML = 'Adaptador Bluetooth'
            p.innerText = 'Adaptador Bluetooth 5.0 para computador'

        } else if(c == 1) {
            imgProduto.src = `assets/img/CatalogoNerd/Adaptador HDMI DVI/ArquivoExibir.jpg`
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
            strong.innerHTML = 'Adaptador HDMI para micro HDMI'
            p.innerText = 'Adaptador HDMI para micro HDMI'

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
        maxC = 6
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
            imgProduto.src = `assets/img/CatalogoNerd/Mitra Branco/48acfbda-9d00-43d1-854a-c24081401b3a.jpg`
            strong.innerHTML = 'Teclado Mitra Branco'
            p.innerText = 'Teclado Mitra Branco'

        } else if(c == 5) {
            imgProduto.src = `assets/img/CatalogoNerd/Teclado USB/105519-1-teclado_usb_logitech_keyboard_k120_920_004423-5.jpg`
            strong.innerHTML = 'Teclado USB'
            p.innerText = 'Teclado USB'

        } 

    } else if(produtoPesquisado2 == 'Mouse') {
        maxC = 23

        if(c == 0) {
            imgProduto.src = `assets/img/CatalogoNerd/Mouse gamer 6939/76.png`
            strong.innerHTML = 'Mouse Gamer'
            p.innerText = 'Mouse Gamer'

        } else if(c == 1) {
            imgProduto.src = `assets/img/CatalogoNerd/Mouse gamer A515/84.png`
            strong.innerHTML = 'Mouse gamer'
            p.innerText = 'Mouse gamer'

        } else if(c == 2) {
            imgProduto.src = `assets/img/CatalogoNerd/Mouse gamer Infernal/4359197575_1.jpg`
            strong.innerHTML = 'Mouse Infernal'
            p.innerText = 'Mouse Gamer Infernal Marca: Redragon Diversos efeitos e cores 8 Botões 16.000 DPI Cabo: 1.8m'

        } else if(c == 3) {
            imgProduto.src = `assets/img/CatalogoNerd/Mouse Gamer Invader/mouse-gamer-redragon-invader-m719-rgb-7-botoes-10000dpi-rgb-m719-rgb_1578656228_g.jpg`
            strong.innerHTML = 'Mouse Invader'
            p.innerText = 'Mouse Gamer Invader Marca: Redragon RGB Ajustavel - 7 Diferentes modos de iluminação 7 Botões DPI: 10.000'
            
        } else if(c == 4) {
            imgProduto.src = `assets/img/CatalogoNerd/Mouse gamer KPV19/56000699_4.jpg`
            strong.innerHTML = 'Mouse Gamer'
            p.innerText = 'Mouse Gamer'
            
        } else if(c == 5) {
            imgProduto.src = `assets/img/CatalogoNerd/MOuse gamer Lehmox GTM3/eb245fe2f5618a3644f0919226d57822.jpg`
            strong.innerHTML = 'Mouse Lehmox'
            p.innerText = 'Mouse Gamer Lehmox'
            
        } else if(c == 6) {
            imgProduto.src = `assets/img/CatalogoNerd/Mouse gamer Lehmox Ley 206/3.png`
            strong.innerHTML = 'Mouse Lehmox Ley'
            p.innerText = 'Mouse Gamer Lehmox Ley'
            
        } else if(c == 7) {
            imgProduto.src = `assets/img/CatalogoNerd/Mouse gamer Predator/704124e039429de6c7be64bbb09b91cf.jpg`
            strong.innerHTML = 'Mouse Predator'
            p.innerText = 'Mouse Gamer Predator Marca: Redragon Diversos efeitos e cores 9 Botões DPI: 8000 Cabo: 1.8m'
            
        } else if(c == 8) {
            imgProduto.src = `assets/img/CatalogoNerd/Mouse gamer sniper/mouse-gamer-redragon-sniper-m801-rgb-12400-dpi-9-botoes-programaveis-black_95285.png`
            strong.innerHTML = 'Mouse Sniper'
            p.innerText = 'Mouse Gamer Sniper Marca: Redragon Diversos efeitos e cores 9 Botões DPI: 500/1000/2000/4000/6200/12400 Cabo: 1.8m'
            
        } else if(c == 9) {
            imgProduto.src = `assets/img/CatalogoNerd/Mouse gamer soldado/20210920_175153.jpg`
            strong.innerHTML = 'Marca: Infokit'
            p.innerText = 'Marca: Infokit Modelo: X Soldado - GM 700 Resolução: 3000 DPI Interface: 2.0 USB Cabo: 1,5m revestido em tecido. Botões: 7 Luz de LED: 7 cores com transição.'
            
        } else if(c == 10) {
            imgProduto.src = `assets/img/CatalogoNerd/Mouse gamer storm/86.png`
            strong.innerHTML = 'Mouse Storm Elite'
            p.innerText = 'Mouse Gamer Storm Elite Marca: Redragon'
            
        } else if(c == 11) {
            imgProduto.src = `assets/img/CatalogoNerd/mouse gamer V40/mouse_gamer_knup_kp_v40_d_nq_np_968120_mlb27842225947_072018_f.jpg`
            strong.innerHTML = 'Mouse Branco'
            p.innerText = 'Mouse Gamer Branco'
            
        } else if(c == 12) {
            imgProduto.src = `assets/img/CatalogoNerd/Mouse gamer Weibo WB1670/mouse_weibo_box1-8711514ea284ef55ac16139622824399-640-0.jpg`
            strong.innerHTML = 'Mouse Gamer'
            p.innerText = 'Especificações: Modelo: WB 1670 USB 3.0/2.0/1.1 Suporte de DPI : 800 / 1600 / 2400 / 3200 Sensor de LED Iluminação RGB 6 Botões'
            
        } else if(c == 13) {
            imgProduto.src = `assets/img/CatalogoNerd/Mouse gamer X8/mouse_gamer_usb_x8_com_cabo_reforcado_3474_1_20201116115214.jpg`
            strong.innerHTML = 'Mouse X8'
            p.innerText = 'Mouse gamer X8/mouse_gamer_usb_x8_com_cabo_reforcado_3474_1_20201116115214.jpg'
            
        } else if(c == 14) {
            imgProduto.src = `assets/img/CatalogoNerd/Mouse One Power/D_NQ_NP_744185-MLB46752458699_072021-W.jpg`
            strong.innerHTML = 'Mouse Invader'
            p.innerText = 'Mouse Gamer Invader Marca: One Power Iluminação RGB 7 Botões DPI: 3.200'
            
        } else if(c == 15) {
            imgProduto.src = `assets/img/CatalogoNerd/Mouse Orion/mouse-gamer-kwg-orion-p1-12000-dpi-7-botoes-black_109941.png`
            strong.innerHTML = 'Mouse Orion'
            p.innerText = 'Mouse Gamer Orion RGB 7 Botões 12.000 DPI Cabo: 1.5m'
            
        } else if(c == 16) {
            imgProduto.src = `assets/img/CatalogoNerd/Mouse sem fio 40 reais/13.png`
            strong.innerHTML = 'Mouse sem fio'
            p.innerText = 'Mouse sem fio'
            
        } else if(c == 17) {
            imgProduto.src = `assets/img/CatalogoNerd/Mouse sem fio 40 reais/14.png`
            strong.innerHTML = 'Mouse sem fio'
            p.innerText = 'Mouse sem fio'
            
        } else if(c == 18) {
            imgProduto.src = `assets/img/CatalogoNerd/Mouse sem fio 50 reais/8.png`
            strong.innerHTML = 'Mouse sem fio'
            p.innerText = 'Mouse sem fio'
            
        } else if(c == 19) {
            imgProduto.src = `assets/img/CatalogoNerd/Mouse sem fio 50 reais/2.png`
            strong.innerHTML = 'Mouse sem fio'
            p.innerText = 'Mouse sem fio'
            
        } else if(c == 20) {
            imgProduto.src = `assets/img/CatalogoNerd/Mouse sem fio 60 reais/10.png`
            strong.innerHTML = 'Mouse USB'
            p.innerText = 'Mouse USB'
            
        } else if(c == 21) {
            imgProduto.src = `assets/img/CatalogoNerd/Mouse sem fio Corporal/Mouse-Gamer-Sem-Fio-T-dagger-Corporal-2400-Dpi-Preto-T-tgm100_1643290638_gg.jpg`
            strong.innerHTML = 'Mouse sem fio Marca'
            p.innerText = 'Mouse Gamer sem fio Marca: T Dagger 2400 DPI Preto'
            
        } else if(c == 22) {
            imgProduto.src = `assets/img/CatalogoNerd/Mouse USB simples/df06e578-f767-4ad8-b97c-aba9269c0d7a.jpg`
            strong.innerHTML = 'Mouse USB'
            p.innerText = 'Mouse USB' 
        }

    } else if(produtoPesquisado2 == 'Gabinetes') {
        maxC = 6

        if(c == 0) {
            imgProduto.src = `assets/img/CatalogoNerd/Gabihnete Athena M1/athena-m14.jpg`
            strong.innerHTML = 'Gabinete Athena'
            p.innerText = 'Gabinete Athena Marca: Gamdias Não incluso as fans'

        } else if(c == 1) {
            imgProduto.src = `assets/img/CatalogoNerd/Gabinete Gamer Mars M1/0d6c8a91176dccbe6bc00cb2740ed63f.jpg`
            strong.innerHTML = 'Gabinete Mars M1'
            p.innerText = 'Gabinete Mars M1 Lateral em vidro temperado RGB Frontal Marca: Gamdias Não incluso as fans'

        } else if(c == 2) {
            imgProduto.src = `assets/img/CatalogoNerd/gabinete gamer redragon wheel jack/8446cb5b45a7663da2da5d04f3f79882f219e5f0.jpg`
            strong.innerHTML = 'Gabinete WeelJack'
            p.innerText = 'Gabinete WeelJack Lateral em vidro temperado Marca: Redragon Não incluso as fans'

        } else if(c == 3) {
            imgProduto.src = `assets/img/CatalogoNerd/Gabinete Quasar/gabinete-gamer-galax-quasar-rgb-mid-tower-vidro-temperado-s-fan-black-s-fonte-gx600_98206.jpg`
            strong.innerHTML = 'Gabinete Quasar'
            p.innerText = 'Gabinete Quasar Lateral em vidro temperado Iluminação RGB frontal'

        } else if(c == 4) {
            imgProduto.src = `assets/img/CatalogoNerd/Gabinete T dagger rosa/gabinete-gamer-t-dagger-p03p-mid-tower-rgb-pink-atx-sem-fonte-sem-fan-tgc-p03p_114993.jpg`
            strong.innerHTML = 'Gabinete Rosa'
            p.innerText = 'Gabinete Rosa Lateral em acrilico Marca: T Dagger RGB frontal'

        } else if(c == 5) {
            imgProduto.src = `assets/img/CatalogoNerd/Gabinete Talos M1/Gabinete-Gamer-Gamdias-Talos-M1-Lite-Lateral-E-Frontal-Em-Vidro-Temperado-Preto_1628860998_g.jpg`
            strong.innerHTML = 'Gabinete Talos M1'
            p.innerText = 'Gabinete Talos M1 Lateral em vidro temperado'

        } 

    } else if(produtoPesquisado2 == 'Headset') {
        maxC = 12

        if(c == 0) {
            imgProduto.src = `assets/img/CatalogoNerd/Headset Hylas/MYJ-0177-006_zoom1.jpg`
            strong.innerHTML = 'Headset Gamer Hylas'
            p.innerText = 'Headset Gamer Hylas Marca: Redragon Iluminação RGB Alto Falantes de 50mm'

        } else if(c == 1) {
            imgProduto.src = `assets/img/CatalogoNerd/Headset Mckinley/headset-gamer-t-dagger-mckinley-drivers-40-mm-t-rgh101_1607438850_g.jpg`
            strong.innerHTML = 'Headset Gamer'
            p.innerText = 'Headset Gamer Marca: T Dagger Alto Falantes de 40mm Facil controle de botão de Mic Mute e ajuste de volume'

        } else if(c == 2) {
            imgProduto.src = `assets/img/CatalogoNerd/Headset Mento/headset-gamer-redragon-mento-35mm-usb-multiplas-plataformas-rgb-black-h270-rgb_135650.jpg`
            strong.innerHTML = 'Headset Gamer'
            p.innerText = 'Headset Gamer Mento Marca: Redragon Iluminação RGB Alto Falantes de 50mm'

        } else if(c == 3) {
            imgProduto.src = `assets/img/CatalogoNerd/Headset 0468/96595b2db93509af677286606da14977.jpg`
            strong.innerHTML = 'Headset'
            p.innerText = 'Headset com Led vermelho'

        } else if(c == 4) {
            imgProduto.src = `assets/img/CatalogoNerd/Headset 2207/D_NQ_NP_666343-MLB41163982371_032020-O.jpg`
            strong.innerHTML = 'Headset Gamer'
            p.innerText = 'Headset Gamer'

        } else if(c == 5) {
            imgProduto.src = `assets/img/CatalogoNerd/Headset ejg301/fone_de_ouvido_headset_gamer_h_maston_ej_g301_1331_3_8f7e9010c346a2c814c875720f0677d7.jpg`
            strong.innerHTML = 'Headset Gamer'
            p.innerText = 'Headset Gamer P3 Com RGB'

        } else if(c == 6) {
            imgProduto.src = `assets/img/CatalogoNerd/Headset Gamer Exbom/20210910_153732.jpg`
            strong.innerHTML = 'Headset Gamer'
            p.innerText = 'Headset Gamer com led Azul'

        } else if(c == 7) {
            imgProduto.src = `assets/img/CatalogoNerd/Headset Gamer Exbom/69.png`
            strong.innerHTML = 'Headset Gamer'
            p.innerText = 'Headset Gamer com led Vermelho'

        } else if(c == 8) {
            imgProduto.src = `assets/img/CatalogoNerd/Headset HP/61.png`
            strong.innerHTML = 'Headset Gamer HP'
            p.innerText = 'Headset Gamer HP RGB Audio 7.1 Super confortável'

        } else if(c == 9) {
            imgProduto.src = `assets/img/CatalogoNerd/Headset Lehmox P3/67.png`
            strong.innerHTML = 'Headset'
            p.innerText = 'Headset com entrada P3 Ideal para quem jogo no celular ou notebook'

        } else if(c == 10) {
            imgProduto.src = `assets/img/CatalogoNerd/Headset Philips/44.png`
            strong.innerHTML = 'Headset Philips'
            p.innerText = 'Headset Profissional Philips'

        } else if(c == 11) {
            imgProduto.src = `assets/img/CatalogoNerd/headset SEZ 480/70.png`
            strong.innerHTML = 'Headset'
            p.innerText = 'Headset de um lado só Para Ps4 e Xbox One'

        } 

    } else if(produtoPesquisado2 == 'Controles') {
        maxC = 9

        if(c == 0) {
            imgProduto.src = `assets/img/CatalogoNerd/controle nintendo original/5ff9372e55720dd94f2a7724928c8142.jpg`
            strong.innerHTML = 'Controle nintendo'
            p.innerText = 'Controle nintendo'

        } else if(c == 1) {
            imgProduto.src = `assets/img/CatalogoNerd/Controle Ps2/51Dff1flbLL._AC_SX679_.jpg`
            strong.innerHTML = 'Controle PS2'
            p.innerText = 'Controle PS2 padrão para aparelho de video game PlayStation 2 no consagrado formato ergonomico'

        } else if(c == 2) {
            imgProduto.src = `assets/img/CatalogoNerd/Controle Ps3/2906190795_1GG.jpg`
            strong.innerHTML = 'Controle PS3'
            p.innerText = 'Controle PS3 padrão para aparelho de video game PlayStation 3 no consagrado formato ergonomico'

        } else if(c == 3) {
            imgProduto.src = `assets/img/CatalogoNerd/Controle Xbox sem fio/235132374_1GG.jpg`
            strong.innerHTML = 'Controle Xbox'
            p.innerText = 'Controle sem fio, possui iluminação de LED para identificação do jogador'

        } else if(c == 4) {
            imgProduto.src = `assets/img/CatalogoNerd/Game Handle/106809013_1GG.jpg`
            strong.innerHTML = 'Suporte para celular'
            p.innerText = 'Suporte para celular'

        } else if(c == 5) {
            imgProduto.src = `assets/img/CatalogoNerd/Game Pad 5 em 1/846111e4f2bb6b7df6bc081d4ae74dcf.jpg`
            strong.innerHTML = 'Game Pad'
            p.innerText = 'Game Pad 5 em 1 Com Gatilho e Analogicos'

        } else if(c == 6) {
            imgProduto.src = `assets/img/CatalogoNerd/Gatilho Redragon/gatilho-para-fps-mobile-redragon-android-ios-91563_1585772581_gg.jpg`
            strong.innerHTML = 'Gatilho Redragon'
            p.innerText = 'Gatilho Redragon'

        } else if(c == 7) {
            imgProduto.src = `assets/img/CatalogoNerd/Joystick Nintendo/61C7aHV7RUL._AC_SY450_.jpg`
            strong.innerHTML = 'Joystick Nintendo'
            p.innerText = 'Joystick Nintendo'

        } else if(c == 8) {
            imgProduto.src = `assets/img/CatalogoNerd/Joystick USB para PC/73.png`
            strong.innerHTML = 'Joystick USb'
            p.innerText = 'Joystick USb para computador'

        }

    } else if(produtoPesquisado2 == 'Fontes') {
        maxC = 8

        if(c == 0) {
            imgProduto.src = `assets/img/CatalogoNerd/Fonte 600w T dagger/inshot_20210611_193729949.jpg`
            strong.innerHTML = 'Fonte 600w T dagger'
            p.innerText = 'Fonte 600w T dagger'

        } else if(c == 1) {
            imgProduto.src = `assets/img/CatalogoNerd/Fonte 500w/e33b32708d.jpg`
            strong.innerHTML = 'Fonte para computador 500w'
            p.innerText = 'Fonte para computador 500w'

        } else if(c == 2) {
            imgProduto.src = `assets/img/CatalogoNerd/Fonte/fonte-12v_2.jpeg`
            strong.innerHTML = 'Fonte Diversas'
            p.innerText = 'Fonte Diversas 12v 2a 9v 1a 9v 2a 5v 2a'

        } else if(c == 3) {
            imgProduto.src = `assets/img/CatalogoNerd/fonte 200w/fonte_pc_kp_517_knup_200w_675_1_20190207165610.jpg`
            strong.innerHTML = 'Fonte 200w'
            p.innerText = 'Fonte para computador 200w'

        } else if(c == 4) {
            imgProduto.src = `assets/img/CatalogoNerd/Fonte para celular/Fonte Hmaston.png`
            strong.innerHTML = 'Fonte para celular e tablet'
            p.innerText = 'Fonte para celular e tablet'

        } else if(c == 5) {
            imgProduto.src = `assets/img/CatalogoNerd/Fonte para Notebook/41419RHBjLL._AC_.jpg`
            strong.innerHTML = 'Fonte para Notebook'
            p.innerText = 'Fonte para Notebook diversas marcas'

        } else if(c == 6) {
            imgProduto.src = `assets/img/CatalogoNerd/Fonte PSP/D_NQ_NP_658077-MLB46356974514_062021-W.jpg`
            strong.innerHTML = 'Fonte para PSP'
            p.innerText = 'Fonte para PSP'

        } else if(c == 7) {
            imgProduto.src = `assets/img/CatalogoNerd/Fonte Universal/902772b6f7151efb5435aa7c7db9cc9f.jpg`
            strong.innerHTML = 'Fonte Universal'
            p.innerText = 'Fonte Universal 120v 8 entradas'

        } 

    } else if(produtoPesquisado2 == 'Mouse Pad') {
        maxC = 16

        if(c == 0) {
            imgProduto.src = `assets/img/CatalogoNerd/Mouse Pad 18x22/59.png`
            strong.innerHTML = 'Mouse Pad'
            p.innerText = 'Mouse Pad Tamanho 18x22'

        } else if(c == 1) {
            imgProduto.src = `assets/img/CatalogoNerd/Mouse Pad 18x22/60.png`
            strong.innerHTML = 'Mouse Pad'
            p.innerText = 'Mouse Pad Tamanho 18x22'

        } else if(c == 2) {
            imgProduto.src = `assets/img/CatalogoNerd/Mouse Pad 21x26/20200603_140303_mouse03.jpg`
            strong.innerHTML = 'Mouse Pad'
            p.innerText = 'Mouse Pad Tamanho 21x26cm'

        } else if(c == 3) {
            imgProduto.src = `assets/img/CatalogoNerd/Mouse Pad 21x26/Mouse-Pad-Gamer-Knup-KP-S03-Estampa_3.jpg`
            strong.innerHTML = 'Mouse Pad'
            p.innerText = 'Mouse Pad Tamanho 21x26cm'

        } else if(c == 4) {
            imgProduto.src = `assets/img/CatalogoNerd/Mouse Pad 21x26/ArquivoExibir.jpg`
            strong.innerHTML = 'Mouse Pad'
            p.innerText = 'Mouse Pad Tamanho 21x26cm'

        } else if(c == 5) {
            imgProduto.src = `assets/img/CatalogoNerd/Mouse Pad 32x42/37.png`
            strong.innerHTML = 'Mouse Pad'
            p.innerText = 'Mouse Pad 32x42/37'
            imgProduto.style.transform = 'rotate(-90deg)'
            imgProduto.style.marginTop = '-80px'

        } else if(c == 6) {
            imgProduto.src = `assets/img/CatalogoNerd/Mouse Pad 32x42/40.png`
            strong.innerHTML = 'Mouse Pad'
            p.innerText = 'Mouse Pad 32x42/37'
            imgProduto.style.transform = 'rotate(90deg)'
            imgProduto.style.marginTop = '-80px'

        } else if(c == 7) {
            imgProduto.src = `assets/img/CatalogoNerd/Mouse Pad 52x35/35.png`
            strong.innerHTML = 'Mouse Pad'
            p.innerText = 'Mouse Pad Gamer Tamanho 52x35cm'
            imgProduto.style.transform = 'rotate(-90deg)'
            imgProduto.style.marginTop = '-80px'

        } else if(c == 8) {
            imgProduto.src = `assets/img/CatalogoNerd/Mouse pad 70x35/f2c3c30eb36311407321ec7266950457.jpg`
            strong.innerHTML = 'Mouse Pad'
            p.innerText = 'Mouse Pad Gamer Tamanho 70x35cm'

        } else if(c == 9) {
            imgProduto.src = `assets/img/CatalogoNerd/Mouse pad 70x35/D_NQ_NP_806928-MLB40927802052_022020-O.jpg`
            strong.innerHTML = 'Mouse Pad'
            p.innerText = 'Mouse Pad Gamer Tamanho 70x35cm'

        } else if(c == 10) {
            imgProduto.src = `assets/img/CatalogoNerd/Mouse pad 70x35/D_NQ_NP_866181-MLB32957775106_112019-O.jpg`
            strong.innerHTML = 'Mouse Pad'
            p.innerText = 'Mouse Pad Gamer Tamanho 70x35cm'

        } else if(c == 11) {
            imgProduto.src = `assets/img/CatalogoNerd/Mouse pad 70x35/0cc60fc3a44ca9cd8852bfb1286108da.jpg`
            strong.innerHTML = 'Mouse Pad'
            p.innerText = 'Mouse Pad Gamer Tamanho 70x35cm'

        }  else if(c == 12) {
            imgProduto.src = `assets/img/CatalogoNerd/Mouse PAd 80x30 RGB/20210901_160744.jpg`
            strong.innerHTML = 'Mouse Pad Gamer'
            p.innerText = 'Mouse Pad Gamer Tamanho 80x30cm RGB Conexão RGB'

        } else if(c == 13) {
            imgProduto.src = `assets/img/CatalogoNerd/Mouse PAd 80x30 RGB/images.jpg`
            strong.innerHTML = 'Mouse Pad Gamer'
            p.innerText = 'Mouse Pad Gamer Tamanho 80x30cm RGB Conexão RGB'

        } else if(c == 14) {
            imgProduto.src = `assets/img/CatalogoNerd/Mouse pad 80x30/44.png`
            imgProduto.style = "transform: rotate(-90deg); margin-top: -80px;"
            strong.innerHTML = 'Mouse Pad Gamer'
            p.innerText = 'Mouse Pad Gamer Tamanho 80x30cm RGB Conexão RGB'

        } else if(c == 15) {
            imgProduto.src = `assets/img/CatalogoNerd/Mouse Pad P/56.png`
            strong.innerHTML = 'Mouse Pad Gamer'
            p.innerText = 'Mouse Pad Gamer Tamanho 80x30cm RGB Conexão RGB'

        } 

    } else if(produtoPesquisado2 == 'Processadores') {
        document.getElementById('classProduto').innerText = 'Produto não encontrado no estoque :('

        document.getElementById('classProduto').style.marginTop = '100px'
        document.getElementById('categorias').style.display = 'none'
        document.querySelector('main').style.display = 'none'
        document.querySelector('footer').id = 'semFooter'
        document.querySelector('footer').style.position = 'absolute'
        document.querySelector('footer').style.bottom = '0px'
        document.getElementsByClassName('separacao')[0].style.display = 'none'
        document.getElementsByClassName('separacao')[1].style.display = 'none'

    } else if(produtoPesquisado2 == 'Memoria') {
        maxC = 3
        if(c == 0) {
            imgProduto.src = `assets/img/CatalogoNerd/Memoria/1322857189_1GG.jpg`
            strong.innerHTML = 'Memoria ram'
            p.innerText = 'Memoria ram'

        } else if(c == 1) {
            imgProduto.src = `assets/img/CatalogoNerd/Memoria/memoria-ram-2.jpg`
            strong.innerHTML = 'Memoria ram'
            p.innerText = 'Memoria ram'

        } else if(c == 2) {
            imgProduto.src = `assets/img/CatalogoNerd/Cartão de memoria/615toZfJObL._AC_SX425_.jpg`
            strong.innerHTML = 'Cartão de memoria'
            p.innerText = 'Cartão de memoria SanDisk'

        }

    } else if(produtoPesquisado2 == 'SSD') {
        maxC = 0
        if(c == 0) {
            imgProduto.src = `assets/img/CatalogoNerd/SSD/61FXsrHuILL._AC_SY450_.jpg`
            strong.innerHTML = 'SSD Kingston'
            p.innerText = '120GB - R$ 220,00 240GB - R$ 300,00'

        }

    } else if(produtoPesquisado2 == 'Coolers') {
        maxC = 6
        if(c == 0) {
            imgProduto.src = `assets/img/CatalogoNerd/Cooler Led Hayom/4ef814fc7095c3e036877f0b886aae9d_tn.jpg`
            strong.innerHTML = 'Cooler Hayom'
            p.innerText = 'Cooler Led Hayom 120mm'

        } else if(c == 1) {
            imgProduto.src = `assets/img/CatalogoNerd/Cooler Led Hayom/fan_cooler_master_led_azul_hayom_fc1300_4217_1_13f95c76cf93a33c0ac0c2457b164f93.jpg`
            strong.innerHTML = 'Cooler Hayom'
            p.innerText = 'Cooler Led Hayom 120mm'

        } else if(c == 2) {
            imgProduto.src = `assets/img/CatalogoNerd/Cooler Led T-dagger/0123673_cooler-para-gabinete-t-dagger-t-tgf200-b-120-x-120-x-25mm-led-azul_600.png`
            strong.innerHTML = 'Cooler Led T-dagger'
            p.innerText = 'Cooler Led T-dagger 120mm'

        } else if(c == 3) {
            imgProduto.src = `assets/img/CatalogoNerd/Cooler para processador viti/cooler-para-processador-t-dagger-viti-90mm-intel-amd-t-gc9110_130404.png`
            strong.innerHTML = 'Cooler para processador viti'
            p.innerText = 'Cooler para processador viti'

        } else if(c == 4) {
            imgProduto.src = `assets/img/CatalogoNerd/Cooler Precessador Alta 9/D_NQ_NP_865410-MLB43717740986_102020-O.jpg`
            strong.innerHTML = 'Cooler Precessador Alta 9'
            p.innerText = 'Cooler Precessador Alta 9'

        } else if(c == 5) {
            imgProduto.src = `assets/img/CatalogoNerd/Water Cooler/water-cooler-gamdias-chione-e2-120-lite-controlador-argb-120mm-intel-amd_104384.jpg`
            strong.innerHTML = 'Water Cooler Iluminação RGB'
            p.innerText = 'Water Cooler Iluminação RGB'

        } 

    } else if(produtoPesquisado2 == 'Outros') {
        maxC = 8
        if(c == 0) {
            imgProduto.src = `assets/img/CatalogoNerd/Switch RJ/c352537e-436e-4f21-8e86-1957ee9b497d.jpg`
            strong.innerHTML = 'Switch RJ45'
            p.innerText = 'Switch RJ45 10/100/1000 8 portas'

        } else if(c == 1) {
            imgProduto.src = `assets/img/CatalogoNerd/Switch HDMI com controle/Switch-Hdmi-5-X-1-Portas-4k-Com-Controle-Remoto_1628619578_gg.jpg`
            strong.innerHTML = 'Switch HDMI'
            p.innerText = 'Switch HDMI 3 entradas e 1 saida com controle'

        } else if(c == 2) {
            imgProduto.src = `assets/img/CatalogoNerd/suporte fixo para tv fexo/874737_7_1615040501.jpg`
            strong.innerHTML = 'Suporte Fixo'
            p.innerText = 'Suporte Fixo para TV Suporta tv de 14 até 70'

        } else if(c == 3) {
            imgProduto.src = `assets/img/CatalogoNerd/Pen drive/171fbcb4eac9a2c18f13c43a211ec289.jpg`
            strong.innerHTML = 'Pen drive'
            p.innerText = '16Gb - R$ 40,00 / 32GB - R$ 50,00 / 64Gb - R$ 70,00'

        } else if(c == 4) {
            imgProduto.src = `assets/img/CatalogoNerd/resma/MV19219156_Papel-Sulfite-A4-Chamex-Multi-Branco-75g-210x297mm-Resma-com-500-Folhas_1_Zoom.jpg`
            strong.innerHTML = 'Resma'
            p.innerText = 'Resma 500 Folhas'

        } else if(c == 5) {
            imgProduto.src = `assets/img/CatalogoNerd/pasta termica silver/thermal_silver_5g.jpg`
            strong.innerHTML = 'Pasta termica'
            p.innerText = 'Pasta termica silver'

        } else if(c == 6) {
            imgProduto.src = `assets/img/CatalogoNerd/Caddy/7(1).png`
            strong.innerHTML = 'Temos Caddy'
            p.innerText = 'Temos Caddy de 12'

        } else if(c == 7) {
            imgProduto.src = `assets/img/CatalogoNerd/hub usb 2.0/1c5a688659.jpg`
            strong.innerHTML = 'HUB USB'
            p.innerText = 'HUB USB 2.0 -7 portas'

        }
        
    } else {
        document.getElementById('classProduto').innerText = 'Algo deu Errado :('

        document.getElementById('classProduto').style.marginTop = '100px'
        document.getElementById('categorias').style.display = 'none'
        document.querySelector('main').style.display = 'none'
        document.querySelector('footer').style.position = 'absolute'
        document.querySelector('footer').style.bottom = '0px'
        document.getElementsByClassName('separacao')[0].style.display = 'none'
        document.getElementsByClassName('separacao')[1].style.display = 'none'
    }

    //! AppendChild
    localImgProduto.appendChild(imgProduto)
    containerProduto.appendChild(localImgProduto)
    containerProduto.appendChild(strong)
    containerProduto.appendChild(p)
    main.appendChild(containerProduto)

    //! Vai add a memoria qual produto vai ser analizado pelo usuario 
    localImgProduto.addEventListener('click', () => {
        let produto = {
            imgProduto: imgProduto.src,
            titulo: strong.innerText,
            desc: p.innerText,
        }

        const sobreProduto = JSON.stringify(produto)
        localStorage.setItem('sobreProduto', sobreProduto)
    })

}

//! Vai mudar a img dos produtos ao passar o mause em cima deles
for(let c = 0; c < maxC; c++) {
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