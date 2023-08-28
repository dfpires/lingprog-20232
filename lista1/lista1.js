function exe1(){
    // recupera os dados do html
    let nro1 = document.getElementById("nro1").value
    let nro2 = document.getElementById("nro2").value
    // calcula a subtração
    let subtracao = nro1 - nro2
    // envia o resultado para o html
    document.getElementById("subtracao").innerHTML = 
        `A subtração é ${subtracao}`
}
function exe2(){

}
function exe3(){

}
function exe9(){
    // recupera os dados informados pelo usuário
    let baseMenor = Number(document.getElementById("baseMenor").value)
    let baseMaior = Number(document.getElementById("baseMaior").value)
    let altura = Number(document.getElementById("altura").value)
    // calcula área do trapézio
    let area = ((baseMenor + baseMaior) * altura) / 2
    // mostra ao usuário no HTML
    document.getElementById("area").innerHTML = `A área é ${area}`
}

function exe20(){
    // cosseno(angulo) = cateto adjacente / hipotenusa
    // hipotenusa = cateto adjacente / cosseno(angulo)
    // recupera os dados do usuário
    let cAdjacente = Number(document.getElementById("cAdjacente").value)
    let angulo = Number(document.getElementById("angulo").value)

    // calcular a hipotenusa
    let radiano = angulo * (Math.PI / 180)
    let hipotenusa = cAdjacente / Math.cos(radiano)

    // mostra ao usuário
    document.getElementById("hipotenusa").innerHTML = 
        `A medida da escada é ${hipotenusa}`

}