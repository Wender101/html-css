let main  = document.querySelector('main')
//? Vai abrir o pop-up de adicioanar um produto
function abrirAddProduto() {
    document.getElementById('popUpAddProd').style.display = 'block'
    document.querySelector('html').style.overflow = 'hidden'
}

//? Vai fechar o pop-up de adicioanar um produto
function fecharPopUp() {
    document.getElementById('popUpAddProd').style.display = 'none'
    document.querySelector('html').style.overflow = 'auto'
    document.getElementById('AddBtn').style.display = 'block'
    document.getElementById('btnsAdemin').style.display = 'none'
    limpar()
}

//? Vai limpar os inputs de add
function limpar() {

    let imagem1 = document.getElementsByClassName('imgProd')[0].value = ''
    let imagem2 = document.getElementsByClassName('imgProd')[1].value = ''
    let imagem3 = document.getElementsByClassName('imgProd')[2].value = ''
    let imagem4 = document.getElementsByClassName('imgProd')[3].value = ''
    let name = document.getElementById('nomeProdutoAdd').value = ''
    let desccription = document.getElementById('descProd').value = ''
    let val = document.getElementById('valorProd').value = ''
    let descontoProd = document.getElementById('descontoInput').value = ''

    let imgEX1 = document.getElementsByClassName('imgEX')[0].src = ''
    let imgEX2 = document.getElementsByClassName('imgEX')[1].src = ''
    let imgEX3 = document.getElementsByClassName('imgEX')[2].src = ''
    let imgEX4 = document.getElementsByClassName('imgEX')[3].src = ''
    let imgPrincipal = document.getElementsByClassName('imgPrincipal')[0].src = ''
    let imgPrincipal2 = document.getElementsByClassName('imgPrincipal')[1].src = ''
    let idDoProduto = document.getElementById('idDoProduto').value = ''
    let tags = document.getElementById('tags').value = ''
    let descDetalhada = document.getElementById('descDetalhada').value = ''
    let selecCategoria = document.getElementById('selecCategoria').value = ''
}

