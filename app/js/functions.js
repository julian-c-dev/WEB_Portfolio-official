// & TOGGLE Theme dark/light
const desktopNav = document.querySelector(".nav__desktop");
const mobileNav = document.querySelector(".nav__mobile");
const section = document.querySelectorAll(".section");
const title = document.querySelector(".title");

const stwch_Theme = document.querySelector("#handlerTheme");

stwch_Theme.addEventListener("click", themeEvent);

function themeEvent() {
  mobileNav.classList.toggle("dark");
  desktopNav.classList.toggle("dark");
  title.classList.toggle("darkest");
  for (let i = 0; i < section.length; i++) {
    section[i].classList.toggle("dark");
  }
}

// & REMOVE CLASSES after 1200px
const swiper1 = document.querySelector(".job-swiper-frame");
const swiper2 = document.querySelector(".swiper");
const swiper3 = document.querySelectorAll(".mySwiper");
const swiper4 = document.querySelector(".swiper-wrapper");
const swiper5 = document.querySelector(".swiper-slide");
