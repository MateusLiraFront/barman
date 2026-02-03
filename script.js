
document.addEventListener("DOMContentLoaded", () => {
    const logo = document.querySelector(".logo-center");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    logo.classList.add("animate");
                    observer.unobserve(logo);
                }
            });
        },
        {
            threshold: 0.5
        }
    );

    observer.observe(logo);
});


document.addEventListener("DOMContentLoaded", () => {
    const drinks = document.querySelectorAll(".drink");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.3
        }
    );

    drinks.forEach(drink => observer.observe(drink));
});



document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
    const total = cards.length;
    let current = 2;

    function render() {
        cards.forEach(card => card.className = "card");

        cards[current].classList.add("active");

        cards[(current + 1) % total].classList.add("right");
        cards[(current + 2) % total].classList.add("far");

        cards[(current - 1 + total) % total].classList.add("left");
        cards[(current - 2 + total) % total].classList.add("far");
    }

    function next() {
        current = (current + 1) % total;
        render();
    }

    // Clique manual
    cards.forEach((card, index) => {
        card.addEventListener("click", () => {
            current = index;
            render();
            resetAuto();
        });
    });

    let auto = setInterval(next, 2000);

    function resetAuto() {
        clearInterval(auto);
        auto = setInterval(next, 2000);
    }

    render();
});


document.addEventListener("DOMContentLoaded", () => {
    const contactCard = document.querySelector(".contact-card");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                contactCard.classList.add("animate");
                observer.unobserve(contactCard); // anima só uma vez
            }
        });
    }, {
        threshold: 0.3
    });

    observer.observe(contactCard);
});