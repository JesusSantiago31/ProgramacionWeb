const express = require("express");
const router = express.Router();
const productController = require("../controller/productos.controller");

router.post("/", productController.createProduct);
router.get("/", productController.getAllProducts);
router.get("/search/", productController.getProductsByName); // Buscar por nombre
router.get("/:id", productController.getProductById);
router.put("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;
