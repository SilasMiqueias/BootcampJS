
function meuNome(nome){
    return (`Meu nome é ${nome}`)
}
meuNome('Silas')

function maiorIdade(idade){
    if(idade >= 18){
        console.log(meuNome('Silas') + ' é maior' )
    }else{
        console.log('Voçê é menor de idade')
    }
}

maiorIdade(19)