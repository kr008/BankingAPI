jQuery(document).ready(function ($) {

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function () {
    $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
    return false;
  });

  new WOW().init();

  $('.nav-menu').superfish({
    animation: {
      opacity: 'show'
    },
    speed: 400
  });

});
