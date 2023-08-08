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
  let active = document.querySelector(".active");
  if ((ul.classList.contains = "active")) {
    active.classList.remove("slide-in-menu");
  }
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

    let active = document.querySelector(".active");
    active.classList.add("slide-in-menu");
    isOpen = true;
  } else {
    menuClose();
  }
});

// Logo click handler
logo.addEventListener("click", () => {
  body.scrollIntoView({
    behavior: "smooth",
  });
  body.style.overflowX = "hidden";
  menuClose();
});

// About click handler
ul.children[0].addEventListener("click", () => {
  body.scrollIntoView({
    behavior: "smooth",
  });
  body.style.overflowX = "hidden";
  menuClose();
});

// Projects click handler
ul.children[1].addEventListener("click", () => {
  resume.scrollIntoView({
    behavior: "smooth",
  });
  body.style.overflowX = "hidden";
  menuClose();
});

// Contact click handler
ul.children[2].addEventListener("click", () => {
  footer.scrollIntoView({
    behavior: "smooth",
  });
  body.style.overflowX = "hidden";
  menuClose();
});
