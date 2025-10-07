const carrusel = document.querySelector('.carrusel');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
//cambio
const totalImages = 6;
let currentIndex = 0;

function updateCarrusel() {
  const offset = -currentIndex * 600; // Ancho de imagen
  carrusel.style.transform = `translateX(${offset}px)`;
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  updateCarrusel();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalImages;
  updateCarrusel();
});

