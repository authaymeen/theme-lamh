/** سلايدر البانر الرئيسي في الصفحة الرئيسية — تبديل تلقائي بسيط + أزرار Dots */
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('[data-component="hero-slider"]');
    if (!slider) return;

    const slides = [...slider.querySelectorAll('.hero-slide')];
    const dots = [...slider.parentElement.querySelectorAll('[data-slide-dot]')];
    if (slides.length < 2) return;

    let current = 0;

    function goTo(index) {
        slides[current].classList.add('hidden');
        dots[current]?.removeAttribute('data-active');
        current = (index + slides.length) % slides.length;
        slides[current].classList.remove('hidden');
        dots[current]?.setAttribute('data-active', '');
    }

    dots.forEach((dot, i) => dot.addEventListener('click', () => goTo(i)));

    setInterval(() => goTo(current + 1), 6000);
    dots[0]?.setAttribute('data-active', '');
});
