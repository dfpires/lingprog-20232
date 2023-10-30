function lerDados(vetor, matriz){
    for(let i=0;i<15;i++){
        vetor[i] = "aluno " + (i+1)
        matriz[i] = []
        for(let j=0;j<5;j++){
            matriz[i][j] = parseFloat(Math.random()*10) + 1
        }
    }
}

function calculaSituacao(vetor, matriz){
    for(let i=0;i<15;i++){
        let soma = 0
        for(let j=0;j<5;j++){
            soma = soma  + matriz[i][j]
        }
        if (soma/5 >= 6){
            console.log(`${vetor[i]} foi aprovado com média ${soma/5}`)
        }
        else if (soma/5 >= 3){
            console.log(`${vetor[i]} ficou de exame com média ${soma/5}`)
        }
        else {
            console.log(`${vetor[i]} foi reprovado com média ${soma/5}`)
        } 
    }
}

function principal(){
    let vetor = []
    let matriz = []
    lerDados(vetor, matriz)
    calculaSituacao(vetor, matriz)
}