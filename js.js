const carousel = document.getElementById('carousel');
const cards = carousel.querySelectorAll('.card');

// Função para ajustar a rolagem infinita
function handleScroll() {
  // Quando a rolagem atinge o final
  if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth) {
    carousel.scrollLeft = 1; // Volta ao início
  }

  // Quando a rolagem está no início
  if (carousel.scrollLeft === 0) {
    carousel.scrollLeft = carousel.scrollWidth - carousel.clientWidth - 1; // Vai para o final
  }
}

// Adiciona o evento de scroll
carousel.addEventListener('scroll', handleScroll);