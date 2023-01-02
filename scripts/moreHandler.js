const arrows = document.querySelectorAll(".arrow");
const moreArray = document.querySelectorAll(".more");

// More about project handler
arrows.forEach((a) => {
  let arrowOpen = false;
  a.addEventListener("click", () => {
    for (let i = 0; i < arrows.length; i++) {
      arrows[i].parentElement.children[7].style.display = "none";
    }
    if (!arrowOpen) {
      a.parentElement.children[5].textContent = "less info:";
      a.parentElement.children[7].style.display = "block";
      a.style.rotate = "0deg";
      arrowOpen = true;
    } else {
      a.parentElement.children[5].textContent = "more info:";
      a.parentElement.children[7].style.display = "none";
      a.style.rotate = "90deg";
      arrowOpen = false;
    }
  });
});
