let currentSlide = 0;

function showSlides() {
  const slides = document.querySelectorAll('.slide');
  slides.forEach((slide, index) => {
    slide.style.display = index === currentSlide ? 'block' : 'none';
  });
  currentSlide = (currentSlide + 1) % slides.length;
}

document.addEventListener('DOMContentLoaded', () => {
  showSlides();
  setInterval(showSlides, 3000);
});
