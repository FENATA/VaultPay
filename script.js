//DARK TOGGLE


const menuOpen = document.getElementById("menu-open");
const menuClose = document.getElementById("menu-close");
const sideBar = document.querySelector("#main #left");
const sidebarItems = document.querySelectorAll(
  "#main #left #nav-content #nav-title #nav-ul"
);

menuOpen.addEventListener("click", () => {
  sideBar.style.top = "0";
});

menuClose.addEventListener("click", () => {
  sideBar.style.top = "-60vh";
});

let activeItem = sidebarItems[0];

sidebarItems.forEach((element) => {
  element.addEventListener("click", () => {
    if (activeItem) {
      activeItem.removeAttribute("id");
    }

    element.setAttribute("id", "active");
    activeItem = element;
  });
});
