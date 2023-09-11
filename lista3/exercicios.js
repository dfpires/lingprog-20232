function exe1(){
    let contador2 = 1
    while (contador2 <= 5){  
        let a = Number(prompt('Informe A'))
        let b = Number(prompt('Informe B'))
        let c = Number(prompt('Informe C'))
        let d = Number(prompt('Informe D'))
        let contador = 1
        while (contador <= 3){
            if (a > b){ // troca a com b
                let aux = a
                a = b
                b = aux
            }
            if (b > c){ // troca b com c
                let aux = b
                b = c
                c = aux
            }
            if (c > d){ // troca c com d
                let aux = c
                c = d
                d = aux
            }
            contador++ 
        } // fecha while
        console.log(`Ordem crescente ${a}, ${b}, ${c}, ${d}`)
        console.log(`Ordem decrescente ${d}, ${c}, ${b}, ${a}`)
        contador2++
    } // fecha while
}

function exe2(){
    let qtde = 120
    const custo = 200
    let corpo = ''
    let lucro = 0
    let maiorLucro = 0
    let melhorQtde = 0
    let melhorPreco = 0
    for(let preco = 5; preco >= 1; preco = preco - 0.5){
        lucro = (preco * qtde) - custo
        if (lucro > maiorLucro){
            maiorLucro = lucro
            melhorPreco = preco
            melhorQtde = qtde
        }
        corpo = corpo + `<tr> <td> ${preco.toFixed(2)} </td> <td> ${qtde}</td> <td> ${custo.toFixed(2)}</td> <td> ${lucro.toFixed(2)} </td> </tr>`  
        qtde = qtde + 26
    }
    document.getElementById('corpo').innerHTML = corpo
}

function exe3(){
    let idade
    let f1 = 0; let f2 = 0; let f3 = 0; let f4 = 0; let f5 = 0;
    for(let i=1; i<=8; i++){
        idade = Number(prompt('Informe a idade'))
        if (idade >= 0 && idade <= 15){
            f1++
        }
        else if (idade >= 16 && idade <= 30){
                f2++
            }
        else if (idade >= 31 && idade <= 45){
                f3++
            }
        else if (idade >= 46 && idade <= 60){
                f4++
            }
        else if (idade > 60){
                f5++
            }
        else {
            alert('Idade não pode ser negativa')
        } 
    }
    alert(`F1 ${f1} F2 ${f2} F3 ${f3} F4 ${f4} F5 ${f5}`)
    alert(`%F1 ${f1/8*100} %F5 ${f5/8*100}` )
}

function exe5(){
    let corpo = ''
    for(let numero = 1; numero <= 10; numero++){
        corpo = corpo + `
        <tr> 
        <td> Tabuada </td> 
        <td> do </td> 
        <td> ${numero}</td>
        </tr>`
        for(let aux = 1; aux <= 10; aux++){
            corpo = corpo + `
            <tr> 
            <td> ${numero} </td> 
            <td> ${aux} </td> 
            <td> ${numero * aux}</td>
            </tr>`
        }
    }
    document.getElementById('corpo').innerHTML = corpo
}

function exe7(){
    let peso, altura, idade
    let qtdeIdadeSuperior50 = 0
    let qtdeIdadeEntre10e20 = 0
    let somaAltura = 0
    let qtdePesoMenor40 = 0
    for(let i=1;i<=5;i++){
        altura = Number(prompt('Informe a altura'))
        peso = Number(prompt('Informe o peso'))
        idade = Number(prompt('Informe a idade'))
        if (idade > 50){
            qtdeIdadeSuperior50++
        }
        else if (idade >=10 && idade <= 20){
                qtdeIdadeEntre10e20++
                somaAltura = somaAltura + altura
        }
        if (peso < 40){
            qtdePesoMenor40++
        }
    }
    alert(`Qtde de pessoas com idade superior a 50 anos ${qtdeIdadeSuperior50}`)
    alert(`Média das alturas das pessoas com idade entre 10 e 20 anos ${somaAltura/qtdeIdadeEntre10e20}`)
    alert(`Qtde de pessoas com peso inferior a 40 quilos ${qtdePesoMenor40}`)
}
function exe8(){
    let idade, peso, altura, olhos, cabelos
    for(let i=1;i<=6;i++){
        idade = Number(prompt('Informe a idade'))
        peso = Number(prompt('Informe o peso'))
        altura = Number(prompt('Informe a altura'))
        do {
            olhos = prompt('Informe cor dos olhos: A, P, V, C').toUpperCase()
        }
        while (olhos != 'A' && olhos != 'P' && olhos != 'V' && olhos != 'C')
        do {
            cabelos = prompt('Informe cor dos cabelos: P, C, L, R').toUpperCase()
        }
        while (cabelos != 'P' && cabelos != 'C' && cabelos != 'L' && cabelos != 'R')

        // verificar os cálculos necessários
    }
}