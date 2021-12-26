let language = "";
let item1 = document.getElementById("navItem1");
let inputLang = document.getElementById("lang").value;

inputLang.addEventListener("click", swtchLang());

function swtchLang() {
  if (inputLang === "1") {
    language = "en";
    console.log(language);
  }
  if (!inputLang) {
    language = "es";
    console.log(language);
  }
  toggleDescriptor(language);
}

function toggleDescriptor(language) {
  if (language === "en") {
    item1.innerHTML = "hi";
  } else {
    item1.innerHTML = "hola";
  }
}

const translations = {
  en: {
    navItem1: "About me",
    navItem2: "Experience",
    navItem3: "Skills",
    navItem4: "Conctact",
    navItem5: "Resume",
  },
  es: {
    navItem1: "Acerca de mí",
    navItem2: "Experiencia",
    navItem3: "Habilidades",
    navItem4: "Conctacto",
    navItem5: "Currículum",
  },
};
