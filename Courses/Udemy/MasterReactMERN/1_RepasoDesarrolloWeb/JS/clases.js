class Coche{
    constructor(modelo, velocidad, antiguedad){
        this.modelo = modelo,
        this.velocidad= velocidad,
        this.antiguedad = antiguedad
    }

    aumentarVelocidad(){
        this.velocidad+=1;
    }

    reducirVelocidad(){
        this.velocidad-=1;
    }

}



var coche1 = new Coche('BMW', 200, 2017);
var coche2 = new Coche('Audi', 100, 2018);
var coche3 = new Coche('Mercedes', 220, 2017);


console.log(coche1);
coche1.aumentarVelocidad();
coche1.aumentarVelocidad();
console.log(coche1);

//Herencia

class Bus extends Coche{
    constructor(modelo, velocidad, antiguedad){
        super(modelo, velocidad, antiguedad)
        this.altura = 5;
    }

    mostrarAltura(){
        return "La altura del bus es de "+ this.altura
    }
}

var coche4 = new Bus('Renault', 180, 2019);
console.log(coche4.mostrarAltura());