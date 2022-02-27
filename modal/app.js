document.addEventListener("DOMContentLoaded", (event) => {
  const button = document.querySelector(".button");
  const showText = document.querySelector(".click-card");
  const closeBtn = document.querySelector(".times");

  button.addEventListener("click", () => {
    showText.style.display = "block";
    showText.classList.toggle("show-card");
  });

  closeBtn.addEventListener("click", () => {
    showText.style.display = "none";
    showText.classList.remove("show-card");
  });
});
