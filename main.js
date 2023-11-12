/*=================== MOBILE MENU ===================*/
const menu = document.getElementById("nav-menu"),
  menuWrapper = document.getElementById("nav-wrapper"),
  menuToggle = document.getElementById("nav-toggle"),
  menuClose = document.getElementById("nav-close");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    menuWrapper.classList.remove("hidden");
    menu.classList.add("show-menu");
    menuClose.classList.remove("hidden");
    menuToggle.classList.add("hidden");
  });
}

if (menuClose) {
  menuClose.addEventListener("click", () => {
    menuWrapper.classList.add("hidden");
    menu.classList.remove("show-menu");
    menuClose.classList.add("hidden");
    menuToggle.classList.remove("hidden");
  });
}
