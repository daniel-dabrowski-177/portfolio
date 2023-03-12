let body = document.querySelector("body");
let nav = document.querySelector(".nav");
let ul = document.querySelector(".ul");
let menu = document.querySelector(".menu");
let logo = document.querySelector(".logo");
let resume = document.querySelector(".resume");
let footer = document.querySelector(".footer");
let isOpen = false;

let menuClose = () => {
  menu.children[0].attributes[0].textContent = "./assets/icons/burger.svg";
  logo.style.visibility = "visible";
  ul.classList.remove("active");
  body.style.overflow = "scroll";
  isOpen = false;
};

// Burger click handler
menu.addEventListener("click", () => {
  if (!isOpen) {
    menu.children[0].attributes[0].textContent =
      "./assets/icons/burger-close.svg";
    logo.style.visibility = "hidden";
    ul.classList.add("active");
    window.scrollTo(0, 0);
    body.style.overflow = "hidden";
    isOpen = true;
  } else {
    menuClose();
  }
});

// About click handler
ul.children[0].addEventListener("click", () => {
  menuClose();
  body.scrollIntoView({
    behavior: "smooth",
  });
  body.style.overflowX = "hidden";
});

// Projects click handler
ul.children[1].addEventListener("click", () => {
  menuClose();
  resume.scrollIntoView({
    behavior: "smooth",
  });
  body.style.overflowX = "hidden";
});

// Contact click handler
ul.children[2].addEventListener("click", () => {
  menuClose();
  footer.scrollIntoView({
    behavior: "smooth",
  });
  body.style.overflowX = "hidden";
});
