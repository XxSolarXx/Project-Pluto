// Example: Add to cart button functionality with smooth animation
document.querySelectorAll('.item-card button').forEach(button => {
    button.addEventListener('click', function() {
        this.innerText = "Added to Cart!";
        this.style.backgroundColor = "#2ecc71";
        setTimeout(() => {
            this.innerText = "Add to Cart";
            this.style.backgroundColor = "#27ae60";
        }, 2000);
    });
});
