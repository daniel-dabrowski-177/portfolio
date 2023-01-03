let body = document.querySelector("body");
let nav = document.querySelector(".nav");
let ul = document.querySelector(".ul");
let menu = document.querySelector(".menu");
let logo = document.querySelector(".logo");
let resume = document.querySelector(".resume");
let footer = document.querySelector(".footer");
let isOpen = false;

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
    menu.children[0].attributes[0].textContent = "./assets/icons/burger.svg";
    logo.style.visibility = "visible";
    ul.classList.remove("active");
    body.style.overflow = "scroll";
    isOpen = false;
  }
});

// About click handler
ul.children[0].addEventListener("click", () => {
  isOpen = false;
  ul.classList.remove("active");
  body.style.overflow = "scroll";
  body.scrollIntoView({
    behavior: "smooth",
  });
});

// Projects click handler
ul.children[1].addEventListener("click", () => {
  isOpen = false;
  ul.classList.remove("active");
  body.style.overflow = "scroll";
  resume.scrollIntoView({
    behavior: "smooth",
  });
});

// Contact click handler
ul.children[2].addEventListener("click", () => {
  isOpen = false;
  ul.classList.remove("active");
  body.style.overflow = "scroll";
  footer.scrollIntoView({
    behavior: "smooth",
  });
});
