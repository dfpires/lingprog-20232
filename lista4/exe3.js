function exe3(){
    let codigos = []
    let estoque = []
    // etrada de dados
    for(let i=0;i<10;i++){
        codigos.push(Number(prompt(`Informe o código do produto ${i+1}`)))
        estoque.push(Number(prompt(`Informe a quantidade em estoque do produto ${i+1}`)))
    }
    // compra por um cliente
    let cliente = Number(prompt(`Informe o código do cliente que deseja comprar`))
    do {
        let produto = Number(prompt(`Informe o código do produto que deseja comprar`))
        let qtde = Number(prompt(`Informe a quantidade que deseja comprar`))
        // verificando se o produto existe e se tem estoque
        let achou = false // produto não foi encontrado
        for(let i=0;i<10;i++){
            if (codigos[i] == produto){ // encontrou o produto
                achou = true // achou o produto
                if (estoque[i] >= qtde){ // tem estoque
                    alert(`Venda realizada com sucesso`)
                    estoque[i] = estoque[i] - qtde // atualiza estoque
                }
                else {
                    alert(`Não tem estoque suficiente`)
                }
            }
        }
        if (!achou){ // não encontrou o produto
            alert(`Produto não encontrado`)
        }
        cliente = Number(prompt(`Informe o código do novo cliente ou 0 para encerrar`))
    }
    while(cliente != 0)
    // mostra o resultado
    for(let i=0;i<10;i++){
        console.log(`Produto ${codigos[i]} tem ${estoque[i]} unidades em estoque`)
    }
}