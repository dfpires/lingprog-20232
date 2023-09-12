function calculaMediaMaior(){
    let vetor = []
    // for para entrada de dados
    for(let i=0;i<5;i++){
        vetor.push(Number(prompt(`Informe nota ${i+1}`)))
    }
    // for para cálculo da média
    let soma = 0 
    for(let i=0;i<5;i++){
       soma = soma  + vetor[i]
    }
    alert(`A média é ${soma/vetor.length}`)
    // for para encontrar a maior nota
    let maior = vetor[0] // maior nota é a primeira
    for(let i=1;i<5;i++){
        if (vetor[i] > maior){
            maior = vetor[i]
        }
    }
    alert(`A maior nota é ${maior}`)
}

function calculaMediaMaiorNome(){
    let nomes = []
    let notas = []
    // for para entrada de dados
    for(let i=0;i<5;i++){
        nomes.push(prompt(`Informe nome ${i+1}`))
        notas.push(Number(prompt(`Informe nota ${i+1}`)))
    }
     // for para cálculo da média
     let soma = 0 
     for(let i=0;i<5;i++){
        soma = soma  + notas[i]
     }
     alert(`A média é ${soma/notas.length}`)

    // for para encontrar a maior e menor nota
    let maior = notas[0] // maior nota é a primeira
    let menor = notas[0] // menor nota é a primeira
    for(let i=1;i<5;i++){
        if (notas[i] > maior){
            maior = notas[i]
        }
        if (notas[i] < menor){
            menor = notas[i]
        }
    }
    alert(`A maior nota foi do ${nomes[notas.indexOf(maior)]}`)
    alert(`A menor nota foi do ${nomes[notas.indexOf(menor)]}`)
}