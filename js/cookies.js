const accept = document.querySelector(".btn-accept");
const cookies = document.querySelector(".cookies");


accept.addEventListener("click", () => {
  cookies.classList.toggle("cookies-hide");
  document.cookie = "cookies=true";
});

//Checking to see if user has accepted cookies before
if (document.cookie.includes("cookies=true")) {
  cookies.classList.toggle("cookies-hide");
}
