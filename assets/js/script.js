
const menuToggle = document.querySelector('.menu-toggle');
const navbarLinks = document.querySelector('.navbar-links');

menuToggle.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});
const video = document.getElementById("meuVideo");

video.addEventListener("ended", () => {
    video.currentTime = 0;
    video.pause();
    video.load();
});

const slides = document.querySelectorAll('.carousel-slides img');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        slide.style.opacity = '0';
    });
    slides[index].classList.add('active');
    slides[index].style.opacity = '1';
}

// Próximo
nextButton.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

// Anterior
prevButton.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});

 function startCountdown(id, hours) {
        const el = document.getElementById(id);
        if (!el) return;

        let time = hours * 60 * 60;

        setInterval(() => {
            const h = Math.floor(time / 3600);
            const m = Math.floor((time % 3600) / 60);
            const s = time % 60;

            el.textContent = `${h}h ${m}m ${s}s`;

            if (time <= 0) {
                el.textContent = "Oferta Expirada ⌛";
            }

            time--;
        }, 1000);
    }

    // único contador ativo
    startCountdown("countdown1-mobile", 6);
