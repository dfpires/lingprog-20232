function prova(){
    let nomes = []
    let estoque = []
    let classificacao = []
    // entrada de dados
    for(let i=0;i<3;i++){
        nomes.push(prompt(`Informe o nome do computador ${i+1}`))
        let auxEstoque
        do {
            auxEstoque = Number(prompt(`Informe o estoque do computador ${i+1}`))
        }
        while (auxEstoque < 0)
        estoque.push(auxEstoque)
        
        let auxCla
        do {
            auxCla = prompt(`Informe a classificação do computador ${i+1}`).toUpperCase()
        }
        while (auxCla != "GAMER" && auxCla != "NOTEBOOK" && auxCla != "DESKTOP")
        classificacao.push(auxCla)
    }
    let nomeCompra
    let qtdCompra
    let clasCompra 
    for(let i=0;i<4;i++){
        nomeCompra = prompt(`Informe o nome do computador que deseja comprar`)
        qtdCompra = Number(prompt(`Informe a quantidade que deseja comprar`))
        clasCompra = prompt(`Informe a classificação do computador que deseja comprar`).toUpperCase()
        // verifica se o produto existe
        let achou = false
        for(let j=0;j<3;j++){ // para percorrer os vetores dos produtos
            console.log(nomeCompra, nomes[j], clasCompra, classificacao[j])
            if (nomeCompra == nomes[j] && clasCompra == classificacao[j]){
                achou = true
                // verifica se tem estoque
                if (qtdCompra <= estoque[j]){
                    console.log(`Venda realizada com sucesso`)
                    estoque[j] = estoque[j] - qtdCompra
                }
                else {
                    console.log(`Não tem estoque suficiente`)
                }
            }
        }
        if (!achou){
            console.log(`Produto não existe`)
        }
    }
    let maiorEstoque = 0
    let menorEstoque = Infinity
    let achou = false
    for(let i=1;i<3;i++){
        if (classificacao[i] == "NOTEBOOK"){
            achou = true
            if (maiorEstoque > estoque[i]){
                maiorEstoque = estoque[i]
            }
            if (menorEstoque < estoque[i]){
                menorEstoque = estoque[i]
            }
        }
    }
    if (achou){
        console.log(nomes[estoque.indexOf(menorEstoque)])
        console.log(nomes[estoque.indexOf(maiorEstoque)])
    }
}