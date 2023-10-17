// modularize o programa de bike sempre passando o vetor como parâmetro
function cadastraBikes(vetor){
    for(let i =0;i<3;i++){
        let objeto = {
            marca: prompt("Informe a marca da bike"),
            modelo: prompt("Informe o modelo da bike"),
            quadro: parseInt(prompt("Informe o tamanho do quadro da bike")),
            aro: parseInt(prompt("Informe o tamanho do aro da bike")),
            ano: parseInt(prompt("Informe o ano da bike")),
            preco: parseFloat(prompt("Informe o preço da bike"))
        }
        vetor.push(objeto) 
        console.log('Bike inserida com sucesso')
    }
}
// média de preço das bikes
function calculaMediaPrecos(vetor){
    let soma = 0
    for(let i=0;i<3;i++){
        soma = soma + vetor[i].preco
    }   
    console.log(`Média de preço das bikes ${soma/vetor.length}`)
}
function calculaBikesAntigas(vetor){
    // bike(s) mais antiga(s)
    let maisAntiga = []
    maisAntiga[0] = vetor[0] // atribui todo o objeto
    for(let i=1;i<3;i++){
        if (vetor[i].ano < maisAntiga[0].ano){
            maisAntiga = [] //   o vetor
            maisAntiga[0] = vetor[i]
        }
        else if (vetor[i].ano == maisAntiga[0].ano){
            maisAntiga.push(vetor[i]) // mais uma com o mesmo ano
        }
    }
    console.log(`Bike(s) mais antiga(s)`)
    console.log(maisAntiga)
}

function calculaBikesCaloi(vetor){
     //bikes da marca Caloi
     let caloi = []
     for(let i=0;i<3;i++){
         if (vetor[i].marca == 'CALOI'){
             caloi.push(vetor[i])
         }
     }
     console.log(caloi)
}

function calculaBikesAro29(vetor){
    // qts bikes aro 29
    let aro29 = 0
    for(let i=0;i<vetor.length;i++){
        if (vetor[i].aro == 29){
            aro29++
        }
    }
    console.log(`Quantidade de bikes aro 29 ${aro29}`)
}
function calculaBikeMaiorQuadro(vetor){
    // qual bike possui maior quadro, desconsidere empates
    let maiorQuadro = vetor[0]
    for(let i=1;i<vetor.length;i++){
        if (vetor[i].quadro > maiorQuadro.quadro){
            maiorQuadro = vetor[i]
        }
    }
    console.log(maiorQuadro)
}

function principal(){
    let vetor = []
    cadastraBikes(vetor)
    calculaMediaPrecos(vetor)
    calculaBikesAntigas(vetor)
    calculaBikesCaloi(vetor)
    calculaBikesAro29(vetor)
    calculaBikeMaiorQuadro(vetor)
}