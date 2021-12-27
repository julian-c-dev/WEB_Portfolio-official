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

// * enable hidden navBar

const nav = document.querySelector(".navBar");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  if (
    menuOpen === false &&
    window.scrollY > 200 &&
    lastScrollY < window.scrollY
  ) {
    nav.classList.add("navBar--hidden");
    closeOpenItems();
  }
  if (lastScrollY > window.scrollY) {
    nav.classList.remove("navBar--hidden");
  }

  lastScrollY = window.scrollY;
});

// * #menu hidden when resizing more than 700px

window.addEventListener("resize", menuOffAfter700);

function menuOffAfter700() {
  if (window.screen.width >= 700) {
    menuDiv.style.display = "none";
    menuOpen = false;
    menuBtn.classList.remove("open");
    menuBoolean = true;
  }
}

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
