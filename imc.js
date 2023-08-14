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
}