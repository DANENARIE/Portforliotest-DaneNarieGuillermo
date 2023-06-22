//Dark Mode effect//
let darkModeIcon = document.querySelector("#darkMode-icon");
darkModeIcon.onclick = () => {
  darkModeIcon.classList.toggle("bx-sun");
  document.body.classList.toggle("night-theme");
};

//header scroll toggle//
window.onscroll = () => {
  let header = document.querySelector(".header");

  header.classList.toggle("sticky", window.scrollY > 100);
};
