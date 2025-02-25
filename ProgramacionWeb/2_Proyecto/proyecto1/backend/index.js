


const ProductoRutas = require("./routes/productos.routes");
const express = require("express");
const cors = require("cors");
const { connectDB } = require("./data/config");
const PORT = 3000;



// declarar la instancia de express
const app = express();


//Middleware
app.use(express.json()); //interprete de json
// app.use("/ruta",express.json());
app.use(cors()); //permite o niega el acceso a la ips

app.use("/",ProductoRutas);

//Corriendo el servidor
connectDB(()=>{
    app.listen(PORT,()=>{
        console.log("Server running in http://localhost:"+PORT)
    });
});

