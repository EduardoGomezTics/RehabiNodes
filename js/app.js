// js/app.js
document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow');
            navbar.style.opacity = "0.95";
        } else {
            navbar.classList.remove('shadow');
            navbar.style.opacity = "1";
        }
    });
});