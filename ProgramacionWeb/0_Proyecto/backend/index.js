// usado para progrmacion web JS7 import express from "express";
//Script 6 de JS 6
const ProductoRutas = require("./routes/productos.routes");
const express= require("express");
const cors = require("cors");
const PORT=3000; // Se suele usar en el puerto 3000

//Declarar la instancia de express
const app = express();

//CORS sirve para denegar direcciones IP

//Middleware            JSON
//Para validar credenciales, permitir accesos, etc.
app.use(express.json()); // Interprete de json 
// app.use("/ruta", express.json()); // Si no especifico una ruta, toma una ruta global
app.use(cors()); // Permite o deniga el acceso a las IPs

app.use("/productos", ProductoRutas);

//Corriendo el Servidor 
app.listen(PORT,()=>{console.log("Server running in http://localhost:"+PORT)}); // Para inicializar el servidor y mandar un mensaje 
