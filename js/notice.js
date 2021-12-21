$(document).ready(function () {
  $('#news-slider').owlCarousel({
    items: 6,
    itemsDesktop: [
      1199,
      4
    ],
    itemsDesktopSmall: [
      980,
      3
    ],
    itemsMobile: [
      740,
      2
    ],
    itemsMobile: [
      500,
      1
    ],
    navigation: true,
    navigationText: [
      '',
      ''
    ],
    pagination: true,
    autoPlay: true
  });
});
