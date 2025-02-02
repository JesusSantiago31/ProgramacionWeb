const { ProductoController } = require("../controller/productos.controler");

// Vistas
const router = require("express").Router(); 

router.get("/",ProductoController.getAll);
router.get("/:id",ProductoController.getOneById); //: Atrinbuto que nosotros recibamos
router.post("/",ProductoController.create);

module.exports = router;
