const { Product } = require("../models/products.models");

class ProductService {
    // Crear un producto
    async createProduct(data) {
        try {
            const product = new Product(data);
            return await product.save();
        } catch (error) {
            throw new Error(`Error al crear el producto: ${error.message}`);
        }
    }

    // Obtener todos los productos
    async getAllProducts() {
        try {
            return await Product.find();
        } catch (error) {
            throw new Error(`Error al obtener los productos: ${error.message}`);
        }
    }

    // Obtener productos por nombre (búsqueda parcial)
    async getProductsByName(name) {
        try {
            return await Product.find({ name: { $regex: name, $options: "i" } }); // Insensible a mayúsculas y minúsculas
        } catch (error) {
            throw new Error(`Error al buscar productos: ${error.message}`);
        }
    }

    // Obtener un producto por ID
    async getProductById(id) {
        try {
            return await Product.findById(id);
        } catch (error) {
            throw new Error(`Error al obtener el producto por ID: ${error.message}`);
        }
    }

    // Actualizar un producto por ID
    async updateProduct(id, data) {
        try {
            return await Product.findByIdAndUpdate(id, data, { new: true });
        } catch (error) {
            throw new Error(`Error al actualizar el producto: ${error.message}`);
        }
    }

    // Eliminar un producto por ID
    async deleteProduct(id) {
        try {
            return await Product.findByIdAndDelete(id);
        } catch (error) {
            throw new Error(`Error al eliminar el producto: ${error.message}`);
        }
    }
}

module.exports = new ProductService();
