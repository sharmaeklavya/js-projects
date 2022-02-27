document.addEventListener("DOMContentLoaded", (event) => {
  let shareBtn = document.querySelector(".sharebtn");
  let sharePalette = document.querySelector(".palette");

  shareBtn.addEventListener("click", function () {
    if (sharePalette.classList.contains("hidden")) {
      sharePalette.classList.remove("hidden");
      shareBtn.style.backgroundColor = "hsl(214, 17%, 51%)";
      shareBtn.style.color = "white";
    } else {
      sharePalette.classList.add("hidden");
      shareBtn.style.backgroundColor = "hsl(210, 46%, 95%)";
      shareBtn.style.color = "hsl(214, 17%, 51%)";
    }
  });
});
