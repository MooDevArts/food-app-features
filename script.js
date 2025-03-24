/* script.js */

document.addEventListener("DOMContentLoaded", () => {
    const filters = document.querySelectorAll(".filter");
    const products = document.querySelectorAll(".product");

    filters.forEach(filter => {
        filter.addEventListener("click", () => {
            const category = filter.textContent.toLowerCase();
            products.forEach(product => {
                if (product.textContent.toLowerCase().includes(category)) {
                    product.style.display = "block";
                } else {
                    product.style.display = "none";
                }
            });
        });
    });
});

function showProductDetails(productName) {
    alert(`Showing details for: ${productName}`);
}
