var lista = [1,2,3,4,5,6,7,8,9]

for (let i = 0; i < lista.length; i++) {
  var numero = lista[i]
  if(numero % 2 == 0){
    console.log(`${numero} PAR`)
  }else{
    console.log(`${numero} IMPAR`)
  }
    
}