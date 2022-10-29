//! Function original
function removerDoCarrinho() {
    let feitoRemover2 = false
    auth.onAuthStateChanged((valEmail) => {
        db.collection('Carrinho').onSnapshot((data) => {
            data.docs.map(function(valCarrinho) {
                let p = valCarrinho.data()
                let idProdutoExcluido = arrayCarrinho[idSpan]
                if(p.email == valEmail.email && feitoRemover2 == false) {

                    //! Vai descontar o preço do produto removido no valor total
                    db.collection('Produtos').onSnapshot((data) => {
                        data.docs.map(function(valorProduto) {
                            let pProduto = valorProduto.data()
                            
                            if(idProdutoExcluido.id == pProduto.id) {
                                
                                //! Vai calcular o valor com o desconto implementado
                                let valor2 = parseFloat(pProduto.valor)
                                let desconto2 = parseFloat(pProduto.desconto)
                                valorAMenos = (((desconto2 * valor2) / 100) - valor2) * -1
                                
                                let res = parseFloat(ValorComDesconto.toFixed(2)) - parseFloat(valorAMenos.toFixed(2))
                                ValorComDesconto = res
                                document.getElementById('total').innerText = `Valor total: R$${res.toFixed(2)}`
                            }
                        })
                    })

                    //! Vai remover o produto do banco de dados e da tela do usuario
                    arrayCarrinho.splice(idSpan, 1)
                    db.collection('Carrinho').doc(valCarrinho.id).update({carrinho: arrayCarrinho})
                    fecharInfRemover()
                    document.getElementById('carregando').style.display = 'flex'
                    id2--

                    //! Vai apagar o produto da tela do user
                    document.getElementById('containerProduto' + idSpan).remove()
                    feitoRemover = true
                    feitoRemover2 = true
                }

            })
        })
    })
}

// //! Vai remover o produto do carrinho
function removerDoCarrinho() {
    let feitoRemover2 = false
    auth.onAuthStateChanged((valEmail) => {
        db.collection('Carrinho').onSnapshot((data) => {
            data.docs.map(function(valCarrinho) {
                let p = valCarrinho.data()

                if(p.email == valEmail.email && feitoRemover2 == false) {

                    //! Vai descontar o preço do produto removido no valor total
                    db.collection('Produtos').onSnapshot((data) => {
                        data.docs.map(function(valorProduto) {
                            let pProduto = valorProduto.data()
                            
                            if(arrayCarrinho[idSpan].id == pProduto.id) {
                                
                                //! Vai calcular o valor com o desconto implementado
                                let valor2 = parseFloat(pProduto.valor)
                                let desconto2 = parseFloat(pProduto.desconto)
                                valorAMenos = (((desconto2 * valor2) / 100) - valor2) * -1
                                
                                let res = parseFloat(ValorComDesconto.toFixed(2)) - parseFloat(valorAMenos.toFixed(2))
                                ValorComDesconto = res
                                document.getElementById('total').innerText = `Valor total: R$${res.toFixed(2)}`
                            }
                        })
                    })

                    //! Vai remover o produto do banco de dados e da tela do usuario
                    arrayCarrinho.splice(idSpan, 1)
                    db.collection('Carrinho').doc(valCarrinho.id).update({carrinho: arrayCarrinho})
                    fecharInfRemover()
                    document.getElementById('carregando').style.display = 'flex'
                    id2--

                    //! Vai apagar o produto da tela do user
                    document.getElementById('containerProduto' + idSpan).remove()
                    feitoRemover = true
                    feitoRemover2 = true
                }

            })
        })
    })
}




//! Function Teste
function removerDoCarrinho() {
    let feitoRemover2 = false
    auth.onAuthStateChanged((valEmail) => {
        db.collection('Carrinho').onSnapshot((data) => {
            data.docs.map(function(valCarrinho) {
                let pCarrinho = valCarrinho.data()

                if(pCarrinho.email == valEmail.email && feitoRemover2 == false) {

                    arrayCarrinho.splice(idSpan, 1)
                    db.collection('Carrinho').doc(valCarrinho.id).update({carrinho: arrayCarrinho})
                    fecharInfRemover()
                    document.getElementById('carregando').style.display = 'flex'
                    id2--
                    let idDoProduto = arrayCarrinho[id2].id
                    
                    //! Vai apagar o produto da tela do user
                    document.getElementById('containerProduto' + idSpan).remove()
                    
                    db.collection('Produtos').onSnapshot((data) => {
                        data.docs.map(function(valorProduto) {
                            let p = valorProduto.data()
                            
                            if(idDoProduto == p.id) {
                                
                                //! Vai calcular o valor com o desconto implementado
                                let valor2 = parseFloat(p.valor)
                                let desconto2 = parseFloat(p.desconto)
                                valorAMenos = (((desconto2 * valor2) / 100) - valor2) * -1
                                
                                let res = parseFloat(ValorComDesconto.toFixed(2)) - parseFloat(valorAMenos.toFixed(2))
                                ValorComDesconto = res
                                document.getElementById('total').innerText = `Valor total: R$${res.toFixed(2)}`
                            }
                        })
                    })
                    feitoRemover = true
                    feitoRemover2 = true
                }

            })
        })
    })
}