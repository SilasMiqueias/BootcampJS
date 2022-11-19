class Pessoa{
    nome;
    peso;
    altura;
    imc;
    
    constructor(nome,peso,altura,imc,){
        this.nome = nome
        this.peso = peso
        this.altura = altura
        this.imc = this.calcularIMC()
        
    }

    calcularIMC(){
        return this.peso / (this.altura * this.altura)
    }
    classificarIMC(){
        var imc = this.classificarIMC()
       if(imc < 18.5){
            return('Abaixo do peso')
        }else if(imc >= 18.5 && imc < 25){
            return('Peso normal')
        }else if(imc >= 25 && imc < 30){
            return('Acima do peso')
        }else if (imc >= 30 && imc < 40){
            return('Obeso')
        }else{
            return('Obesidade grave')
        } 
    }
}

var Silas = new Pessoa('Silas',80,1.75)
console.log(Silas)
