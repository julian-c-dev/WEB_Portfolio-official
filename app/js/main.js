// &  NAVBAR

// * Fliping logo ANIMATION onmouseOver
function flipping(element) {
  element.classList.add("flip");
  setTimeout(() => {
    element.setAttribute("src", "/images/logo-acc-lg.svg");
  }, 200);
  setTimeout(() => {
    element.setAttribute("src", "/images/logo-acc.svg");
  }, 400);
  setTimeout(() => {
    element.setAttribute("src", "/images/logo-acc-lg.svg");
  }, 600);
  setTimeout(() => {
    element.setAttribute("src", "/images/logo.svg");
  }, 800);
  setTimeout(() => {
    element.setAttribute("src", "/images/logo-acc-lg.svg");
  }, 1000);
  setTimeout(() => {
    element.setAttribute("src", "/images/logo-acc.svg");
  }, 1200);
  setTimeout(() => {
    element.setAttribute("src", "/images/logo-acc-lg.svg");
  }, 1300);
  setTimeout(() => {
    element.setAttribute("src", "/images/logo-acc.svg");
  }, 1400);
  setTimeout(() => {
    element.classList.remove("flip");
  }, 1600);
}

let menuOpen = false;
let flagClicked = false;

// * menu-btn animation = menu icon to X
const burgerFrame = document.querySelector(".burger__frame");

burgerFrame.addEventListener("click", () => {
  if (!menuOpen) {
    burgerFrame.classList.add("open");
    menuOpen = true;
  } else {
    burgerFrame.classList.remove("open");
    menuOpen = false;
  }
});

// * .frame-logos from flex-clm to grid at 636px

const containerLogos = document.querySelector(".frame-logos ");
