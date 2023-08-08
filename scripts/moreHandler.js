const arrows = document.querySelectorAll(".arrow");
const moreArray = document.querySelectorAll(".more");

// More about project handler
arrows.forEach((a) => {
  let arrowOpen = false;
  a.addEventListener("click", () => {
    for (let i = 0; i < arrows.length; i++) {
      arrows[i].parentElement.children[7].style.opacity = 0;
      arrows[i].parentElement.children[7].style.height = "0px";
    }
    if (!arrowOpen) {
      a.parentElement.children[5].textContent = "less info:";
      a.parentElement.children[7].style.opacity = 1;
      a.parentElement.children[7].style.height = "auto";
      a.parentElement.children[7].style.transform = "translateY(0%)";
      a.classList.add("rotated");
      arrowOpen = true;
    } else {
      a.parentElement.children[5].textContent = "more info:";
      a.parentElement.children[7].style.opacity = 0;
      a.parentElement.children[7].style.height = "0px";
      a.classList.remove("rotated");
      arrowOpen = false;
    }
  });
});
