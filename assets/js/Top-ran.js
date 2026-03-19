// ===== SCROLL ANIMATION =====
const elements = document.querySelectorAll('.result.card, .intro.content, .intro.image');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.2
});

elements.forEach(el => {
    el.classList.add('animate');
    observer.observe(el);
});


// ===== OPTIONAL: SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href'))
            .scrollIntoView({
                behavior: 'smooth'
            });
    });
});