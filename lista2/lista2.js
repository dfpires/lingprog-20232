function exe5(){
    let escolha = Number(document.getElementById("opcao").value)
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    let resultado = null // inicialização
    switch(escolha) {
        case 1: resultado = (nro1 + nro2) / 2
                break
        case 2: if (nro1 >= nro2){
                    resultado = (nro1 - nro2)
                }
                else {
                    resultado = (nro2 - nro1)
                }
                break
        case 3: resultado = (nro1 * nro2)
                break
        case 4: if (nro2 != 0){
                    resultado = (nro1 / nro2)
                }
                else {
                    document.getElementById("resultado").innerHTML = 
                    "Divisão por zero não pode"
                }
        default: document.getElementById("resultado").innerHTML = 
        'Opção inválida'
    }   
    if (resultado != null){
        document.getElementById("resultado").innerHTML = resultado
    }
}
function exe22(){
    let idade = Number(document.getElementById("idade").value) 
    let peso = Number(document.getElementById("peso").value) 
    let risco = null
    if (idade >= 0 && idade < 20){
        if (peso >= 0 && peso < 60){
            risco = 9
        }
        else if (peso >= 60 && peso <= 90){
                risco = 8
        }
        else if (peso > 90){
            risco = 7
        }
        else {
            document.getElementById("risco").innerHTML = "Peso negativo"    
        }
    }
    else if (idade >= 20 && idade <= 50){
        if (peso >= 0 && peso < 60){
            risco = 6
        }
        else if (peso >= 60 && peso <= 90){
                risco = 5
        }
        else if (peso > 90){
            risco = 4
        }
        else {
            document.getElementById("risco").innerHTML = "Peso negativo"    
        }
    }
    else if (idade > 50){
        if (peso >= 0 && peso < 60){
            risco = 3
        }
        else if (peso >= 60 && peso <= 90){
                risco = 2
        }
        else if (peso > 90){
            risco = 1
        }
        else {
            document.getElementById("risco").innerHTML = "Peso negativo"    
        }
    }
    else {
        document.getElementById("risco").innerHTML = "Idade negativa"
    }

    if (risco != null){
        document.getElementById("risco").innerHTML = risco
    }
}
function exe23(){
    // recuperar os dados do HTML
    let codigo = Number(document.getElementById("codigo").value)
    let qtde = Number(document.getElementById("qtde").value)
    // calcula preço unitário
    let precoUnitario = null 
    if (codigo >= 1 && codigo <= 10){
        precoUnitario = 10
    }
    else if (codigo >= 11 && codigo <= 20){
        precoUnitario = 15
    }
    else if (codigo >= 21 && codigo <= 30){
        precoUnitario = 20
    }
    else if (codigo >= 31 && codigo <= 40){
        precoUnitario = 30
    }
    else {
       document.getElementById("resultado").innerHTML = "Código inválido"
    }
    // calcula preço total
    let precoTotal
    if (precoUnitario != null && qtde >= 0){
        precoTotal = qtde * precoUnitario
        // calcula o desconto
        let desconto
        if (precoTotal < 250){
            desconto = precoTotal*5/100
        }
        else if (precoTotal >= 250 && precoTotal <= 500){
                desconto = precoTotal*10/100
        }
        else {
            desconto = precoTotal*15/100
        }
        // calcula preço final
        let precoFinal = precoTotal - desconto
        document.getElementById("resultado").innerHTML = `Preço unitário ${precoUnitario} Preço total ${precoTotal} Desconto ${desconto} e Preço final ${precoFinal}`
    }
    else {
        document.getElementById("resultado").innerHTML = "Código e/ou qtde inválido(s)"
    }
}
function exe24(){
    let preco = Number(document.getElementById("preco").value)
    let categoria = Number(document.getElementById("categoria").value)
    let situacao = Number(document.getElementById("situacao").value)
    if (preco < 0){
        document.getElementById("resultado").innerHTML = "Preço inválido"
    }
    else {
        // calcula aumento
        let aumento
        switch(categoria){
            case 1: if (preco <= 25){
                        aumento = preco * 5/100
                    }
                    else {
                        aumento = preco * 12/100
                    }
                    break
            case 2: if (preco <= 25){
                        aumento = preco * 8/100
                    }
                    else {
                        aumento = preco * 15/100
                    }
                    break
            case 3: if (preco <= 25){
                        aumento = preco * 10/100
                    }
                    else {
                        aumento = preco * 18/100
                    }
                    break
        }
        // calcula imposto
        let imposto
        if (categoria == 2 || situacao == 'R'){
            imposto = preco * 5/100
        }
        else {
            imposto = preco * 8/100
        }
        // calcula novo preço
        let novoPreco = preco + aumento - imposto
        // calcula classificação
        let classificacao
        if (novoPreco < 50){
            classificacao = "Barato"
        }
        else if (novoPreco >= 50 && novoPreco < 120){
                classificacao = "Normal"
        }
        else {
            classificacao = "Caro"
        }
        // resultado
        document.getElementById("resultado").innerHTML = `Aumento ${aumento} Desconto ${desconto} Novo preço ${novoPreco} e Classificação ${classificacao}`
    }
}