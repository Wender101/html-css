//! Vai pegar do browser o produto que foi salvo
const sobreProduto1 = localStorage.getItem('sobreProduto')
const sobreProduto2 = JSON.parse(sobreProduto1)

//! Vai pegar do browser o carrinho
const carrinho1 = localStorage.getItem('carrinho')
const carrinho2 = JSON.parse(carrinho1)
let carrinho = []

try {
    for (let c = 0; c < carrinho2.length; c++) {
        carrinho.push(carrinho2[c])
    }

} catch {
    carrinho = []
}

//! Vai checar se o produto2 tem algum valor salvo
if(sobreProduto2 == null) {
    document.getElementById('titulo').innerText = 'Algo deu errado :('
    document.getElementById('desc').innerText = 'Parece que nehum produto foi encotrado. Volte a página anterior e tente novamente.'
    document.getElementById('otherImgs').style.display = 'none'
    let imgProduto = document.getElementById('imgProduto')
    imgProduto.src = 'assets/img/site/error.png'
    imgProduto.style.right = 'auto'
    imgProduto.style.top = '30%'
    imgProduto.style.marginLeft = '50%'
    imgProduto.style.transform = 'translate(-50%)'

    let btnContato = document.getElementById('btnContato')
    
    btnContato.href = 'produtos.html'
    btnContato.target = '_self'

    document.getElementById('btns').getElementsByTagName('a')[0].querySelector('button').innerText = 'Voltar'

    btnContato.style.margin = 'auto'

    document.getElementById('btnCarrinho').style.display = 'none'


} else {
    document.querySelector('title').innerText = sobreProduto2.titulo

    function img() {
        const el = sobreProduto2.imgProduto
        
        var novoLink1 = el.slice(0, -1)
        
        if(novoLink1.substr(-1) == 'e') {
            var novoLink2 = novoLink1.slice(0, -1)
            var novoLink23 = novoLink2.slice(0, -1)
            var novoLink24 = novoLink23.slice(0, -1)
            var novoLink3 = novoLink24.slice(0, -1)
            var novoLink4 = novoLink3.slice(0, -1)
        
        } else {
            var novoLink2 = novoLink1.slice(0, -1)
            var novoLink23 = novoLink2.slice(0, -1)
            var novoLink3 = novoLink23.slice(0, -1)
            var novoLink4 = novoLink3.slice(0, -1)
        }
        
        const imgProduto = document.getElementById('imgProduto')
        
        if(novoLink1.substr(-1) == 'e') {
            imgProduto.src = `${novoLink4}.jpeg`
        
        } else if(novoLink2.substr(-1) == 'j') {
            imgProduto.src = `${novoLink4}.jpg`
        
        } else {
            imgProduto.src = `${novoLink4}.png`
        }
        
    } img()

    //! img1
    let img1 = document.getElementById('img1')
    img1.src = sobreProduto2.imgProduto

    // * Vai alterar a img principal para a img1
    img1.addEventListener('click', () => {
        imgProduto.src = img1.src
        zoom()
    })

    //! img2
    let img2 = document.getElementById('img2')
    img2.src = imgProduto.src

    // * Vai alterar a img principal para a img2
    img2.addEventListener('click', () => {
        imgProduto.src = img2.src
        zoom() 
    })

    //! Vai add o titulo e a descrição
    document.getElementById('titulo').innerText = sobreProduto2.titulo
    document.getElementById('desc').innerText = sobreProduto2.desc

    //! Vai enviar uma msg ao vendedor informando qual é o produto
    if(sobreProduto2.titulo != 'Algo deu errado!') {
        let btnContato = document.getElementById('btnContato')
        btnContato.href=`https://api.whatsapp.com/send?phone=+55%2061%209906-3455&text=Estou interessado nesse produto: ${sobreProduto2.titulo}, link: ${imgProduto.src}`

    } else {
        document.getElementById('btns').style.display = 'none'
    }

    //!Vai criar o efeito de zoom nas imgs
    function zoom() {

        let small = document.querySelector("#small")
        let mask = document.querySelector("#mask")
        let big = document.querySelector("#big")
        let bigImg = document.querySelector("#big>img")
        let imgProduto = document.querySelector("#imgProduto")
    
        bigImg.src = imgProduto.src

        small.addEventListener("mouseenter",function(){
            if(document.defaultView.innerWidth > 700) {
                big.style.display = "block" 
            }
        })
        small.addEventListener("mouseleave",function(){
            big.style.display = "none" 
        })

        small.addEventListener("mousemove",function(event){
            try {
                let pos = small.getBoundingClientRect()
                let x = event.clientX -pos.x 
                let y = event.clientY - pos.y 
        
                if( x< 100 ){ x = 100}
                if( x > 400 ){  x = 400}
        
                ( y < 100 )&&( y = 100 )
                ( y > 400 )&&( y = 400 )
        
                mask.style.left = (x-100) + "px"
                mask.style.top = (y-100) + "px"
        
                bigImg.style.left = -(x-100)*2+"px"
                bigImg.style.top = -(y-100)*2+"px"

            } catch {}
        })
    } zoom()

    //! Vai add ao carrinho
    function addCarrinho(addAgain = false) {
        const carrinho1 = localStorage.getItem('carrinho')
        const carrinho2 = JSON.parse(carrinho1)

        try {
            for(let c = 0; c <= carrinho.length; c++) {
                if(sobreProduto2.titulo == carrinho2[c].titulo && sobreProduto2.desc == carrinho2[c].desc && addAgain == false) {
                    document.getElementById('infAddCarrinho').style.display = 'flex'
                    return

                } else if(addAgain != false) {
                    let produto = {
                        titulo: sobreProduto2.titulo,
                        desc: sobreProduto2.desc,
                        imgProduto: sobreProduto2.imgProduto
                    }
            
                    carrinho.push(produto)
                    let salvarCarrinho = JSON.stringify(carrinho)
                    localStorage.setItem('carrinho', salvarCarrinho)
            
                    document.getElementById('carrinho').className = 'animation'
            
                    setTimeout(() => {
                        document.getElementById('carrinho').className = ''
                    }, 700)

                    return
                }
            }

        } catch {

            let produto = {
                titulo: sobreProduto2.titulo,
                desc: sobreProduto2.desc,
                imgProduto: sobreProduto2.imgProduto
            }
    
            carrinho.push(produto)
            let salvarCarrinho = JSON.stringify(carrinho)
            localStorage.setItem('carrinho', salvarCarrinho)
    
            document.getElementById('carrinho').className = 'animation'
    
            setTimeout(() => {
                document.getElementById('carrinho').className = ''
            }, 700)
        }
    }

    //! Vai fachar a section que informa que o produto já está em seu carrinho
    function fecharInfCarrinho() {
        document.getElementById('infAddCarrinho').style.display = 'none'
    }
    
    //! Vai adicionar o produto de novo no carrinho
    function addAgain() {
        addCarrinho(true)
        fecharInfCarrinho()
    }
}
