var place = document.querySelector('.page-main-slide'),
    header = document.querySelector('header'),
    toTop = document.querySelector('.button-top'),
    currentSlide = 2;

setInterval(nextSlide, 3000);

function nextSlide() {
  if (currentSlide > 5) {
    currentSlide = 1;
  }

  place.style.backgroundImage = "url(img/slide-" + currentSlide + ".webp";

  currentSlide++;
}

window.addEventListener('scroll', function() {
  if (pageYOffset >= 150) {
    header.style.background = "#2b2b2b";
  } else if (pageYOffset <= 150) {
    header.style.background = "none";
  }

  if (pageYOffset >= 300) {
    toTop.style.opacity = "1";
  } else if (pageYOffset <= 300) {
    toTop.style.opacity = "0";
  }
});