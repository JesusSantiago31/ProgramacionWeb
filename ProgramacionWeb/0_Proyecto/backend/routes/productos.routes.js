const { ProductoController } = require("../controller/productos.controler");

// Vistas
const router = require("express").Router(); 

router.get("/",ProductoController.getAll);
router.get("/:id",ProductoController.getOneById); //: Atributo que nosotros recibamos
router.post("/",ProductoController.create);
router.put("/update/:id", ProductoController.update)
router.delete("/:id", ProductoController.delete)


module.exports = router;
