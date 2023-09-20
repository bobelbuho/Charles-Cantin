
document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector(".navbar");

    navbar.addEventListener("mouseenter", function() {
        navbar.classList.add("navbar-visible");
    });

    navbar.addEventListener("mouseleave", function() {
        navbar.classList.remove("navbar-visible");
    });
});