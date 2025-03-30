document.addEventListener("DOMContentLoaded", async () => {
    await fetchProducts();

    const searchInput = document.getElementById("search");
    searchInput.addEventListener("input", () => {
        const query = searchInput.value.trim().toLowerCase();
        filterProducts(query);
    });
});


let allProducts = [];


async function fetchProducts() {
    try {
        const response = await fetch("http://localhost:3000/");
        if (!response.ok) {
            throw new Error("No se pudieron cargar los productos");
        }

        allProducts = await response.json(); 
        renderProducts(allProducts);

    } catch (error) {
        console.error("Error:", error);
        alert("Hubo un problema al cargar los productos");
    }
}


function renderProducts(products) {
    const productListContainer = document.getElementById("product-list");
    productListContainer.innerHTML = ""; 

    if (products.length === 0) {
        productListContainer.innerHTML = "<p>No hay productos disponibles</p>";
        return;
    }

    products.forEach(producto => {
        const productCard = document.createElement("div");
        productCard.classList.add("card");

        const productTitle = document.createElement("h3");
        productTitle.classList.add("card-title");
        productTitle.textContent = producto.name;

        const productStock = document.createElement("p");
        productStock.classList.add("card-stock");
        productStock.textContent = `Stock: ${producto.stock}pz`;

        const productPrice = document.createElement("span");
        productPrice.classList.add("card-precio");
        productPrice.textContent = `$${producto.price.toFixed(2)}`;

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("card-button", "card-button_delete");
        deleteButton.innerHTML = '<i class="bi bi-trash-fill"></i>';
        deleteButton.setAttribute("data-id", producto._id);

        // Agregar evento al botón de eliminar
        deleteButton.addEventListener("click", async () => {
            if (confirm(`¿Seguro que deseas eliminar ${producto.name}?`)) {
                await fetch(`http://localhost:3000/${producto._id}`, { method: "DELETE" });
                fetchProducts(); 
            }
        });

        productCard.appendChild(productTitle);
        productCard.appendChild(productStock);
        productCard.appendChild(deleteButton);
        productCard.appendChild(productPrice);

        productListContainer.appendChild(productCard);
    });
}

function filterProducts(query) {
    const filteredProducts = allProducts.filter(producto =>
        producto.name.toLowerCase().includes(query)
    );
    renderProducts(filteredProducts);
}
