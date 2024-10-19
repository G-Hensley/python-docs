document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("navbar");
    const navMenu = document.getElementById("nav-menu");
    const navMenuLabel = document.getElementById("nav-menu-label");
    const navLinks = document.querySelectorAll(".nav-link");
    let currentHash = window.location.hash;

    // Function to toggle the mobile menu
    function toggleNavMenu() {
        navMenu.addEventListener("click", () => {
            navMenuLabel.classList.toggle("menu-clicked");
            navbar.classList.toggle("navbar-animation-in");
        });
    }

    // Function to highlight the active link based on the current hash
    function highlightActiveLink() {
        navLinks.forEach(link => {
            link.classList.toggle("active", link.hash === currentHash);
        });
    }

    // Add event listeners for link clicks
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            currentHash = link.hash;
            highlightActiveLink();
            navMenuLabel.classList.remove("menu-clicked");
            navbar.classList.remove("navbar-animation-in");
        });
    });

    // Initial function calls
    toggleNavMenu();
    highlightActiveLink();
});
