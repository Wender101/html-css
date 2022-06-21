function abrirMenu() {
    const sombra = document.getElementById('sombra')
    const nav = document.querySelector('nav')
    sombra.style.display = 'block'
    nav.style.transition = '200ms left linear'
    nav.style.left = '0px'
}

function fecharMenu() {
    const sombra = document.getElementById('sombra')
    const nav = document.querySelector('nav')
    const sectionAddProduto = document.getElementById('addNovoproduto')
    const addCategoria = document.getElementById('addCategoria')
    sombra.style.display = 'none'
    nav.style.transition = '200ms left linear'
    nav.style.left = '-320px'
    sectionAddProduto.style.transition = '300ms top linear'
    sectionAddProduto.style.top = '-600px'
    addCategoria.style.transition = '400ms top linear'
    addCategoria.style.top = '-600px'
}


let logado = false
// Vai fazer o pop up de login aparecer ao clicar na tela
function abrirAbalogin() {
    login.style.transition = '300ms top linear'
    login.style.top = '150px'
    sombraCadastro.style.display = 'block'
}

// Vai fazer o pop up sumir
function fecharLogin() {
    login.style.transition = '300ms top linear'
    login.style.top = '-600px'
    sombraCadastro.style.display = 'none'
    cadastro.style.transition = '300ms top linear'
    cadastro.style.top = '-600px'
}

function fazerLogin() {
    const emailLogin = document.getElementById('emailLogin').value
    const senhaLogin = document.getElementById('senhaLogin').value
    const logado1 = localStorage.getItem('login');
    const logado2 = JSON.parse(logado1);

    if(emailLogin == 'wender@gmail.com' && senhaLogin == '321') {
        funcoesAdmin()
        fecharLogin()
        logado = true
        var logadoJSON = JSON.stringify(logado);
        localStorage.setItem('login', logadoJSON);
        location. reload()

    } else if(logado2 == true) {
        funcoesAdmin()
        fecharLogin()
        logado = true
        var logadoJSON = JSON.stringify(logado);
        localStorage.setItem('login', logadoJSON);

    } else {
        usuario()
        fecharLogin()
        logado = false
        var logadoJSON = JSON.stringify(logado);
        localStorage.setItem('login', logadoJSON);
    }
}
fazerLogin()

