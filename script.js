let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    search.classList.remove('active');
    carts.classList.remove('active');
}

let search = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    search.classList.toggle('active');
    navbar.classList.remove('active');
    carts.classList.remove('active');
}

let carts = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    carts.classList.toggle('active');
    navbar.classList.remove('active');
    search.classList.remove('active');
}

window.scroll = () =>{
    navbar.classList.remove('active');
    search.classList.remove('active');
    carts.classList.remove('active');
}