const cards = document.querySelectorAll('.aei-teaching-card');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translatey(0)";
        }
    });
}, { threshold: 0.2 });

cards.forEach(card => observer.observe(card));