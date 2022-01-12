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
    element.setAttribute("src", "/images/logo-acc.svg");
  }, 1000);
  setTimeout(() => {
    element.classList.remove("flip");
  }, 1200);
}
