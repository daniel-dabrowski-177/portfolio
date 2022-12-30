const arrow = document.querySelector(".arrow");
const more = document.querySelector(".more");
let arrowOpen = false;

arrow.addEventListener("click", () => {
  if (!arrowOpen) {
    more.style.display = "block";
    arrow.style.rotate = "0deg";
    arrowOpen = true;
  } else {
    more.style.display = "none";
    arrow.style.rotate = "90deg";
    arrowOpen = false;
  }
});
