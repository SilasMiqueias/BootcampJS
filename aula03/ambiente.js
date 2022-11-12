let notaum = 5
let notadois = 3
let notatres = 7

let mediaAluno = (notaum + notadois + notatres) / 3
console.log(mediaAluno)

if(mediaAluno < 5){
    console.log('REPROVADO')
}
else if(mediaAluno >= 5 && mediaAluno <= 7){
    console.log('RECUPERAÇÃO')
}else{
    console.log('APROVADO')
}