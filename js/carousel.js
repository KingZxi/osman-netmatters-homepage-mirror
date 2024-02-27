$(".slick-banner").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  prevArrow: false,
  nextArrow: false,
});

const dots = document.querySelector(".slick-dots");

Array.from(dots.children).forEach((child) => {
  const span = document.createElement("span");
  child.appendChild(span);
});
