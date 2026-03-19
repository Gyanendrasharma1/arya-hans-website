const toggle = document.querySelector(".aei-menu-toggle");
const menu = document.querySelector(".aei-nav-menu");

// menu toggle
toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});

// dropdown mobile click
const dropdowns = document.querySelectorAll(".aei-dropdown");

dropdowns.forEach(drop => {
    drop.addEventListener("click", (e) => {
        if (window.innerWidth <= 768) {
            e.stopPropagation();
            drop.classList.toggle("active");
        }
    });
});