function funcoesAdmin() {
    const body = document.querySelector('body')

    //& btn 1
    const btn1 = document.createElement('div')
    btn1.id = 'add'
    btn1.innerText = '+'
    body.appendChild(btn1)

    // Ao clicar no botão1
    btn1.addEventListener('click', function() {
        const sombra = document.getElementById('sombra')
        const sectionAddProduto = document.getElementById('addNovoproduto')
        sombra.style.display = 'block'
        sectionAddProduto.style.transition = '300ms top linear'
        sectionAddProduto.style.top = '150px'
    
        const imgProduto = document.getElementById('imgProduto')
        const nomeProduto = document.getElementById('classeProduto')
        const descricaoProduto = document.getElementById('descricaoProduto')
        const valorProduto = document.getElementById('valorProduto')
    
        imgProduto.value = ''
        nomeProduto.value = ''
        descricaoProduto.value = ''
        valorProduto.value = ''
    })

    //& part1
    const addNovoproduto = document.createElement('section')
    addNovoproduto.id = 'addNovoproduto'

    const lImagem = document.createElement('label')
    const inputImage = document.createElement('input')
    const lClasse = document.createElement('label')
    const inputClasse = document.createElement('input')
    const lDescricao = document.createElement('label')
    const inputDesc = document.createElement('input')
    const lValor = document.createElement('label')
    const inputValor = document.createElement('input')
    const btn = document.createElement('button')
    btn.id = 'btnAddProduto'

    lImagem.innerText = 'Imagem'
    inputImage.id = 'imgProduto'
    inputImage.placeholder = 'Nome da imagem e formatação...'

    lClasse.innerText = 'Classe'
    inputClasse.id = 'classeProduto'
    inputClasse.placeholder = 'Classe do produto...'

    lDescricao.innerText = 'Descrição do produto'
    inputDesc.id = 'descricaoProduto'
    inputDesc.placeholder = 'Descrição do produto...'

    lValor.innerText = 'Valor do produto'
    inputValor.id = 'valorProduto'
    inputValor.placeholder = 'Valor do produto...'
    btn.innerText = 'Adicionar'

    addNovoproduto.appendChild(lImagem)
    addNovoproduto.appendChild(inputImage)
    addNovoproduto.appendChild(lClasse)
    addNovoproduto.appendChild(inputClasse)
    addNovoproduto.appendChild(lDescricao)
    addNovoproduto.appendChild(inputDesc)
    addNovoproduto.appendChild(lValor)
    addNovoproduto.appendChild(inputValor)
    addNovoproduto.appendChild(btn)
    body.appendChild(addNovoproduto)

    btn.addEventListener('click', () => {
        addProduto()
    })
    
    //& btn2
    const nav = document.querySelector('nav')
    const btn2 = document.createElement('div')
    btn2.innerText = '+'
    btn2.id = 'add2'
    nav.appendChild(btn2)
    btn2.addEventListener('click', () => {
        addCategoria()
    })

    //& part2
    const sAddCategoria = document.createElement('section')
    const lNome = document.createElement('label')
    const inputNomeCategoria = document.createElement('input')
    const btnCategoria = document.createElement('button')

    lNome.innerText = 'Nome'
    inputNomeCategoria.placeholder = 'Nome da Categoria...'
    inputNomeCategoria.id = 'nomeCategoria'
    btnCategoria.innerText = 'Adicionar'
    sAddCategoria.id = 'addCategoria'
    sAddCategoria.appendChild(lNome)
    sAddCategoria.appendChild(inputNomeCategoria)
    sAddCategoria.appendChild(btnCategoria)
    body.appendChild(sAddCategoria)

    btnCategoria.addEventListener('click', () => {
        addNovaCategoria()
    })

    // puxando da memória do navegador
    const categorias1 = localStorage.getItem('categoriasSalvas');
    const categorias2 = JSON.parse(categorias1);
    categorias2.sort()

    const salvarCategorias = []
    let idCategoria = 0

    for(let c = 0; c < categorias2.length; c++) {
        salvarCategorias.push(categorias2[c])
        idCategoria = c
        criaCategoria(categorias2[c], idCategoria)
    }

    const produtos1 = localStorage.getItem('produtosSalvos');
    const produtos2 = JSON.parse(produtos1);

    const salvarProdutos = []
    let idProduto = 0

    for(let c = 0; c < produtos2.length; c++) {
        salvarProdutos.push(produtos2[c])
        idProduto = produtos2[c] + 1
        criarProdutos(produtos2[c].img, produtos2[c].classe, produtos2[c].desc, produtos2[c].valor)
    }

    // Vai excluir a categoria
    ul.addEventListener('click', (e) => {
        const el = e.target.id
        const btnX = document.getElementById(el)
        const li = document.getElementById(el)
        btnX.addEventListener('click', () => {
            li.remove()
            salvarCategorias.splice(el, 1)
            var categoriasJSON = JSON.stringify(salvarCategorias);
            localStorage.setItem('categoriasSalvas', categoriasJSON);
        })
    })



    // Função que vai adicionar o produto
    // Valores dos inputs
    function addProduto() {
        const imgProduto = document.getElementById('imgProduto').value
        const classeProduto = document.getElementById('classeProduto').value
        const descricaoProduto = document.getElementById('descricaoProduto').value
        const valorProduto = document.getElementById('valorProduto').value

        if(imgProduto == 0 || classeProduto == 0 || descricaoProduto == 0 || valorProduto == 0) {
            alert('Preencha todos os campos para fazer o registro do produto.')
            
        } else {
            criarProdutos(imgProduto, classeProduto, descricaoProduto, valorProduto)
            
            const produtos = {
                img: imgProduto,
                classe: classeProduto,
                desc: descricaoProduto,
                valor: valorProduto,
                id: idProduto
            }
            
            salvarProdutos.push(produtos)

            var prdutosJSON = JSON.stringify(salvarProdutos);
            localStorage.setItem('produtosSalvos', prdutosJSON);
            idProduto++

            fecharMenu()
        }

    }

    // Função de criar os produtos
    function criarProdutos(imagem, classe, desc, valor, idProduto) {
        const main = document.querySelector('main')
        const div = document.createElement('div')
        const a = document.createElement('a')
        const img = document.createElement('div')
        const p = document.createElement('p')
        const strong = document.createElement('strong')

        img.style.backgroundImage = `url(assets/img/produtos/${imagem})`
        a.href = 'sobre-o-produto.html'
        p.innerText = desc
        strong.innerText = `R$ ${valor}`
        div.id = idProduto

        a.appendChild(img)
        div.appendChild(a)
        div.appendChild(p)
        div.appendChild(strong)
        main.appendChild(div)

        // Vai ir pra pág 'sobre o produto'
        img.addEventListener('click', (e) => {
            const el = e.target
            const produtos = {
                img: imagem,
                classe: classe,
                desc: desc,
                valor: valor
            }

            var sobreJSON = JSON.stringify(produtos);
            localStorage.setItem('sobre', sobreJSON);

            var pesquisaJSON = JSON.stringify(classe);
            localStorage.setItem('pesquisaSalva', pesquisaJSON);
        }) 
    }

    // função que sera ativada ao clicar no btn adicionar nova categoria
    function addCategoria() {
        const addCategoria = document.getElementById('addCategoria')
        addCategoria.style.transition = '400ms top linear'
        addCategoria.style.top = '250px'
        
        const inputCategoria = document.getElementById('nomeCategoria')
        inputCategoria.value = ''
    }

    // Função responsavel por adicionar uma nova categoria
    function addNovaCategoria() {
        const addCategoria = document.getElementById('addCategoria')
        addCategoria.style.transition = '400ms top linear'
        addCategoria.style.top = '-600px'

        // Valor do input
        const inputCategoria = document.getElementById('nomeCategoria').value

        criaCategoria(inputCategoria, idCategoria)
        idCategoria++

        // Vai salvar a categoria adicionada
        salvarCategorias.push(inputCategoria)
        var categoriasJSON = JSON.stringify(salvarCategorias);
        localStorage.setItem('categoriasSalvas', categoriasJSON);
        
    }

    // Criar a categoria
    function criaCategoria(nome, id) {
        
        const li = document.createElement('li')
        const a = document.createElement('a')
        const btnX = document.createElement('button')
        const x = document.createElement('p')

        li.id = id
        btnX.id = id
        btnX.className = 'xad'
        x.innerText = 'X'
        a.href = 'produtos.html'
        a.innerText = nome
        btnX.appendChild(x)
        li.appendChild(a)
        li.appendChild(btnX)
        ul.appendChild(li)
    }

    // Vai excluir o produto
    const main = document.querySelector('main')
    main.addEventListener('click', (e) => {
        const el = e.target.id
        const btnX = document.getElementById(el)
        const div = document.getElementById(el)
        btnX.addEventListener('click', () => {
            div.remove()
            salvarProdutos.splice(el, 1)
            var prdutosJSON = JSON.stringify(salvarProdutos);
            localStorage.setItem('produtosSalvos', prdutosJSON);
        })
    })
}

