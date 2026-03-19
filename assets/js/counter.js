const counters = document.querySelectorAll('.aei-counter-number');

let started = false;

function runCounter() {

    if (started) return;

    const section = document.getElementById('aei-counter');
    const sectionTop = section.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (sectionTop < screenHeight - 100) {

        counters.forEach(counter => {

            const target = +counter.getAttribute('data-target');
            const suffix = counter.getAttribute('data-suffix') || "";

            const duration = 1500;
            const stepTime = 20;
            const steps = duration / stepTime;
            const increment = target / steps;

            let count = 0;

            const updateCount = () => {
                count += increment;

                if (count < target) {
                    counter.innerText = Math.floor(count).toLocaleString() + suffix;
                    setTimeout(updateCount, stepTime);
                } else {
                    counter.innerText = target.toLocaleString() + suffix;
                }
            };

            updateCount();
        });

        started = true;
    }
}

window.addEventListener('scroll', runCounter);
window.addEventListener('load', runCounter);