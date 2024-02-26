const hamburger = document.querySelector(".hamburger");
const sidebar = document.querySelector(".sidebar");
const main = document.querySelector(".main-content");

hamburger.addEventListener("click", () => {
  sidebar.classList.toggle("sidebar-reveal");
  main.classList.toggle("sidebar-push");
});
