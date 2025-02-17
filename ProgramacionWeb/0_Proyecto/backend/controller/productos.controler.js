const { ProductosService } = require("../service/productos.service");

class ProductoController{
    static getAll(req,res){
        return res.json(ProductosService.getAll());
    }

    static getOneById(req,res){
        // Los parámetros a través de la URL
        const {id} = req.params;
        return res.json(ProductosService.getOneById(id));
    }

    static create(req,res){
        const {nombre, precio, stock}=req.body;

        return res.json(ProductosService.create(nombre,precio,stock));
    }

    static update(req,res){
        const {nombre, precio, stock}=req.body;

        return res.json
    }
    // TODO: Colocar el controller del update y delete

    update(id, objeto) {
        const index = productos.findIndex((pt) => pt.id == id);
        if (index === -1) return null;
        
        productos[index] = { ...productos[index], ...objeto };
        return productos[index];
    }

    delete(id) {
        const index = productos.findIndex((pt) => pt.id == id);
        if (index === -1) return null;
        
        const productoEliminado = productos.splice(index, 1);
        return productoEliminado[0];
    }

}

module.exports = {ProductoController}