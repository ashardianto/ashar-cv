let eduHeading = document.getElementById("edu--title");
let langHeading = document.getElementById("skill--title");

window.addEventListener("scroll", eduEffect);

function eduEffect() {
  if (window.scrollY >= 100) {
    eduHeading.style.transition = "1s ease-in-out";
    eduHeading.style.transform = "translateX(0px)";
    eduHeading.style.opacity = "1";
  } else {
    eduHeading.style.transition = "1s ease-in-out";
    eduHeading.style.transform = "translateX(-200px)";
    eduHeading.style.opacity = "0";
  }
}

window.addEventListener("scroll", skillEffect);

function skillEffect() {
  if (window.scrollY >= 450) {
    langHeading.style.transition = "1s ease-in-out";
    langHeading.style.transform = "translateX(0px)";
    langHeading.style.opacity = "1";
  } else {
    langHeading.style.transition = "1s ease-in-out";
    langHeading.style.transform = "translateX(-200px)";
    langHeading.style.opacity = "0";
  }
}
