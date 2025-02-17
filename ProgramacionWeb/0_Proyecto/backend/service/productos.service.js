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

    // TODO todo: colocar el controller de update y de delete 

    static update(req, res) {
        const { id } = req.params;
        const updatedProducto = ProductosService.update(id, req.body);
        if (!updatedProducto) {
            return res.status(404).json({ message: "Producto no encontrado" });
        }
        return res.json(updatedProducto);
    }

    static delete(req, res) {
        const { id } = req.params;
        const deletedProducto = ProductosService.delete(id);
        if (!deletedProducto) {
            return res.status(404).json({ message: "Producto no encontrado" });
        }
        return res.json(deletedProducto);
    }
}



module.exports= {ProductosService:new ProductosService()} //Exportando la clase como ProductosService