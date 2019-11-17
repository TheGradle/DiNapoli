var place = document.querySelector('.page-main-slide'),
    header = document.querySelector('header'),
    toTop = document.querySelector('.button-top'),
    currentSlide = 2, // bc the first slide the user has already seen
    pageMain = document.querySelector('.page-main'),
    preloader = document.querySelector('.page-preloader'),
    hamb = document.querySelector('.header-nav-mobile__hamb'),
    hambMenu = document.querySelector('.header-nav-mobile-menu'),
    hambMenuCheck = false,
    hambMenuLinks = document.querySelectorAll('.header-nav-mobile-menu-list__item');

// Preloader
window.addEventListener('load', function() {
  setTimeout (function() {
    document.body.style.display = "block";
    if (!preloader.classList.contains('page-preloader_done')) {
      preloader.classList.add('page-preloader_done');
    }
  }, 1000);
});

// Slider
setInterval(nextSlide, 3000);

function nextSlide() {
  if (currentSlide > 5) {
    currentSlide = 1;
  }

  place.style.backgroundImage = "url(img/slides/slide-" + currentSlide + ".webp";

  currentSlide++;
}

// Header background animation at scroll 
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


// Hamburger menu
hamb.addEventListener('click', function() {
  if (!hambMenuCheck) {
    header.style.background = "#2b2b2b";
    hambMenu.style.display = "block";
    hambMenuCheck = true;
  } else if (hambMenuCheck) {
    hambMenu.style.display = "none";
    hambMenuCheck = false;
  }
});

hambMenuLinks.forEach(function(item) {
  item.addEventListener('click', function() {
    hambMenu.style.display = "none";
  });
});