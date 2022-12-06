let posicao = 0
let boolVr = false

for(let i in elementos){
    if (elementos[i] === valor) {
        posicao = i
        boolVr = true
    }
}

if(boolVr){
    console.log(`Achei ${valor} na posicao ${posicao}`)
}else{
    console.log(`Numero ${valor} nao encontrado`)
}