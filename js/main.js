var place = document.querySelector('.page-main-slide'),
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

setInterval(function() {
  /*setTimeout(function() {
    setInterval(function() {
      if (currentOpacity != 0) {
        place.style.opacity = String(currentOpacity -= 0.01);
      } else {
        place.style.opacity = "0";
      }
    }, 25);
  }, 4000);*/

  /*if (currentOpacity != 1) {
    place.style.opacity = String(currentOpacity += 0.01);
  } else {
    place.style.opacity = "1";
  }*/
}, 15);