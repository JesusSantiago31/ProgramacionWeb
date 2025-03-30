document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".formulario").addEventListener("submit", async function(event) {
        event.preventDefault(); 

        
        const nombre = document.getElementById("nombre").value.trim();
        const precio = parseFloat(document.getElementById("precio").value);
        const stock = parseInt(document.getElementById("stock").value);

        if (!nombre || isNaN(precio) || isNaN(stock)) {
            alert("Todos los campos deben estar completos y ser válidos.");
            return;
        }

        
        try {
            const response = await fetch("http://localhost:3000/");
            if (!response.ok) throw new Error("Error al obtener los productos");

            const productos = await response.json();

            
            const productoExiste = productos.some(producto => producto.name.toLowerCase() === nombre.toLowerCase());

            if (productoExiste) {
                alert("El producto ya existe. No se puede agregar duplicado.");
                return;
            }

            
            const nuevoProducto = { name: nombre, price: precio, stock: stock };

            
            const postResponse = await fetch("http://localhost:3000/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(nuevoProducto)
            });

            if (!postResponse.ok) {
                throw new Error("Error al agregar producto");
            }

            const data = await postResponse.json();
            alert("Producto agregado con éxito: " + data.name);

            
            this.reset();
        } catch (error) {
            console.error("Error:", error);
            alert("No se pudo agregar el producto");
        }
    });
});
