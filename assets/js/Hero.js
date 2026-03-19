const slides = document.querySelectorAll(".aei-hero-slide");
const nextBtn = document.querySelector(".aei-hero-btn.next");
const prevBtn = document.querySelector(".aei-hero-btn.prev");

let index = 0;

// show slide
function showSlide(i) {
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    slides[i].classList.add("active");
}

// next
nextBtn.addEventListener("click", () => {
    index++;
    if (index >= slides.length) {
        index = 0;
    }
    showSlide(index);
});

// prev
prevBtn.addEventListener("click", () => {
    index--;
    if (index < 0) {
        index = slides.length - 1;
    }
    showSlide(index);
});

// auto slide
setInterval(() => {
    index++;
    if (index >= slides.length) {
        index = 0;
    }
    showSlide(index);
}, 4000);