// usado para progrmacion web JS7 import express from "express";
//Script 6 de JS 6
const express= require("express");
const cors = require("cors");
const PORT=3000; // Se suele usar en el puerto 3000

//Declarar la instancia de express
const app = express();

//CORS sirve para denegar direcciones IP

//Middleware            JSON
//Para validar credenciales, permitir accesos, etc.
app.use(express.json); // Interprete de json 
// app.use("/ruta", express.json()); // Si no especifico una ruta, toma una ruta global
app.use(cors()); // Permite o deniga el acceso a las IPs


// Para crear un GET  Recibe una ruta y un rollback
app.get("/",(req,res)=>{
    //res.send("<a>Hola desde express</a>");//Send para enviar texto plano
    res.json({
        mensaje: "Hola desde express"
    });
});

app.get("/:nombre",(req,res)=>{
    //const nombre = req.params.nombre;
    const {nombre} = req.params;
    res.json({
        mensaje :"Hola usando una URL personal de "+ nombre
    });
});

app.get("/:n1/n2",(req,res)=>{
    const {n1,n2} = req.params
    if(isNaN(parseFloat(n1)) || isNaN(parseFloat(n2) )){
        res.status(400).json({message:"No todos los parametros son numeros"});
    }else{

    const suma = parseInt(n1)+parseFloat(n2);
    res.json({suma});
    }
});

// Hay dos tipos de funciones, funcion normal (Trabaja dentro de clases) y funcion de flecha (trabaja de forma anonima)
//function function1(){}
//const function2 = ()=>{}

// Crear un POST 
app.post("/",(req,res)=>{
    const {username, password} = req.body;
    res.status(201).json({username,password});
});

//Corriendo el Servidor 
app.listen(PORT,()=>{console.log("Server running in http://localhost:"+PORT)}); // Para inicializar el servidor y mandar un mensaje 
