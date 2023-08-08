const faders = document.querySelectorAll(".fade-in");
const li = document.querySelectorAll("li");

window.onload = () => {
  logo.classList.add("appear");
  li.forEach((el) => el.classList.add("appear"));
};

window.addEventListener("scroll", () => {
  const triggerBottm = (window.innerHeight / 5) * 4;

  faders.forEach((el) => {
    const containerTop = el.getBoundingClientRect().top;

    if (containerTop < triggerBottm) {
      el.classList.add("appear");
    } else {
      el.classList.remove("appear");
    }
  });
});
