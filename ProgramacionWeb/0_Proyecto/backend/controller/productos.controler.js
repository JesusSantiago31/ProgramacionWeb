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

    // TODO: Colocar el controller del update y delete
}

module.exports = {ProductoController}