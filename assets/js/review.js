document.addEventListener('DOMContentLoaded', () => {

    const track = document.querySelector('.aei-reviews-track');
    const cards = document.querySelectorAll('.aei-review-card');
    const nextBtn = document.querySelector('.aei-btn.next');
    const prevBtn = document.querySelector('.aei-btn.prev');
    const slider = document.querySelector('.aei-reviews-slider');

    let index = 0;
    let autoSlide;

    let startX = 0;
    let endX = 0;

    /* =========================
       GET VISIBLE CARDS
    ========================= */
    function getVisibleCards() {
        if (window.innerWidth <= 768) return 1;
        if (window.innerWidth <= 992) return 2;
        return 3;
    }

    /* =========================
       UPDATE POSITION (NO SLIDE ANIMATION)
    ========================= */
    function updateSlider() {
        const cardWidth = cards[0].offsetWidth + 20;
        track.style.transition = "none";
        track.style.transform = `translateX(-${index * cardWidth}px)`;
    }

    /* =========================
       FADE EFFECT
    ========================= */
    function fadeSlide(callback) {
        track.style.transition = "opacity 0.4s ease";
        track.style.opacity = 0;

        setTimeout(() => {
            callback();
            track.style.opacity = 1;
        }, 300);
    }

    /* =========================
       NEXT
    ========================= */
    function nextSlide() {
        const visible = getVisibleCards();

        fadeSlide(() => {
            index += visible;

            if (index >= cards.length) {
                index = 0;
            }

            updateSlider();
        });
    }

    /* =========================
       PREV
    ========================= */
    function prevSlide() {
        const visible = getVisibleCards();

        fadeSlide(() => {
            index -= visible;

            if (index < 0) {
                index = Math.max(cards.length - visible, 0);
            }

            updateSlider();
        });
    }

    /* =========================
       AUTO SLIDE
    ========================= */
    function startAuto() {
        autoSlide = setInterval(nextSlide, 3000);
    }

    function stopAuto() {
        clearInterval(autoSlide);
    }

    /* =========================
       BUTTONS
    ========================= */
    nextBtn.addEventListener('click', () => {
        stopAuto();
        nextSlide();
        startAuto();
    });

    prevBtn.addEventListener('click', () => {
        stopAuto();
        prevSlide();
        startAuto();
    });

    /* =========================
       HOVER PAUSE (DESKTOP)
    ========================= */
    slider.addEventListener('mouseenter', stopAuto);
    slider.addEventListener('mouseleave', startAuto);

    /* =========================
       TOUCH SWIPE (MOBILE)
    ========================= */
    slider.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        stopAuto();
    });

    slider.addEventListener('touchend', (e) => {
        endX = e.changedTouches[0].clientX;

        const diff = startX - endX;
        const threshold = 50;

        if (diff > threshold) {
            nextSlide(); // swipe left
        } else if (diff < -threshold) {
            prevSlide(); // swipe right
        }

        startAuto();
    });

    /* =========================
       RESIZE FIX
    ========================= */
    window.addEventListener('resize', () => {
        index = 0;
        updateSlider();
    });

    /* =========================
       INIT
    ========================= */
    updateSlider();
    startAuto();

});