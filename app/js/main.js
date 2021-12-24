//& navBar

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

// * slide sidebar on & off

let menuDiv = document.getElementById("menu");
let menuBtnToggle = document.querySelector(".burger");
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

// * Arrow btn animation + arrow_content animation

let arrowBtn = document.querySelectorAll(".arrow");
let arrowContent = document.querySelectorAll(".arrow__content");
let tGroupElement = document.querySelectorAll(".menu__tGroup");

for (let i = 0; i < tGroupElement.length; i++) {
  let arrowUp = false;
  let arrowBoolean = false;
  tGroupElement[i].addEventListener(
    "click",
    () => {
      if (!arrowUp) {
        arrowBtn[i].classList.add("up");
        tGroupElement[i].style.borderBottom = "none";

        arrowContent[i].style.opacity = "1";
        arrowContent[i].style.height = "13rem";

        arrowUp = true;
        arrowBoolean = false;
      } else {
        arrowBtn[i].classList.remove("up");
        arrowContent[i].style.opacity = "0";
        arrowContent[i].style.height = "0";
        tGroupElement[i].style.borderBottom = "1px solid var(--color-body)";
        arrowUp = false;
        arrowBoolean = true;
      }
    },
    false
  );
}

// * nav__items collapsibles

let dropBtns = document.querySelectorAll(".dropdown");

function closeOpenItems() {
  openMenus = document.querySelectorAll(".dropMenu");
  openMenus.forEach(function (menus) {
    menus.classList.remove("show");
  });
}

dropBtns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    let dropContent = btn.querySelector(".dropMenu"),
      shouldOpen = !dropContent.classList.contains("show");

    closeOpenItems();

    if (shouldOpen) {
      dropContent.classList.add("show");
    }
    e.stopPropagation();
  });
});

window.addEventListener("click", function (event) {
  if (event.target != dropBtns) {
    closeOpenItems();
  }
});
