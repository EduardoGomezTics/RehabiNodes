// js/app.js
document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.getElementById('mainNavbar');

    // 1. Glassmorphism scroll effect
    function onScroll() {
        if (window.scrollY > 60) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // 2. Active nav-link highlighter (IntersectionObserver)
    var navLinks = document.querySelectorAll('.navbar-nav .nav-link[href^="#"]');
    var sections = [];

    navLinks.forEach(function (link) {
        var target = document.querySelector(link.getAttribute('href'));
        if (target) sections.push(target);
    });

    if (sections.length > 0 && 'IntersectionObserver' in window) {
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    navLinks.forEach(function (l) { l.classList.remove('active'); });
                    var activeLink = document.querySelector(
                        '.navbar-nav .nav-link[href="#' + entry.target.id + '"]'
                    );
                    if (activeLink) activeLink.classList.add('active');
                }
            });
        }, {
            rootMargin: '-20% 0px -60% 0px',
            threshold: 0
        });

        sections.forEach(function (section) { observer.observe(section); });
    }
});