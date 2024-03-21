const hamburger = document.querySelector(".hamburger");
const hambutton = document.querySelector(".hambutton");
const sidebar = document.querySelector(".sidebar");
const main = document.querySelector(".main-content");

//Everything below here and also the hamburgerClone toggle above is used for the clone header, I may change how this works later
const hamburgerClone = document.querySelectorAll(".hamburger")[1];
const hambuttonClone = document.querySelectorAll(".hambutton")[1];

//Function for toggling sidebar, this is a function because this way it can be applied to both the clone header and regular header more simply.
function toggleSidebar(hamburger, hambutton, hambuttonClone) {
  //Toggling the elements
  sidebar.classList.toggle("sidebar-reveal");
  main.classList.toggle("sidebar-push");
  hambutton.classList.toggle("open");
  hambuttonClone.classList.toggle("open");

  //Applys dim to body
  $("body").toggleClass("dimmed");

  //Disables scrolling down on main body.
  if ($("body").hasClass("dimmed")) {
    $("body").css("overflow", "hidden");
  } else {
    $("body").css("overflow", "auto");
  }
}

//Calling the toggle sidebar for each hamburger button on each header.
hamburger.addEventListener("click", () =>
  toggleSidebar(hamburger, hambutton, hambuttonClone)
);
hamburgerClone.addEventListener("click", () =>
  toggleSidebar(hamburger, hambutton, hambuttonClone)
);

//This is used to close the sidebar if you click outside it whilst it is open.
document.addEventListener("click", (event) => {
  const target = event.target;
  const isSidebar = target.closest(".sidebar");
  const isHamburger = target.closest(".hamburger");

  //Checks if sidebar and hamburger are active:
  if (!isSidebar && !isHamburger) {
    sidebar.classList.remove("sidebar-reveal");
    main.classList.remove("sidebar-push");
    hambutton.classList.remove("open");
    hambuttonClone.classList.remove("open");

    $("body").removeClass("dimmed");

    //Disables scrolling down on main body.
    if ($("body").hasClass("dimmed")) {
      $("body").css("overflow", "hidden");
    } else {
      $("body").css("overflow", "auto");
    }
  }
});
