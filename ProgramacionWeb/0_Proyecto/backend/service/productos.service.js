const { productos } = require("../database/db"); 

class ProductosService{ // SOLID exige trabajar con nomenclatura de clases, inspirada a POO para codigo escalable

    getAll(){
        return productos
    }

    getOneById(id){ // 
        const producto = productos.filter((pt)=>pt.id==id); // Operacion que permite hacer js sobre un arreglo
        //.filter Returns the elements of an array that meet the condition specified in a callback function.
        return producto; 
    }

    create (nombre,precio,stock){
        const nuevoProduto = {
            nombre, precio, stock //Lo mismo que nombre:nombre, precio:precio, stock:stock
        };

        productos.push(nuevoProduto);
        return nuevoProducto;
    }

    update (id, objeto){
        // TODO: usar el id para ubicar el producto a cambiar
        // objeto -> para obtener los datos a cambiar {stock:99}
        const productoActualizado = {};


        return productoActualizado
    }

    delete (id, objeto){
        //TODO: usar el id para ubicar el producto a eliminar

        const productoEliminado={};


        return productoEliminado;
    }
}

module.exports= {ProductosService:new ProductosService()} //Exportando la clase como ProductosService