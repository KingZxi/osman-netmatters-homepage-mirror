const hamburger = document.querySelector(".hamburger");
const hambutton = document.querySelector(".hambutton");
const sidebar = document.querySelector(".sidebar");
const main = document.querySelector(".main-content");

//Everything below here and also the hamburgerC toggle above is used for the clone header, I may change how this works later
const hamburgerC = document.querySelectorAll(".hamburger")[1];
const hambuttonC = document.querySelectorAll(".hambutton")[1];

hamburger.addEventListener("click", () => {
  sidebar.classList.toggle("sidebar-reveal");
  main.classList.toggle("sidebar-push");
  hambutton.classList.toggle("open");
  hambuttonC.classList.toggle("open");
  $("body").toggleClass("dimmed");
});

hamburgerC.addEventListener("click", () => {
  sidebar.classList.toggle("sidebar-reveal");
  main.classList.toggle("sidebar-push");
  hambutton.classList.toggle("open");
  hambuttonC.classList.toggle("open");
  $("body").toggleClass("dimmed");
});

document.addEventListener("click", (event) => {
  const target = event.target;
  const isSidebar = target.closest(".sidebar");
  const isHamburger = target.closest(".hamburger");

  if (!isSidebar && !isHamburger) {
    sidebar.classList.remove("sidebar-reveal");
    main.classList.remove("sidebar-push");
    hambutton.classList.remove("open");
    hambuttonC.classList.remove("open");
    $("body").removeClass("dimmed");
  }
});
