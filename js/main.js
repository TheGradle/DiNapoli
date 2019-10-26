var place = document.querySelector('.page-main-slide'),
    header = document.querySelector('header'),
    currentSlide = 2,
    currentOpacity = 0;

setInterval(nextSlide, 3000);

function nextSlide() {
  if (currentSlide > 5) {
    currentSlide = 1;
  }

  place.style.backgroundImage = "url(img/slide-" + currentSlide + ".webp";
  currentOpacity = 0;

  currentSlide++;
}

window.addEventListener('scroll', function() {
  if (pageYOffset >= 150) {
    header.style.background = "#2b2b2b";
  } else if (pageYOffset <= 150) {
    header.style.background = "none";
  }
});