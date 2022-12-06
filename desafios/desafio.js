var a = 5
var N = 20
var soma = 0

for (let i = 0; i <= N; i++) {
    if(i % a === 0){
        soma += i
    }
}
console.log(soma)