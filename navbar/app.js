document.addEventListener("DOMContentLoaded", (event) => {
  const hamBtn = document.querySelector(".hamburger");
  const navItem = document.querySelector(".nav-item");

  hamBtn.addEventListener("click", () => {
    navItem.classList.toggle("show-text");
  });
});
