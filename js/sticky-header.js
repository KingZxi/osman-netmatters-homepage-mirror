//This is such a garbage solution lol...

//Test contains the header element in a semantic container
let test = document.querySelector("header");
let header = document.querySelector(".header");

//A clone of the header is created in order to stop the page from bumping when the original is converted to fixed
let clone = header.cloneNode(true);
test.appendChild(clone);

//The clone is hidde bby default, it acts as the sticky header
clone.classList.add("sticky-header");

document.addEventListener("mousemove", (e) => {
  //clientY is used to determine where the mouse is to drop the header, scrollY determines how far the user is already scrolled down
  //e.target.closest is used to target the sub-menu as another case for the sticky header to remain on screen
  //this is done so when the user tries to  select something from the sub-menu, the cursor doesn't exit display range
  //causing it to disappear
  if (
    (e.clientY < 300 && window.scrollY > 300) ||
    (e.target.closest(".sub-menu") && window.scrollY > 300)
  ) {
    clone.style.top = "0";
  } else {
    clone.style.top = "-300px";
    document.removeEventListener("scroll", stickyHeader);
  }
});

function stickyHeader() {
  if (window.scrollY > 0) {
    clone.classList.add("sticky-header");
    clone.style.display = "inline-block";
  } else {
    clone.classList.remove("sticky-header");
    clone.style.display = "none";
  }
}
