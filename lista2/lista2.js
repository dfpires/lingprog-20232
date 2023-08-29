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