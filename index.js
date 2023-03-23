const carousel = document.querySelector(".carousel-items");
let position = 0;

function slide() {
  position -= 100;
  carousel.style.transform = `translateX(${position}%)`;

  if (position <= -300) {
    position = 0;
  }
}

setInterval(slide, 3000);
