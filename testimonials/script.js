let first = document.querySelector("#first");
let second = document.querySelector("#second");
let visible = document.querySelector("#tanya");
let hidden = document.querySelector("#john");

let active = true;

first.addEventListener("click", slider);
second.addEventListener("click", slider);

function slider() {
   if (screen.width < 375) {
    if (active) {
      visible.style.display = "none";
      hidden.style.display = "flex";
      active = false;
    } else {
      visible.style.display = "flex";
      hidden.style.display = "none";
      active = true;
    }
  } else {
    if (active) {
      visible.style.display = "none";
      hidden.style.display = "grid";
      active = false;
    } else {
      visible.style.display = "grid";
      hidden.style.display = "none";
      active = true;
    }
  }
}
