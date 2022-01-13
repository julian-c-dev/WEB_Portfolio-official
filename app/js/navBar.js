const nav = document.querySelector(".navBar");
const navDesk = document.querySelector(".nav__desktop");
const navMobile = document.querySelector(".nav__mobile");
const hiddenMenu = document.getElementById("hiddenMenu");
const hiddenMenuFrame = document.getElementById("hiddenMenuFrame");
const burgerBtn = document.querySelector(".burger__frame");

let menuOpen = false;
let flagClicked = false;
let lastScrollY = window.scrollY;
let menuTimeout = 800;
let menuBoolean = true;

// & Hidden bar - BOTH (desk & mobile)
// ! navDesk => blur effect / while navMobile => solid effect

window.addEventListener("scroll", () => {
  if (
    menuOpen === false &&
    window.scrollY > 150 &&
    lastScrollY < window.scrollY
  ) {
    nav.classList.add("navBar--hidden");
    navDesk.classList.remove("solid");
  }
  if (lastScrollY > window.scrollY) {
    nav.classList.remove("navBar--hidden");
  }
  if (window.scrollY > 200) {
    navDesk.classList.add("darkShadow");
  } else {
    navDesk.classList.remove("darkShadow");
  }
  if (window.scrollY <= 100) {
    navDesk.classList.add("solid");
    hiddenMenu.classList.add("solid");
  }

  lastScrollY = window.scrollY;
});

// & burger btn click => animiation icon burger to X

burgerBtn.addEventListener("click", () => {
  if (!menuOpen) {
    burgerBtn.classList.add("open");
    hiddenMenuFrame.classList.add("overlay");

    menuOpen = true;
  } else {
    burgerBtn.classList.remove("open");
    hiddenMenuFrame.classList.remove("overlay");
    menuOpen = false;
  }
});

// & slide ASIDE BAR on & off

burgerBtn.addEventListener("click", () => {
  if (menuBoolean) {
    hiddenMenu.style.display = "block";
    hiddenMenu.style.animation = `slideMenuOn ${menuTimeout / 1000}s ease`;
    menuBoolean = false;
  } else {
    hiddenMenu.style.animation = `slideMenuOff ${menuTimeout / 800}s ease`;
    setTimeout(() => {
      hiddenMenu.style.display = "none";
    }, menuTimeout);
    menuBoolean = true;
  }
});

// & slide ASIDE BAR off if resize over 700px

window.addEventListener("resize", closeMenuDueResize);
function closeMenuDueResize() {
  if (window.screen.width >= 700 && window.innerWidth >= 700) {
    hiddenMenu.style.display = "none";
    menuBoolean = true;
    burgerBtn.classList.remove("open");
    menuOpen = false;
    hiddenMenuFrame.classList.remove("overlay");
  }
}

// & slide ASIDE BAR off if clicking over any link
const sideLinks = document.querySelectorAll(".sideLinks");
const logoHidden = document.getElementById("logoHidden");

logoHidden.addEventListener("click", closeMenuDueClick);

for (let i = 0; 0 < sideLinks.length; i++) {
  sideLinks[i].addEventListener("click", closeMenuDueClick);
}

function closeMenuDueClick() {
  hiddenMenu.style.display = "none";
  menuBoolean = true;
  burgerBtn.classList.remove("open");
  menuOpen = false;
  hiddenMenuFrame.classList.remove("overlay");
}
