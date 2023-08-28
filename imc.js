function calcular(){
    // recupera o valor do peso digitado pelo usuário
    // vamos usar o recurso DOM (Document Object Model)
    // JS é não tipado (variáveis sem tipo)
    let peso = document.getElementById("peso").value
    // recupera o valor da altura digitado pelo usuário
    let altura = document.getElementById("altura").value
    // calcula o imc
    let imc = peso / (altura ** 2)
    // mostrar a resposta
    // template string
    alert(`O seu IMC é de ${imc.toFixed(2)}`)
    // devolve o imc para o html
    document.getElementById("imc").innerHTML = 
    `O seu IMC é de ${imc.toFixed(2)}`
    let classificacao
    if (imc >= 0 && imc < 18.5){ // && é o E (and)
        classificacao = "Magreza"
    }
    else if (imc >= 18.5 && imc < 25){
            classificacao = "Normal"
    }
    else if (imc >= 25 && imc < 30){
            classificacao = "Sobrepeso"
    }
    else if (imc >= 30 && imc < 35){
        classificacao = "Obesidade grau I"
    }
    else if (imc >= 35 && imc < 40){
        classificacao = "Obesidade grau II"
    }
    else if (imc >= 40){
        classificacao = "Obesidade grau III"
    }
    else {
        classificacao = "Impossível calcular, peso e/ou altura negativos"
    }
    alert(classificacao)
}