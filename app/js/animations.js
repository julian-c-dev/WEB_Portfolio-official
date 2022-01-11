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

// * slide sidebar on & off

let menuDiv = document.getElementById("menu");
let menuBtnToggle = document.querySelector(".burger__frame");
let menuBoolean = true;

let menuTimeout = 800;

menuBtnToggle.addEventListener("click", () => {
  if (menuBoolean) {
    menuDiv.style.display = "block";
    menuDiv.style.animation = `slideMenuOn ${menuTimeout / 1000}s ease`;
    menuBoolean = false;
  } else {
    menuDiv.style.animation = `slideMenuOff ${menuTimeout / 800}s ease`;
    setTimeout(() => {
      menuDiv.style.display = "none";
    }, menuTimeout);
    menuBoolean = true;
  }
});
