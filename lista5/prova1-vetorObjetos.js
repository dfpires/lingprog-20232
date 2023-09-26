function prova(){
    let vetor = []
    // entrada de dados
    for(let i=0;i<3;i++){
        let objeto = {
            nome: prompt("Informe o nome do computador"),
            estoque: Number(prompt("Informe o estoque do computador")),
            classificacao: prompt("Informe a classificao do computador").toUpperCase()
        }
        while (objeto.estoque < 0){
            objeto.estoque = Number(prompt("Informe estoque positivo do computador"))
        }
        while (objeto.classificacao != "GAMER" && objeto.classificacao != "NOTEBOOK" 
            && objeto.classificacao != "DESKTOP"){
                objeto.classificacao = prompt("Informe a classificao do computador corretamente").toUpperCase() 
        }   
        vetor.push(objeto) 
    }

    for(let i=0;i<4;i++){
        let objCompra = {
            nomeCompra: prompt(`Informe o nome do computador que deseja comprar`),
            qtdCompra: Number(prompt(`Informe a quantidade que deseja comprar`)),
            clasCompra: prompt(`Informe a classificação do computador que deseja comprar`).toUpperCase()
        }
        // verifica se o produto existe
        let achou = false
        for(let j=0;j<3;j++){ // para percorrer os vetores dos produtos
           if (objCompra.nomeCompra == vetor[j].nome && objCompra.clasCompra == vetor[j].classificacao){
                achou = true
                // verifica se tem estoque
                if (objCompra.qtdCompra <= vetor[j].estoque){
                    console.log(`Venda realizada com sucesso`)
                    vetor[j].estoque = vetor[j].estoque - objCompra.qtdCompra
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