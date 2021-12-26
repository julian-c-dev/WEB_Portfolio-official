// & TOGGLE Theme dark/light
const desktopNav = document.querySelector(".nav__desktop");
const mobileNav = document.querySelector(".nav__mobile");
const section = document.querySelector(".section");

const stwch_Theme = document.querySelector("#handlerTheme");

stwch_Theme.addEventListener("click", themeEvent);

function themeEvent() {
  mobileNav.classList.toggle("dark");
  desktopNav.classList.toggle("dark");
  section.classList.toggle("dark");
}
