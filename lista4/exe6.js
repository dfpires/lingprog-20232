function exe6(){
    let vendas = []
    let percentuais = []
    let nomes = []
    // entrada de dados
    for(let i=0;i<10;i++){
        nomes.push(prompt(`Informe o nome do vendedor ${i+1}`))
        vendas.push(Number(prompt(`Informe o total de vendas do vendedor ${i+1}`)))
        percentuais.push(Number(prompt(`Informe o percentual de comissão do vendedor ${i+1}`)))
    }
    // quanto vai receber de comissão
    let comissoes = []
    for(let i=0;i<10;i++){
        comissoes.push(vendas[i] * percentuais[i]/100)
        console.log(`${nomes[i]} vai receber ${comissoes[i]}`)
    }
    // total de vendas de todos os vendedores
    let total = 0
    for(let i=0;i<10;i++){
        total = total + vendas[i]
    }
    console.log(`Total de vendas ${total}`)
    // maior e menor valor a receber, e os nomes dos vendedores
    let maior = comissoes[0]
    let menor = comissoes[0]
    for(let i=1;i<10;i++){
        if (comissoes[i] > maior){
            maior = comissoes[i]
        }
        if (comissoes[i] < menor){
            menor = comissoes[i]
        }
    }
    console.log(`Maior comissão ${maior} do ${nomes[comissoes.indexOf(maior)]}`)
    console.log(`Menor comissão ${menor} do ${nomes[comissoes.indexOf(menor)]}`)
}