function usuario() {
    // puxando da memória do navegador
    const categorias1 = localStorage.getItem('categoriasSalvas');
    const categorias2 = JSON.parse(categorias1);
    categorias2.sort()

    const salvarCategorias = []
    let idCategoria = 0

    for(let c = 0; c < categorias2.length; c++) {
        salvarCategorias.push(categorias2[c])
        idCategoria = c
        criaCategoria(categorias2[c], idCategoria)
    }

    const produtos1 = localStorage.getItem('produtosSalvos');
    const produtos2 = JSON.parse(produtos1);

    const salvarProdutos = []
    let idProduto = 0

    for(let c = 0; c < produtos2.length; c++) {
        salvarProdutos.push(produtos2[c])
        idProduto = produtos2[c] + 1
        criarProdutos(produtos2[c].img, produtos2[c].classe, produtos2[c].desc, produtos2[c].valor)
    }

    // Função de criar os produtos
    function criarProdutos(imagem, classe, desc, valor) {
    const main = document.querySelector('main')
    const div = document.createElement('div')
    const a = document.createElement('a')
    const img = document.createElement('div')
    const p = document.createElement('p')
    const strong = document.createElement('strong')

    img.style.backgroundImage = `url(assets/img/produtos/${imagem})`
    a.href = 'sobre-o-produto.html'
    p.innerText = desc
    strong.innerText = `R$ ${valor}`

    a.appendChild(img)
    div.appendChild(a)
    div.appendChild(p)
    div.appendChild(strong)
    main.appendChild(div)

    // Vai ir pra pág 'sobre o produto'
    img.addEventListener('click', (e) => {
        const el = e.target
        const produtos = {
            img: imagem,
            classe: classe,
            desc: desc,
            valor: valor
        }

        var sobreJSON = JSON.stringify(produtos);
        localStorage.setItem('sobre', sobreJSON);

        var pesquisaJSON = JSON.stringify(classe);
        localStorage.setItem('pesquisaSalva', pesquisaJSON);
    }) 
    }

    // função que sera ativada ao clicar no btn adicionar nova categoria
    function addCategoria() {
        const addCategoria = document.getElementById('addCategoria')
        addCategoria.style.transition = '400ms top linear'
        addCategoria.style.top = '250px'
        
        const inputCategoria = document.getElementById('nomeCategoria')
        inputCategoria.value = ''
    }

    // Função responsavel por adicionar uma nova categoria
    function addNovaCategoria() {
        const addCategoria = document.getElementById('addCategoria')
        addCategoria.style.transition = '400ms top linear'
        addCategoria.style.top = '-600px'

        // Valor do input
        const inputCategoria = document.getElementById('nomeCategoria').value

        criaCategoria(inputCategoria, idCategoria)
        idCategoria++

        // Vai salvar a categoria adicionada
        salvarCategorias.push(inputCategoria)
        var categoriasJSON = JSON.stringify(salvarCategorias);
        localStorage.setItem('categoriasSalvas', categoriasJSON);
        
    }

    // Criar a categoria
    function criaCategoria(nome, id) {
        const ul = document.querySelector('ul')
        const li = document.createElement('li')
        const a = document.createElement('a')

        li.id = id
        a.href = 'produtos.html'
        a.innerText = nome
        li.appendChild(a)
        ul.appendChild(li)
    }
}

