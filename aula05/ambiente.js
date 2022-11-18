class Carros {
    marca;
    cor;
    gastoPorKM;
    
    constructor(marca, cor, gastoPorKM){
        this.marca = marca
        this.cor = cor
        this.gastoPorKM = valorGasto
    }

}
function quantoGastei(){
    var precoC = 5.67
    var consumoL = 10
    var distancia = 1357

    var kmPorLitro = distancia / consumoL
    var valorGasto = kmPorLitro * precoC   
    return (valorGasto) 
}

console.log(quantoGastei)