let cart = [];

function addToCart(productName, price) {
    cart.push({ productName, price });
    updateCartUI();
}

function updateCartUI() {
    const cartIcon = document.querySelector('.fa-cart-shopping');
    cartIcon.dataset.count = cart.length;
}

document.querySelectorAll('.fa-cart-plus').forEach(button => {
    button.addEventListener('click', () => {
        const productElement = button.closest('.pro');
        const productName = productElement.querySelector('h5').innerText;
        const price = productElement.querySelector('h4').innerText;
        addToCart(productName, price);
    });
});
