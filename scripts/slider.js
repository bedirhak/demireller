document.addEventListener('DOMContentLoaded', () => {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.dk-slide');
    const dots = document.querySelectorAll('.dk-dot');
    const prevBtn = document.getElementById('dk-prev-btn');
    const nextBtn = document.getElementById('dk-next-btn');

    const showSlide = (slideIndex) => {
        slides.forEach((slide) => {
            slide.classList.remove('dk-active');
        });
        dots.forEach((dot) => {
            dot.classList.remove('dk-active');
        });

        slides[slideIndex].classList.add('dk-active');
        dots[slideIndex].classList.add('dk-active');
    };

    const nextSlide = () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    };

    const prevSlide = () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    };

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });

   // setInterval(nextSlide, 3000); // Otomatik geçiş için
});
