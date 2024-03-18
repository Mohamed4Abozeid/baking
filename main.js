let logo = document.getElementById("logo");
let light = document.getElementById("light");
let nav = document.getElementById("nav");

document.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    nav.classList.add("nav-scrol");
    logo.style.display = "none";
    light.style.display = "block";
    nav.style.backgroundColor = "#fff";
  } else {
    nav.classList.remove("nav-scrol");

    logo.style.display = "block";
    light.style.display = "none";
    nav.style.backgroundColor = "transparent";
  }

  if (window.scrollY > 70) {
    document.getElementById("btn-top").style.display = "block";
  } else {
    document.getElementById("btn-top").style.display = "none";
  }
});

function scrollToTop() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth' // smooth scrolling animation
  });}
