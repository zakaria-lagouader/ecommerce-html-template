const cart = document.getElementById('cart-section');
const cartBtn = document.getElementById('cart-btn');
const cartBtn2 = document.getElementById('cart-btn2');
const closecart = document.getElementById('close');
const addToCart = document.getElementById('add-to-cart');
const navbar = document.getElementById('side-nav');
const nav_btn = document.getElementById('nav-btn');
const nav_close = document.getElementById('close-nav');

cartBtn.addEventListener('click', (e) => {
    e.preventDefault();
    document.body.classList.toggle('move-body');
    cart.classList.toggle('move-cart');
})
if (addToCart) {
    addToCart.addEventListener('click', (e) => {
        e.preventDefault();
        document.body.classList.toggle('move-body');
        cart.classList.toggle('move-cart');
    })
}
cartBtn2.addEventListener('click', (e) => {
    e.preventDefault();
    document.body.classList.toggle('move-body');
    cart.classList.toggle('move-cart');
})
closecart.addEventListener('click', (e) => {
    e.preventDefault();
    document.body.classList.remove('move-body');
    cart.classList.remove('move-cart');
})
nav_btn.addEventListener('click', (e) => {
    e.preventDefault()
    navbar.classList.add('show-nav')
})
nav_close.addEventListener('click', (e) => {
    e.preventDefault()
    navbar.classList.remove('show-nav')
})
