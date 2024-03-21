//This is such a garbage solution lol...

//cloneContainer contains the header element in a semantic container
let cloneContainer = document.querySelector("header");
let header = document.querySelector(".header");

let lastScrollTop = 0; //Stores the last known scrolll position, updated everytime scroll event is fired.

//A clone of the header is created in order to stop the page from bumping when the original is converted to fixed
let clone = header.cloneNode(true);
cloneContainer.appendChild(clone);

//The clone is hidde bby default, it acts as the sticky header
clone.style.top = "-40rem";
clone.classList.add("sticky-header");

let headerDisplayThreshold = 700; // Used to determine the amount the page needs to be scrolldowned for sticky header functionality to begin

document.addEventListener(
  "scroll",
  function () {
    let st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop && st > headerDisplayThreshold) {
      //Downscroll & past threshold
      clone.style.top = "-40rem";
    } else if (st <= headerDisplayThreshold) {
      //Upscroll & reached top
      clone.style.top = "-40rem";
    } else {
      //Upscroll & past threshold
      clone.style.top = "0";
    }
    lastScrollTop = st <= 0 ? 0 : st; //For mobile and other forms of negative scroll
  },
  false
);

clone.addEventListener(
  "wheel",
  function (e) {
    e.preventDefault();
  },
  { passive: false }
);

function stickyHeader() {
  if (window.scrollY > headerDisplayThreshold) {
    clone.classList.add("sticky-header");
    clone.style.display = "inline-block";
  } else {
    clone.classList.remove("sticky-header");
    clone.style.display = "none";
  }
}