//? Vai adicionar as informações do produto
let valInput = 0
let valInput2 = 0
let valInput3 = 0
let valInput4 = 0
let valInput5 = 0
let prontoPraAdd = false
setInterval(() => {
    for (let c = 0; c < 4; c++) {
        try {
            let inputImg = document.getElementsByClassName('imgProd')[c].value
            let nameProd = document.getElementById('nomeProdutoAdd').value
            let desc = document.getElementById('descProd').value
            let valorProd = document.getElementById('valorProd').value
            let descontoInput = document.getElementById('descontoInput').value
            let idDoProduto = document.getElementById('idDoProduto').value
            let descDetalhada = document.getElementById('descDetalhada').value
            let selecCategoria = document.getElementById('selecCategoria').value
    
            if(inputImg.length != valInput) {
                valInput = inputImg.length
                let imgEX = document.getElementsByClassName('imgEX')[c]
                document.getElementsByClassName('imgPrincipal')[0].src = document.getElementsByClassName('imgProd')[0].value
                document.getElementsByClassName('imgPrincipal')[1].src = document.getElementsByClassName('imgProd')[0].value
                try {
                    imgEX.src = inputImg
                    
                } catch (error) {}
            }

            if(nameProd.length != valInput2) {
                valInput2 = nameProd.length
                document.getElementsByClassName('nameProd')[0].innerHTML = nameProd

                document.getElementsByClassName('nameProd')[1].innerHTML = nameProd
            }

            if(desc.length != valInput3) {
                if(desc.length == 236 && valInput3 != desc.length) {
                    alert('Você excedeu o máximo de caracteres na descrição resumida')
                } else {
                    document.getElementById('desc').innerText = desc
                }
                valInput3 = desc.length
            }

            if(descDetalhada.length != valInput4) {
                valInput4 = descDetalhada.length
                document.getElementById('descricaoP').innerHTML = descDetalhada
            }

            if(descontoInput.length != valInput5) {
                valInput5 = descontoInput.length
                if(descontoInput <= 0) {
                    document.getElementById('qDesconto').innerText = '0% OFF'
                } else {
                    document.getElementById('qDesconto').innerText = descontoInput + '%'
                }
            }

            // //? Vai calcular o desconto
            if(valorProd.length >= 0 || descontoInput.length != valInput5) {
                if(descontoInput <= 0) {
                    descontoInput = 0
                }
                let valorComDesconto = (((descontoInput * valorProd) / 100) - valorProd) * -1
                var res = valorComDesconto
                if(descontoInput != 0) {
                    res = (valorProd - valorComDesconto) + valorComDesconto
                }

                document.getElementById('valorNormal').innerText = 'R$' + res
                document.getElementsByClassName('valorProdAdd')[0].innerText = 'R$' + valorComDesconto.toFixed(2)
                document.getElementsByClassName('valorProdAdd')[1].innerText = 'R$' + valorComDesconto.toFixed(2)
                document.getElementById('valorSemDc').innerText = 'R$' + res.toFixed(2)
                document.getElementById('salvo').innerText = 'Salvo - R$' + (res - valorComDesconto).toFixed(2)
            }

            //? Vai adcionar uma nova categoria
            if(selecCategoria == 'Adcionar Nova Categoria') {
                let addNovaCategoria = document.getElementById('addNovaCategoria')
                addNovaCategoria.style.display = 'flex'
                
                let btnCriarCat = document.getElementById('criarCat')
                btnCriarCat.addEventListener('click', () => {
                        if(selecCategoria == 'Adcionar Nova Categoria') {
                            let select = document.getElementById('selecCategoria')
                            let novoCatAdded = document.getElementById('novoCatAdded')
                            novoCatAdded.value = document.getElementById('novaCat').value
                            novoCatAdded.innerText = document.getElementById('novaCat').value
                            select.value = document.getElementById('novaCat').value
                           
                            addNovaCategoria.style.display = 'none'
                        }
                })
            }

            //? Vai chevcar se todos os inputs importantes foram respondidos
            if(document.getElementsByClassName('imgProd')[0].value.length > 0 && nameProd.length > 0 && descDetalhada.length > 0 && desc.length > 0 && desc.length <= 236 && selecCategoria != 'Adcionar Nova Categoria' && selecCategoria != '...' && valorProd.length > 0 && idDoProduto.length > 0) {
                prontoPraAdd = true
                document.getElementById('AddBtn').style.background = '#008ecc'
                document.getElementById('AddBtn').style.cursor = 'pointer'
            } else {
                prontoPraAdd = false
                document.getElementById('AddBtn').style.background = '#666'
                document.getElementById('AddBtn').style.cursor = 'auto'
            }
        } catch {}
    }
}, 100)

//? Vai adicionar o produto
function addProduto() {
    if(prontoPraAdd == true) {
        let imagem1 = document.getElementsByClassName('imgProd')[0].value
        let imagem2 = document.getElementsByClassName('imgProd')[1].value
        let imagem3 = document.getElementsByClassName('imgProd')[2].value
        let imagem4 = document.getElementsByClassName('imgProd')[3].value
        let name = document.getElementById('nomeProdutoAdd').value
        let desccription = document.getElementById('descProd').value
        let val = document.getElementById('valorProd').value
        let descontoProd = document.getElementById('descontoInput').value
        let idDoProduto = document.getElementById('idDoProduto').value
        let descDetalhada = document.getElementById('descDetalhada').value
        let tags = document.getElementById('tags').value
        let selecCategoria = document.getElementById('selecCategoria').value
        
        let obj = {
            Img1: imagem1,
            Img2: imagem2,
            Img3: imagem3,
            Img4: imagem4,
            Nome: name,
            Desc: desccription,
            DescDetalhada: descDetalhada,
            Valor: val,
            Desconto: descontoProd,
            Id: idDoProduto,
            Tags: tags,
            Categoria: selecCategoria
        }

        db.collection('Produtos').add(obj)
        fecharPopUp()
        main.innerHTML = ''
    }
}

