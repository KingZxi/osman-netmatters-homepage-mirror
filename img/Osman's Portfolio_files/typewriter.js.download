const dynamicText = document.querySelector(".typewriter");
const caret = document.querySelector(".caret");
const words = ["Osman Mahmood"];

let wordIndex = 0;
let charIndex = 1;
let speed = 100;
let isDeleting = false;

const typeEffect = () => {
  const currentWord = words[wordIndex];
  const currentChar = (currentWord.subString = currentWord.substring(
    0,
    charIndex
  ));
  dynamicText.textContent = currentChar;
  if (!isDeleting && charIndex < currentWord.length) {
    //If this condiiton is true, the next character will be typed
    charIndex++;
    setTimeout(typeEffect, speed);
    caret.classList.add("stop-blinking");
  } else if (isDeleting && charIndex > 0) {
    // If this condition is true, remove the previous character
    charIndex--;
    setTimeout(typeEffect, 100);
  } else {
    //If word is deleted, next word will begin typing
    // isDeleting = !isDeleting;
    caret.classList.remove("stop-blinking");
    // wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
    // setTimeout(typeEffect, 1200);
  }
};

typeEffect();
