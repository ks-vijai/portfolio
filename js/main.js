// Dom Elements

const menuButton = document.getElementById("menu-button");
const hamburgerButton = document.getElementById("hamburger-button");

let showMenu = false;

function toggleMenu() {
  if (!showMenu) {
    hamburgerButton.classList.add("open");
    showMenu = true;
  } else {
    hamburgerButton.classList.remove("open");
    showMenu = false;
  }
}

menuButton.addEventListener("click", toggleMenu);
