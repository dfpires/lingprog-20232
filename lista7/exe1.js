function lerMatriz(matriz){
    // 3 x 4 (3 linhas e 4 colunas)
    for(let i=0;i<3;i++){ // para cada linha
        matriz[i] = [] // cria um vetor dentro de um vetor
        for(let j=0;j<4;j++){
            matriz[i][j] = parseInt((Math.random()*20)+1) // gera número de 1 a 20
        }
    }
}
function calcula1520(matriz){
   let qtde = 0
   for(let i=0;i<3;i++){
        for(let j=0;j<4;j++){
            if (matriz[i][j] >= 15 && matriz[i][j] <= 20){
                qtde++
            } 
        }
   }
   console.log(qtde)
}
let principal = () => {
    let matriz = []
    lerMatriz(matriz)
    calcula1520(matriz)
    console.log(matriz)
}
principal()