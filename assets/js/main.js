AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true // Solo anima una vez
});

$(document).ready(function(){
  $('.slick-carousel').slick({
      infinite: true,
      slidesToShow: 6, // Puedes ajustar este valor según tus necesidades
      slidesToScroll: 2,
      prevArrow: '<button type="button" class="slick-prev">Previous</button>',
      nextArrow: '<button type="button" class="slick-next">Next</button>',
      autoplay: true,  // Activa el autoplay
      autoplaySpeed: 1000,  // Establece la velocidad en milisegundos (por ejemplo, 2000ms = 2 segundos)
      prevArrow: '<button type="button" class="slick-prev">Previous</button>',
      nextArrow: '<button type="button" class="slick-next">Next</button>'
  });
});

document.addEventListener('DOMContentLoaded', function () {
  $('.equipo-carousel').slick({
      infinite: true,
      slidesToShow: 3,  // Puedes ajustar este valor según tus necesidades
      slidesToScroll: 1,
      prevArrow: '<button type="button" class="slick-prev">Previous</button>',
      nextArrow: '<button type="button" class="slick-next">Next</button>'
  });
});

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particles.json', function() {
  console.log('callback - particles-js config loaded');
});
