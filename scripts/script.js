let header = document.querySelector("header");
let nav = document.querySelector("nav");
let mainNavLinks = document.querySelectorAll("nav ul li a");
let arrow = document.querySelector(".arrow");
let aside = document.querySelector("aside");
let toTop = document.querySelector(".to-top");

nav.style.display = "none";
nav.style.visibility = "hidden";
aside.style.visibility = "hidden";
toTop.style.visibility = "hidden";

window.addEventListener("scroll", event => {
  let fromTop = window.scrollY;

  if (fromTop > 0) {
    arrow.style.opacity = 0;
    arrow.style.animationFillMode = "none";
  } else {
    arrow.style.opacity = 0.8;
  }

  if (fromTop >= window.innerHeight*0.9) {
    header.style.opacity = 0;
    nav.style.display = "flex";
    nav.style.visibility = "visible";
    toTop.style.visibility = "visible";
    toTop.style.opacity = 1;
  } else {
    header.style.opacity = 1;
    nav.style.display = "none";
    toTop.style.opacity = 0;
  }

  if (fromTop >= window.innerHeight/1.5) {
    aside.style.visibility = "visible";
    aside.style.opacity = 1;
  } else {
    aside.style.opacity = 0;
  }

  mainNavLinks.forEach(link => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});