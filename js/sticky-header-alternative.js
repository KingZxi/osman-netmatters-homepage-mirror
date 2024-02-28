//This is such a garbage solution lol...

//Test contains the header element in a semantic container
let test = document.querySelector("header");
let header = document.querySelector(".header");

//A clone of the header is created in order to stop the page from bumping when the original is converted to fixed
let clone = header.cloneNode(true);
test.appendChild(clone);

//The clone is hidde bby default, it acts as the sticky header
clone.style.display = "none";

let currentElement = null;

window.onmousemove = function (e) {
  currentElement = e.target;
};

window.onscroll = function (e) {
  if (!(this.oldScroll > this.scrollY) && window.scrollY > 300) {
    clone.classList.add("sticky-header");
    clone.style.display = "inline-block";
  } else if (currentElement && currentElement.closest(".sub-menu")) {
    clone.style.display = "inline-block";
  } else {
    clone.classList.remove("sticky-header");
    clone.style.display = "none";
  }

  this.oldScroll = this.scrollY;
};

function stickyHeader() {
  if (window.scrollY > 0) {
    clone.classList.add("sticky-header");
    clone.style.display = "inline-block";
  } else {
    clone.classList.remove("sticky-header");
    clone.style.display = "none";
  }
}
