$(".slick-banner").slick({
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  prevArrow: false,
  nextArrow: false,
});

//Selecting dots container and buttons
const dots = document.querySelector(".slick-dots");
const buttons = document.querySelectorAll(".slick-dots li button");

//Creating a span within each button, this span is used to apply the dot around active items
Array.from(dots.children).forEach((child) => {
  const span = document.createElement("span");
  child.appendChild(span);
});

//For each loop that clears the content within each button (they are numbered which causes added spacing)
buttons.forEach((button) => {
  console.log(button);
  button.textContent = " ";
});