//? Vai carregar o produto na tela
function carregarProduto() {
    let carregado = false
    let recarregado = false
    main.innerHTML = ''

    db.collection('Produtos').onSnapshot((data) => {
        data.docs.map(function(val) {
            let Produtos = val.data()

            if(carregado == false) {
                setTimeout(() => {
                    carregado = true
                }, 3000)

                criaProduto(Produtos.Img1, Produtos.Img2, Produtos.Img3, Produtos.Img4, Produtos.Nome, Produtos.Desc, Produtos.Tags, Produtos.DescDetalhada, Produtos.Categoria, Produtos.Valor, Produtos.Desconto, Produtos.Id, Produtos.Estado)
            } else {
                if(recarregado == false) {
                    recarregado = true
                    main.innerHTML = ''
                    carregarProduto()
                }
            }
        })
    })
} carregarProduto()

function criaProduto(Img1, Img2, Img3, Img4, Nome, Desc, Tags, DescDetalhada, Categoria, Valor, Desconto, Id, Estado) {
    let prod = document.createElement('div')
    let localImg = document.createElement('div')
    let imgProduto = document.createElement('img')
    let sobreProd = document.createElement('div')
    let nameProd = document.createElement('p')
    let p = document.createElement('p')
    let valorStrong = document.createElement('strong')
    let valorSemDescontoT = document.createElement('span')
    let valorSalvo = document.createElement('span')
    let divEdit = document.createElement('div')
    let spanEdit = document.createElement('span')
    let chat = document.createElement('button')
    let descontoPartProd = document.createElement('div')
    let spanDesconto = document.createElement('span')

    //? Class
    if(Estado == 'Suspenso') {
        prod.className = 'suspenso'
        let info = document.createElement('p')
        info.className = 'suspensoAviso'
        info.title = 'Produto suspenso'
        prod.appendChild(info)
    } else {
        prod.className = 'prod'
    }

    prod.id = Id
    chat.className = 'openChat'
    descontoPartProd.className = 'descontoPartProd'
    chat.id = 'chat-' + Id
    spanEdit.className = 'spanEdit'
    divEdit.className = 'divEdit'
    localImg.className = 'localImg'
    imgProduto.className = 'imgProduto'
    sobreProd.className = 'sobreProd'
    nameProd.className = 'nameProd'
    valorStrong.className = 'valor'
    valorSemDescontoT.className = 'valorSemDescontoT'
    valorSalvo.className = 'valorSalvo'

    //?---
    imgProduto.src = Img1
    nameProd.innerText = Nome

    if(Desconto > 0) {
        prod.style.borderRadius = ' 0px 70px 0px 0px'
        localImg.style.borderRadius = ' 0px 16px 0px 0px'
        spanDesconto.innerText = `${Desconto}% OFF`
        descontoPartProd.style.display = 'flex'
    } else {
        valorSalvo.style.opacity = '0'
    }


    if(Desconto <= 0) {
        Desconto = 0
    }
    let valorComDesconto = (((Desconto * Valor) / 100) - Valor) * -1
    var res = valorComDesconto
    if(Desconto != 0) {
        res = (Valor - valorComDesconto) + valorComDesconto
    }

    valorStrong.innerText = 'R$' + valorComDesconto.toFixed(2)
    valorSemDescontoT.innerText = 'R$' + parseInt(Valor).toFixed(2)
    valorSalvo.innerText = 'Salvo - R$' + (res - valorComDesconto).toFixed(2)
    
    //? AppendChild
    divEdit.appendChild(spanEdit)
    p.appendChild(valorStrong)
    p.appendChild(valorSemDescontoT)
    localImg.appendChild(imgProduto)
    sobreProd.appendChild(nameProd)
    sobreProd.appendChild(p)
    sobreProd.appendChild(valorSalvo)
    prod.appendChild(chat)
    prod.appendChild(divEdit)
    descontoPartProd.appendChild(spanDesconto)
    prod.appendChild(descontoPartProd)
    prod.appendChild(localImg)
    prod.appendChild(sobreProd)
    main.appendChild(prod)

    //? Funções de click
    prod.addEventListener('click', (e) => {
        let el = e.target.className
        if(el != 'divEdit' && el != 'spanEdit') {

            let pDescEnviar = Desc
            pDescEnviar = pDescEnviar.replace(/[`~!@#$%^&*()_\-+=\[\]{};:'"\\|\/,.<>?\s]/g, ' ').toLowerCase()
            pDescEnviar = pDescEnviar.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
            pDescEnviar = pDescEnviar.replace(/^\s+|\s+$/gm,'')
            pDescEnviar = pDescEnviar.replace(/\s+/g, '-')
            let array = [pDescEnviar, Id]
            localStorage.setItem('sobreProduto', JSON.stringify(array))
            if(location.host == '127.0.0.1:5500') {
                location.pathname = '/Sobre-Produto.html'
                
            } else if(location.host == 'wender101.github.io') {
                location.href = 'https://wender101.github.io/html-css/desafio/EDStore/Sobre-Produto.html'
            }
        }
    })

    divEdit.addEventListener('click', () => {
        editarProduto(Img1, Img2, Img3, Img4, Nome, Desc, Tags, DescDetalhada, Categoria, Valor, Desconto, Id)
    })
}

//? Vai indicar quais produtos tem perguntas não respondidas
db.collection('User').onSnapshot((data) => {
    data.docs.map(function(val) {
        let User = val.data()
        for(let c = 0; c < User.Chat.length; c++) {
            
            try {
                if(User.Chat[c].Resposta == '...') {
                    document.getElementById(`chat-${User.Chat[c].Id}`).style.display = 'block'
                }
            } catch {}
        }
    })
})


//? Vai criar as categorias 
function criaCategorias() {
    let todasAsCategorias = ['...']
    db.collection('Produtos').onSnapshot((data) => {
        data.docs.map(function(val) {
            let Produtos = val.data()
            
            let jaTemEssaCategoria = false
            for(let c = 0; c <= todasAsCategorias.length + 1; c++) {
                try {
                    if(todasAsCategorias[c] == Produtos.Categoria) {
                        jaTemEssaCategoria = true
                        
                    } else if(c + 1 == todasAsCategorias.length && jaTemEssaCategoria == false) {
                        todasAsCategorias.push(Produtos.Categoria)
                        let select = document.getElementById('selecCategoria')
                        let option = document.createElement('option')
                        option.value = Produtos.Categoria
                        option.innerText = Produtos.Categoria
                        select.appendChild(option)
                    }
                } catch (error) {
                    console.warn(error)
                }
            }
        })
    })
} criaCategorias()

//? Editar Produto
let valId
function editarProduto(Img1 ,Img2, Img3, Img4, Nome, Desc, Tags, DescDetalhada, categoria, Valor, Desconto, Id) {
    let editado = false
    db.collection('Produtos').onSnapshot((data) => {
        data.docs.map(function(val) {
            let Produtos = val.data()

            if(Produtos.Id == Id && editado == false) {
                editado = true
                valId = val.id
                abrirAddProduto()
                document.getElementById('AddBtn').style.display = 'none'
                document.getElementById('btnsAdemin').style.display = 'flex'
                let salveEdit = document.getElementById('salveEdit')

                let imagem1 = document.getElementsByClassName('imgProd')[0].value = Img1
                let imagem2 = document.getElementsByClassName('imgProd')[1].value = Img2
                let imagem3 = document.getElementsByClassName('imgProd')[2].value = Img3
                let imagem4 = document.getElementsByClassName('imgProd')[3].value = Img4
                let name = document.getElementById('nomeProdutoAdd').value = Nome
                let desccription = document.getElementById('descProd').value = Desc
                let valor = document.getElementById('valorProd').value = Valor
                let descontoProd = document.getElementById('descontoInput').value = Desconto
                let imgEX1 = document.getElementsByClassName('imgEX')[0].src = Img1
                let imgEX2 = document.getElementsByClassName('imgEX')[1].src = Img2
                let imgEX3 = document.getElementsByClassName('imgEX')[2].src = Img3
                let imgEX4 = document.getElementsByClassName('imgEX')[3].src = Img4
                let imgPrincipal = document.getElementsByClassName('imgPrincipal')[0].src = Img1
                let imgPrincipal2 = document.getElementsByClassName('imgPrincipal')[1].src = Img2
                let idDoProduto = document.getElementById('idDoProduto').value = Id
                let tags = document.getElementById('tags').value = Tags
                let descDetalhada = document.getElementById('descDetalhada').value = DescDetalhada
                let selecCategoria = document.getElementById('selecCategoria').value = categoria

                if(Produtos.Estado == 'Suspenso') {
                    document.getElementById('suspenderProd').style.display = 'none'
                    document.getElementById('disponibilizarProd').style.display = 'block'
                } else {
                    document.getElementById('suspenderProd').style.display = 'block'
                    document.getElementById('disponibilizarProd').style.display = 'none'
                }
            }

            salveEdit.addEventListener('click', () => {
                salvarEdit()
            })
        })
    })
}

//? Salvar Alteração
function salvarEdit() {
    document.getElementById('carregando').style.display = 'flex'

    let imagem1 = document.getElementsByClassName('imgProd')[0].value
    let imagem2 = document.getElementsByClassName('imgProd')[1].value
    let imagem3 = document.getElementsByClassName('imgProd')[2].value
    let imagem4 = document.getElementsByClassName('imgProd')[3].value
    let name = document.getElementById('nomeProdutoAdd').value
    let desccription = document.getElementById('descProd').value
    let valor = document.getElementById('valorProd').value
    let descontoProd = document.getElementById('descontoInput').value
    let tags = document.getElementById('tags').value
    let descDetalhada = document.getElementById('descDetalhada').value
    let selecCategoria = document.getElementById('selecCategoria').value
    let idDoProduto = document.getElementById('idDoProduto').value

    db.collection('Produtos').doc(valId).update({Img1: imagem1 ,Img2: imagem2, Img3: imagem3, Img4: imagem4, Nome: name, Desc: desccription, Tags: tags, DescDetalhada: descDetalhada, Categoria: selecCategoria, Valor: valor, Desconto: descontoProd, Id: idDoProduto})

    setTimeout(() => {
        location.reload()
    }, 1000)
}

//? Vai perdir confirmação para excluir o produto
function ecluirProd() {
    document.getElementById('confirmarExcluir').style.display = 'flex'
}

//? Vai fechar a confirmação para excluir o produto
function fecharConfirmarExcluir() {
    document.getElementById('confirmarExcluir').style.display = 'none'
    document.getElementById('carregando').style.display = 'flex'
    setTimeout(() => {
        location.reload()
    }, 1000)
}

//? Vai excluir o produto
function ecluirProdutoConfimado() {
    db.collection('Produtos').doc(valId).delete()
    fecharConfirmarExcluir()
}

//? Chat responder
function informarPergunta() {
    db.collection('User').onSnapshot((data) => {
        data.docs.map(function(val) {
            let User = val.data()

            try {
                for(let c = 0; c < User.Chat.Perguntas.length; c++) {
                    if(User.Chat.Perguntas[c].Resposta == '...') {
                        document.getElementById(`chat-${User.Chat.Perguntas[c].Id}`).style.display = 'block'
                    }
                }
            } catch (error) {}
            
        })
    })
} informarPergunta()

//? Suspender o Produto 
function suspenderProd() {
    document.getElementById('carregando').style.display = 'flex'
    db.collection('Produtos').doc(valId).update({Estado: 'Suspenso'})
    setTimeout(() => {
        location.reload()
    }, 1000)
}

//? Vai disponibilizar o Produto suspenso 
function disponibilizarProd() {
    document.getElementById('carregando').style.display = 'flex'
    db.collection('Produtos').doc(valId).update({Estado: 'Disponível'})
    setTimeout(() => {
        location.reload()
    }, 1000)
}

function addNovoAdmin() {
    document.getElementById('popAddNovoAdmin').style.display = 'flex'
    addNovoAdministrador()
}

function addNovoAdministrador() {
    let emailCarregado = false
    document.getElementById('localEmailAdmin').innerHTML = ''
    db.collection('Admins').onSnapshot((data) => {
        data.docs.map(function(val) {
            let Admins = val.data()

            if(emailCarregado == false) {
                for(let c = 0; c < Admins.Email.length; c++) {
                    let localEmailAdmin = document.getElementById('localEmailAdmin')
                    emailCarregado = true
                    let p = document.createElement('p')
                    let span = document.createElement('span')
                    let img = document.createElement('img')
                    img.src = 'assets/img/icon/excluir.jpg'
                    span.appendChild(img)
                    p.innerText = `${Admins.Email[c]}`
                    p.appendChild(span)
                    localEmailAdmin.appendChild(p)

                    //? Vai remover a conta de admin
                    span.addEventListener('click', () => {
                        let salvo = false
                        db.collection('Admins').onSnapshot((data) => {
                            data.docs.map(function(val) {
                                let Admins = val.data()
                    
                                if(salvo == false) {
                                    salvo = true
                                    const emailsAdmin = Admins.Email
                                    emailsAdmin.splice(c, 1)
                                    db.collection('Admins').doc(val.id).update({Email: emailsAdmin})
                                    document.getElementById('popAddNovoAdmin').style.display = 'none'
                                    document.getElementById('emaiNovoAdminGGP').value = ''
                                }
                            })
                        })
                    })
                }
            }
        })
    })
}

let popAddNovoAdmin = document.getElementById('popAddNovoAdmin')
popAddNovoAdmin.addEventListener('click', (e) => {
    let el = e.target.id
    if(el == 'popAddNovoAdmin') {
        document.getElementById('popAddNovoAdmin').style.display = 'none'
        document.getElementById('emaiNovoAdminGGP').value = ''
    }
})

function addNovoAdminNoDB() {
    let salvo = false
    db.collection('Admins').onSnapshot((data) => {
        data.docs.map(function(val) {
            let Admins = val.data()

            if(salvo == false) {
                salvo = true
                let emaiNovoAdminGGP = document.getElementById('emaiNovoAdminGGP')
                const emailsAdmin = Admins.Email
                emailsAdmin.push(emaiNovoAdminGGP.value)
                db.collection('Admins').doc(val.id).update({Email: emailsAdmin})
            }
        })
    })

    document.getElementById('popAddNovoAdmin').style.display = 'none'
    setTimeout(() => {
        emaiNovoAdminGGP.value = ''
    }, 1000)
}

function suspenderSite() {
    document.getElementById('seuspenderSite').style.display = 'flex'
    let infoSuspenderSite = document.getElementById('infoSuspenderSite')

    if(estadoSite == 'Em Manutenção') {
        infoSuspenderSite.innerHTML = 'O site está fora do ar neste momento, caso deseje desfazer digite: <strong>No Ar</strong>'

    } else if(estadoSite == 'Normal') {
        infoSuspenderSite.innerHTML = 'O site ficará fora do ar para todos os usuário, apenas os administradores poderão navegar nele. Caso ainda deseje continuar digite: <strong>Suspender</strong>'
    }

    document.getElementById('seuspenderSite').addEventListener('click', (e) => {
        let el = e.target.id
        if(el == 'seuspenderSite') {
            document.getElementById('seuspenderSite').style.display = 'none'
        }
    })
}

function SuspenderSiteConfirmar() {
    let inputSuspender = document.getElementById('inputSuspender')
    let btnSuspenderSiteContinuar = document.getElementById('btnSuspenderSiteContinuar')
    if(inputSuspender.value == 'Suspender' && estadoSite == 'Normal') {
        btnSuspenderSiteContinuar.style.backgroundColor = 'red'

        btnSuspenderSiteContinuar.addEventListener('click', () => {
            if(inputSuspender.value == 'Suspender') {
                db.collection('Admins').onSnapshot((data) => {
                    data.docs.map(function(val) {
                        let Admins = val.data()
                        db.collection('Admins').doc(val.id).update({EmManutencao: true})
                        document.getElementById('seuspenderSite').style.display = 'none'
                        document.getElementById('btnSuspender').style.backgroundColor = 'red'
                        inputSuspender.value = ''
                        setTimeout(() => {
                            estadoSite = 'Em Manutenção'
                        }, 100)
                    })
                })
            }
        })

    } else if(inputSuspender.value == 'No Ar' && estadoSite == 'Em Manutenção') {
        btnSuspenderSiteContinuar.style.backgroundColor = 'var(--cor4)'

        btnSuspenderSiteContinuar.addEventListener('click', () => {
            if(inputSuspender.value == 'No Ar') {
                db.collection('Admins').onSnapshot((data) => {
                    data.docs.map(function(val) {
                        let Admins = val.data()
                        db.collection('Admins').doc(val.id).update({EmManutencao: false})
                        document.getElementById('seuspenderSite').style.display = 'none'
                        setTimeout(() => {
                           location.reload()
                        }, 500)
                    })
                })
            }
        })

    } else {
        btnSuspenderSiteContinuar.style.backgroundColor = 'var(--cor6)'
    }
}

//? Vai adicionar os banners
function abrirConfigBanner() {

}

let inputImagemAltaEscala = document.getElementById('inputImagemAltaEscala')
let inputImagemPequenaEscala = document.getElementById('inputImagemPequenaEscala')

//? Vai fechar o add banner 
function fecharAddBanner() {
    document.getElementById('editarBanner').style.display = 'none'
    document.getElementById('editarBannerBtn').innerText = 'Editar'
    setTimeout(() => {
        inputImagemAltaEscala.value = ''
        inputImagemPequenaEscala.value = ''
    }, 500)
}

function editBanner() {
    let editarBanner = document.getElementById('editarBannerBtn')
    if(editarBanner.innerText == 'Editar') {
        inputImagemAltaEscala.value = cloneBanner[parseInt(bannerSelect)].imagemAltaEscala
        inputImagemPequenaEscala.value = cloneBanner[parseInt(bannerSelect)].imagemPequenaEscala
        editarBanner.innerText = 'Salvar'

    } else {
        cloneBanner[parseInt(bannerSelect)].imagemAltaEscala = inputImagemAltaEscala.value
        cloneBanner[parseInt(bannerSelect)].imagemPequenaEscala = inputImagemPequenaEscala.value
        editarBanner.innerText = 'Editar'
        salvarEditBanner()
        fecharAddBanner()
    }
}

function addNovoBanner() {
    contadorBanners++
    let obj = {
        id: contadorBanners,
        imagemAltaEscala: inputImagemAltaEscala.value,
        imagemPequenaEscala: inputImagemPequenaEscala.value
    }

    cloneBanner.push(obj)
    salvarEditBanner()
}

function excluirBanner() {
    cloneBanner.splice(parseInt(bannerSelect), 1)
    document.getElementById('carregando').style.display = 'flex'
    //salvarEditBanner()
}

function salvarEditBanner() {
    db.collection('Banners').doc('NJ4rSz7FKLuIr2GJFCH7').update({Banner: cloneBanner})
    setTimeout(() => {
        location.reload()
    }, 1000)
}