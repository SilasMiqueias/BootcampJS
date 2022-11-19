class Carros{
    marca;
    cor; 
    kmGasto;

    constructor(marca, cor, kmGasto){
        this.marca = marca
        this.cor = cor
        this.kmGasto = kmGasto
    }

    calcularDistancia(distancia, precoC){
        return distancia * this.kmGasto * precoC
    }
}

var corsa = new Carros('chevrolet', 'verde', 1/10)
console.log(corsa.calcularDistancia(70, 5.00))