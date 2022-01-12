// & [NavBar] TOGGLE btwn Theme dark/light
const desktopNav = document.querySelector(".nav__desktop");
const mobileNav = document.querySelector(".nav__mobile");
const section = document.querySelectorAll(".section");
const title = document.querySelector(".title");
const stwch_Theme = document.querySelector("#handlerTheme");
const stwch_ThemeHidden = document.querySelector("#handlerThemeHidden");

stwch_Theme.addEventListener("click", themeEvent);
stwch_ThemeHidden.addEventListener("click", themeEvent);

function themeEvent() {
  mobileNav.classList.toggle("dark");
  desktopNav.classList.toggle("dark");
  title.classList.toggle("darkest");
  for (let i = 0; i < section.length; i++) {
    section[i].classList.toggle("dark");
  }
}

// & [Skill Section] Slider

let slideIndex = 2;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function currentDiv(n) {
  showDivs((slideIndex = n));
}

function showDivs(n) {
  let i;
  let x = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("slide-circle");

  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" hlgt", "");
  }
  x[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " hlgt";
}

// & [Experience Section] REMOVE CLASSES after 1250px (normal => slider cards)
const swiper1 = document.querySelector(".swiper1");
const swiper2 = document.querySelector(".swiper2");
const swiper3 = document.querySelector(".swiper3");
const swiper4 = document.querySelector(".swiper4");
let swiper = null;

window.onload = function () {
  if (window.screen.width >= 1250 && window.innerWidth >= 1250) {
    swiper1.classList.remove("job-swiper-frame");
    swiper2.classList.remove("swiper");
    swiper2.classList.remove("mySwiper");
    swiper3.classList.remove("swiper-wrapper");
    swiper4.classList.remove("swiper-slide");
    swiper = null;
  } else {
    swiper1.classList.add("job-swiper-frame");
    swiper2.classList.add("swiper");
    swiper2.classList.add("mySwiper");
    swiper3.classList.add("swiper-wrapper");
    swiper4.classList.add("swiper-slide");

    swiper = new Swiper(".mySwiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 50,
        stretch: 100,
        depth: 800,
        modifier: 1,
        slideShadows: false,
      },
    });
  }
};

window.addEventListener("resize", onResizeFunction);
function onResizeFunction() {
  if (window.screen.width >= 1250 && window.innerWidth >= 1250) {
    swiper1.classList.remove("job-swiper-frame");
    swiper2.classList.remove("swiper");
    swiper2.classList.remove("mySwiper");
    swiper3.classList.remove("swiper-wrapper");
    swiper4.classList.remove("swiper-slide");
    swiper = null;
  } else {
    swiper1.classList.add("job-swiper-frame");
    swiper2.classList.add("swiper");
    swiper2.classList.add("mySwiper");
    swiper3.classList.add("swiper-wrapper");
    swiper4.classList.add("swiper-slide");
    swiper = new Swiper(".mySwiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 50,
        stretch: 100,
        depth: 800,
        modifier: 1,
        slideShadows: false,
      },
    });
  }
}
