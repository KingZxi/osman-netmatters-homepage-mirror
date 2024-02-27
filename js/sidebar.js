const hamburger = document.querySelector(".hamburger");
const hambutton = document.querySelector(".hambutton");
const sidebar = document.querySelector(".sidebar");
const main = document.querySelector(".main-content");

hamburger.addEventListener("click", () => {
  sidebar.classList.toggle("sidebar-reveal");
  main.classList.toggle("sidebar-push");
  hambutton.classList.toggle("open");
  hambuttonC.classList.toggle("open");
});

//Everything below here and also the hamburgerC toggle above is used for the clone header, I may change how this works later
const hamburgerC = document.querySelectorAll(".hamburger")[1];
const hambuttonC = document.querySelectorAll(".hambutton")[1];

hamburgerC.addEventListener("click", () => {
  sidebar.classList.toggle("sidebar-reveal");
  main.classList.toggle("sidebar-push");
  hambutton.classList.toggle("open");
  hambuttonC.classList.toggle("open");
});
