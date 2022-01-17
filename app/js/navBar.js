const nav = document.querySelector(".navBar");
const navDesk = document.querySelector(".nav__desktop");
const navMobile = document.querySelector(".nav__mobile");
const hiddenMenu = document.getElementById("hiddenMenu");
const hiddenMenuFrame = document.getElementById("hiddenMenuFrame");
const burgerBtn = document.querySelector(".burger__frame");
const logoHidden = document.getElementById("logoHidden");
const sideLinks = document.querySelectorAll(".sideLinks");

let menuOpen = false;
let flagClicked = false;
let lastScrollY = window.scrollY;
let menuTimeout = 800;
let menuBoolean = true;

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

logoHidden.addEventListener("click", closeMenuDueClick);
sideLinks[0].onclick = closeMenuDueClick;
sideLinks[1].onclick = closeMenuDueClick;
sideLinks[2].onclick = closeMenuDueClick;
sideLinks[3].onclick = closeMenuDueClick;
// ! I tried a for loop, but I dunno why I got sideLinks last item undefinied and throw error

function closeMenuDueClick() {
  hiddenMenu.style.display = "none";
  burgerBtn.classList.remove("open");
  hiddenMenuFrame.classList.remove("overlay");
  menuBoolean = true;
  menuOpen = false;
}
