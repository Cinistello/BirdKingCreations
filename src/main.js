function openHamburger() {
  const menu = document.getElementById("hamburgerMenu");
  menu.style.display = "flex";
  menu.style.width = "250px";

}

function closeHamburger() {
  const menu = document.getElementById("hamburgerMenu");
  menu.style.width = "0";
  menu.style.display = "none";
}