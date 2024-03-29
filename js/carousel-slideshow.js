/*
$(".slideshow").slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 542000,
  prevArrow: false,
  nextArrow: false,
  infinite: true,
  draggable: false,

  responsive: [
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});
*/

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 100,
  mouseDrag: false,
  touchDrag: false,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplaySpeed: 200,
  autoplayHoverPause: true,
  autoWidth: true,
  autoHeight: true,
});
