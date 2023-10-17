function soma(a, b){
    console.log(`Soma é ${a+b}`)
}
function soma2(a, b){
    return (a+b)
}
function soma3(){
    let a = parseInt(prompt('Informe valor de A'))
    let b = parseInt(prompt('Informe valor de B'))
    return a + b
}

function alteraIdade(idadeP){
    idadeP = idadeP + 10
    console.log(`Dentro da função ${idadeP}`) // 28 
}

function alteraVetor(vet){
    vet[0] = vet[0] + 10
    vet[1] = vet[1] + 10
    vet[2] = vet[2] + 10
    console.log(`Dentro da função ${vet}`)
}

function principal(){
  //  soma(4, 8)
  //  console.log(`Soma é ${soma2(6, 9)}`)
  //  console.log(`Soma é ${soma3()}`)

    // passagem de parâmetro por valor -> passa-se o valor da variável
    // qual o efeito colateral disso?
    // a mudança do valor da variável dentro da função não altera a variável
    // de fora da função
    // OBS: vale quando se passa como parâmetro um int, um float, um boolean ou um char,
    // ou seja, um tipo primitivo de dados 
    let idade  = 18
    alteraIdade(idade)
    console.log(idade) // 18

    // passagem de parâmetro por referência -> passa-se a referênca da variável
    // qual o efeito colateral disso?
    // a mudança do valor da variável dentreo da função altera a variável
    // de fora da função
    // OBS: vale quando se passa como parâmetro um vetor, uma matriz ou um objeto
    let vet = []
    vet[0] = 10; vet[1] = 11; vet[2] = 12;
    alteraVetor(vet)
    console.log(`Fora da função ${vet}`)
}