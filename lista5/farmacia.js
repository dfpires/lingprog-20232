let principal = () => {
    // cadastra as farmácias
    let farmacias = []
    for(let i=0;i<5;i++){
        let objeto = {
            codigo: parseInt(prompt(`Informe o código da farmácia`)),
            nome: prompt(`Informe o nome da farmácia`),
            endereco: prompt(`Informe o endereço da farmácia`)
        }
        while (farmacias.some( (item) => item.codigo == objeto.codigo )){
            objeto.codigo = parseInt(prompt(`Código já existente. Informe outro código`))
        }
        farmacias.push(objeto)
    }
}