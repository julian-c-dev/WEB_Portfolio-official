// & [Experience Section] REMOVE CLASSES after 1250px (normal => sliders cards)
// & sections: skills & experience
const swiper1 = document.querySelector(".swiper1");
const swiper2 = document.querySelector(".swiper2");
const swiper3 = document.querySelector(".swiper3");
const swiper4 = document.querySelector(".swiper4");
let swiper = null;

const flipCard = document.querySelectorAll(".flip-card");
let slideIndex = 2;
let dots = document.querySelectorAll(".slide-circle");

function showDivs(n) {
  let mySlides = document.querySelectorAll(".mySlides");
  if (n > mySlides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = mySlides.length;
  }
  for (let i = 0; i < mySlides.length; i++) {
    mySlides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" transparent", "");
  }
  mySlides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " transparent";
}
function plusDivs(n) {
  showDivs((slideIndex += n));
}
function currentDiv(n) {
  showDivs((slideIndex = n));
}

window.onload = function () {
  if (window.screen.width >= 1250 && window.innerWidth >= 1250) {
    for (let j = 0; j < flipCard.length; j++) {
      flipCard[j].classList.remove("mySlides");
    }
    for (let z = 0; z < flipCard.length; z++) {
      flipCard[z].style.display = "block";
    }

    swiper1.classList.remove("job-swiper-frame");
    swiper2.classList.remove("swiper");
    swiper2.classList.remove("mySwiper");
    swiper3.classList.remove("swiper-wrapper");
    swiper4.classList.remove("swiper-slide");
    swiper = null;
  } else {
    for (let j = 0; j < flipCard.length; j++) {
      flipCard[j].classList.add("mySlides");
    }
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
    showDivs(slideIndex);
  }
};

window.addEventListener("resize", onResizeFunction);
function onResizeFunction() {
  if (window.screen.width >= 1250 && window.innerWidth >= 1250) {
    flipCard[0].classList.remove("mySlides");
    flipCard[1].classList.remove("mySlides");
    flipCard[2].classList.remove("mySlides");
    flipCard[3].classList.remove("mySlides");
    for (let z = 0; z < flipCard.length; z++) {
      flipCard[z].style.display = "block";
    }

    swiper1.classList.remove("job-swiper-frame");
    swiper2.classList.remove("swiper");
    swiper2.classList.remove("mySwiper");
    swiper3.classList.remove("swiper-wrapper");
    swiper4.classList.remove("swiper-slide");
    swiper = null;
  } else {
    flipCard[0].classList.add("mySlides");
    flipCard[1].classList.add("mySlides");
    flipCard[2].classList.add("mySlides");
    flipCard[3].classList.add("mySlides");

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
    showDivs(slideIndex);
  }
}

// & TOGGLE btwn Theme dark/light

const stwch_Theme = document.querySelector("#handlerTheme");
const stwch_ThemeHidden = document.querySelector("#handlerThemeHidden");
const checkboxes = document.querySelectorAll(".themeCheck");
const body = document.getElementsByClassName("dark-theme");
const iconBulb = document.querySelector(".fa-lightbulb");
const elementsHlgt = document.getElementsByClassName("hlgt");
const logo = document.getElementById("logo");
const logoMobile = document.getElementById("logoHidden");
const burguer = document.querySelector(".burger__btn");
console.log(checkboxes);

let colorTheme = true;

stwch_Theme.addEventListener("click", themeEventDesktop);
stwch_ThemeHidden.addEventListener("click", themeEventMobile);

function themeEventDesktop() {
  if (stwch_Theme.checked) {
    stwch_ThemeHidden.checked = true;
  } else {
    stwch_ThemeHidden.checked = false;
  }
}

function themeEventMobile() {
  if (stwch_ThemeHidden.checked) {
    stwch_Theme.checked = true;
  } else {
    stwch_Theme.checked = false;
  }
}

checkboxes.forEach((element) => element.addEventListener("click", toggleTheme));

function toggleTheme() {
  if (colorTheme === true) {
    document.body.className = document.body.className.replace(
      "dark-theme",
      "light-theme"
    );
    colorTheme = false;
    toggleBulbs();
    toggleHlgt();
    toggleLogo();
  } else {
    document.body.className = document.body.className.replace(
      "light-theme",
      "dark-theme"
    );
    colorTheme = true;
    toggleBulbs();
    toggleHlgt();
    toggleLogo();
  }
}

function toggleBulbs() {
  if (colorTheme) {
    iconBulb.classList.remove("fas");
    iconBulb.classList.add("far");
  } else {
    iconBulb.classList.remove("far");
    iconBulb.classList.add("fas");
  }
}

function toggleHlgt() {
  if (colorTheme) {
    for (let i = 0; i < elementsHlgt.length; i++) {
      elementsHlgt[i].classList.remove("hlgt-light");
    }
  }
  if (!colorTheme) {
    for (let i = 0; i < elementsHlgt.length; i++) {
      elementsHlgt[i].classList.add("hlgt-light");
    }
  }
}

function toggleLogo() {
  if (colorTheme) {
    logo.src = "logo-acc.e023b825.svg";
    logoMobile.src = "logo-acc.e023b825.svg";
  }
  if (!colorTheme) {
    logo.src = "logo.29e49919.svg";
    logoMobile.src = "logo.29e49919.svg";
  }
}

//& flipping flip-card after clicking (for mobiles)
/*
let flipFront = document.querySelectorAll(".flip-card-front");
let flipBack = document.querySelectorAll(".flip-card-back");
let flipInner = document.querySelectorAll(".flip-card-inner");

for (let h = 0; h < flipCard.length; h++) {
  flipBack[h].addEventListener("click", clickable);
  function clickable() {
    flipBack[h].style.transform = "rotateY(0)";
    flipInner[h].style.transform = "rotateY(180deg)";
    flipFront[h].style.transform = "rotateY(180deg)";
  }
}
for (let h = 0; h < flipCard.length; h++) {
  flipFront[h].addEventListener("click", clickable2);
  function clickable2() {
    flipBack[h].style.transform = "rotateY(180g)";
    flipFront[h].style.transform = "rotateY(180deg)";
    flipInner[h].style.transform = "rotateY(0deg)";
  }
}*/
