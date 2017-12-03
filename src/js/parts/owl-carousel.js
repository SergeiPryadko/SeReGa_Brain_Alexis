$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    items: 1,
    dots: true,
    autoplay: true,
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
  });
  new WOW().init();
});
$(document).scroll(function(){
  var scrolltop = $(window).scrollTop();
  var element = $('.workExp').offset().top - 300;
  if(scrolltop > element) {
    $('.workExp__boxes').addClass('active-line');
  }
});