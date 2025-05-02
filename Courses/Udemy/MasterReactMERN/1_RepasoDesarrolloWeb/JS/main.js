var nombre = "Jesus Silvestre Santiago Cruz";
const altura =  165;
var conc = "Mi nombre es: " + nombre + " y mido: " + altura;

var dato = document.getElementById('datos');

dato.innerHTML = conc;
dato.innerHTML += `
<h1> Soy la caja de datos </h1>
<h2> Nombre: ${nombre}</h2>
<h3> Altura: ${altura}</h3>
`;

if(altura >= 190){
    dato.innerHTML += `Eres una persona alta`;
} else{
    dato.innerHTML += "Eres una persona bajia";
}

// Objetos JSON

var coche ={
    modelo : "Mercedes Clase A",
    maximo : 500,
    antiguedad : 2020,
    mostrarDtaos(){
console.log(this.modelo, this.maximo, this.antiguedad )
    },
    propiedad : "valor aleatorio"

}

document.write("<h1>"+coche.modelo+"</h1")
console.log(coche);
coche.mostrarDtaos();


// Promesas: Valor que puede estar disponible en un futuro, ahora o nunca: Promete que nos va a dar una respuest o un error 

var saludar = new Promise ((resolve, reject)=>{
    setTimeout (() =>{
        let saludo = "HOLA MUNDO";
        saludo = false;
        if(saludo){
            resolve(saludo);
        }else{
            reject("No hay saludo disponible")
        }
    }, 2000);
});


saludar.then(resultado=>{
    alert(resultado);
})

.catch(err =>{
    alert(err);
})

