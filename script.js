document.addEventListener("DOMContentLoaded", () => {
    // Filtering functionality
    const filters = document.querySelectorAll(".filter");
    const products = document.querySelectorAll(".product");

    filters.forEach(filter => {
        filter.addEventListener("click", () => {
            const category = filter.getAttribute('data-category');
            products.forEach(product => {
                if (product.getAttribute('data-category') === category) {
                    product.style.display = "block";
                } else {
                    product.style.display = "none";
                }
            });
        });
    });

    // Dropdown toggle functionality
    const toggleButtons = document.querySelectorAll(".dropdown-toggle");
    toggleButtons.forEach(button => {
        button.addEventListener("click", () => {
            const content = button.nextElementSibling;
            const arrow = button.querySelector(".arrow");

            content.classList.toggle("active");
            arrow.textContent = content.classList.contains("active") ? "▲" : "▼";
        });
    });
});

function showProductDetails(productName) {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-btn">&times;</span>
            <h2>${productName}</h2>
            <p>Details about the product...</p>
        </div>
    `;
    document.body.appendChild(modal);

    // Close modal
    document.querySelector('.close-btn').addEventListener('click', () => {
        modal.remove();
    });
}
