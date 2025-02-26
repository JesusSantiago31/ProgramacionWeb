const productService = require("../service/productos.service");

class ProductController {
    // Crear un producto
    async createProduct(req, res) {
        try {
            const product = await productService.createProduct(req.body);
            res.status(201).json(product);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    // Obtener todos los productos
    async getAllProducts(req, res) {
        try {
            const products = await productService.getAllProducts();
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // Obtener productos por nombre (búsqueda parcial)
    async getProductsByName(req, res) {
        try {
            const { name } = req.query;
            if (!name) return res.status(400).json({ error: "El parámetro 'name' es requerido" });

            const products = await productService.getProductsByName(name);
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // Obtener un producto por ID
    async getProductById(req, res) {
        try {
            const { id } = req.params;
            const product = await productService.getProductById(id);
            if (!product) return res.status(404).json({ error: "Producto no encontrado" });

            res.status(200).json(product);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // Actualizar un producto por ID
    async updateProduct(req, res) {
        try {
            const { id } = req.params;
            const updatedProduct = await productService.updateProduct(id, req.body);
            if (!updatedProduct) return res.status(404).json({ error: "Producto no encontrado" });

            res.status(200).json(updatedProduct);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    // Eliminar un producto por ID
    async deleteProduct(req, res) {
        try {
            const { id } = req.params;
            const deletedProduct = await productService.deleteProduct(id);
            if (!deletedProduct) return res.status(404).json({ error: "Producto no encontrado" });

            res.status(200).json({ message: "Producto eliminado correctamente" });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new ProductController();