//* Amostras
function amostras() {
    // puxando da memória do navegador
    const categorias1 = localStorage.getItem('categoriasSalvas');
    const categorias2 = JSON.parse(categorias1);
    categorias2.sort()
    const salvarCategorias = []

    for(let c = 0; c < categorias2.length; c++) {
        salvarCategorias.push(categorias2[c])
    }

    const produtos1 = localStorage.getItem('produtosSalvos');
    const produtos2 = JSON.parse(produtos1);
    const salvarProdutos = []

    for(let c = 0; c < produtos2.length; c++) {
        salvarProdutos.push(produtos2[c])
    }

    let indíceCategoria = 0
    for(let c = 0; c < salvarProdutos.length; c++) {
        if(salvarCategorias[indíceCategoria] == salvarProdutos[c].classe) {
            criarProdutoAmostra(salvarProdutos[c].img, salvarCategorias[indíceCategoria])
            c = -1
            indíceCategoria++
        }

    }
}

function criarProdutoAmostra(img, classe) {
    const sectionamostras = document.getElementById('amostras')
    const a = document.createElement('a')
    const produto = document.createElement('div')
    a.href = 'produtos.html'
    produto.style.backgroundImage = `url(assets/img/produtos/${img})`
    a.appendChild(produto)
    sectionamostras.appendChild(a)

    produto.addEventListener('click', () => {
        var pesquisaJSON = JSON.stringify(classe);
        localStorage.setItem('pesquisaSalva', pesquisaJSON);
    })
}
amostras()