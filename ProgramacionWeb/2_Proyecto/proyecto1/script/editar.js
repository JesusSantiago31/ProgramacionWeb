const productList = document.getElementById("product-list");
const editForm = document.getElementById("edit-form");
let allProducts = []; 


async function loadProducts() {
    try {
        const response = await fetch("http://localhost:3000/");
        if (!response.ok) throw new Error("Error al cargar los productos");
        
        allProducts = await response.json(); 
        renderProducts(allProducts); 
    } catch (error) {
        console.error("Error al cargar productos:", error);
    }
}


function renderProducts(productos) {
    productList.innerHTML = ""; 

    productos.forEach(producto => {
        const productCard = document.createElement("div");
        productCard.classList.add("card");
        productCard.innerHTML = `
            <h3 class="card-title">${producto.name}</h3>
            <p class="card-stock">Stock: ${producto.stock} pz</p>
            <div>
                <button class="card-button card-button_edit" data-id="${producto._id}">
                    <i class="bi bi-pen"></i>
                </button>
                <span class="card-precio">$${producto.price.toFixed(2)}</span>
            </div>
        `;

        
        productCard.querySelector(".card-button_edit").addEventListener("click", () => {
            loadProductForEdit(producto._id);
        });

        productList.appendChild(productCard);
    });
}


async function loadProductForEdit(productId) {
    try {
        const response = await fetch(`http://localhost:3000/${productId}`);
        if (!response.ok) throw new Error("Error al obtener el producto");

        const producto = await response.json();
        
        document.getElementById("product-id").value = producto._id;
        document.getElementById("name").value = producto.name;
        document.getElementById("precio").value = producto.price;
        document.getElementById("stock").value = producto.stock;
    } catch (error) {
        console.error("Error al cargar el producto:", error);
    }
}

editForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const productId = document.getElementById("product-id").value;
    if (!productId) {
        alert("No hay producto seleccionado para editar");
        return;
    }

    const updatedProduct = {
        name: document.getElementById("name").value,
        price: parseFloat(document.getElementById("precio").value),
        stock: parseInt(document.getElementById("stock").value)
    };

    try {
        const response = await fetch(`http://localhost:3000/${productId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedProduct)
        });

        if (!response.ok) throw new Error("Error al actualizar el producto");

        alert("Producto actualizado con éxito");
        loadProducts(); 
        editForm.reset(); 
    } catch (error) {
        console.error("Error al actualizar el producto:", error);
    }
});


document.addEventListener("DOMContentLoaded", async () => {
    await loadProducts();
    
    
    const searchInput = document.getElementById("search");
    searchInput.addEventListener("input", () => {
        const query = searchInput.value.trim().toLowerCase();
        filterProducts(query);
    });
});

function filterProducts(query) {
    const filteredProducts = allProducts.filter(producto =>
        producto.name.toLowerCase().includes(query)
    );
    renderProducts(filteredProducts); 
}
