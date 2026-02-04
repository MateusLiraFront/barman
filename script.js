
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