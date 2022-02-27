document.addEventListener("DOMContentLoaded", (event) => {
  let checked = document.getElementById("checked");
  let monthly = document.querySelectorAll(".monthly");
  let annually = document.querySelectorAll(".annually");

  let monthly_status = false;

  checked.addEventListener("click", () => {
    if (monthly_status) {
      monthly.forEach((e) => (e.style.display = "none"));
      annually.forEach((e) => (e.style.display = "block"));
      monthly_status = false;
    } else {
      monthly.forEach((e) => (e.style.display = "block"));
      annually.forEach((e) => (e.style.display = "none"));
      monthly_status = true;
    }
  });
});
