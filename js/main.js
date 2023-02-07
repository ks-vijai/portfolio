// Dom Elements

const menuButton = document.getElementById("menu-button");
const hamburgerButton = document.getElementById("hamburger-button");
const navBar = document.getElementById("navigation-bar");
const menuNavBar = document.getElementById("menu-navigation-bar");
const navBarItems = document.querySelectorAll(".menu-navigation-item");

let showMenu = false;

function toggleMenu() {
  if (!showMenu) {
    hamburgerButton.classList.add("open");
    navBar.classList.add("open");
    menuNavBar.classList.add("open");
    navBarItems.forEach((item) => item.classList.add("open"));
    showMenu = true;
  } else {
    hamburgerButton.classList.remove("open");
    navBar.classList.remove("open");
    menuNavBar.classList.remove("open");
    navBarItems.forEach((item) => item.classList.remove("open"));
    showMenu = false;
  }
}

menuButton.addEventListener("click", toggleMenu);
