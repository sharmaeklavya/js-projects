document.addEventListener("DOMContentLoaded", () => {
  let pageBody = document.getElementById("body");
  let hexButton = document.querySelector(".hexButton");
  let hexText = document.querySelector(".hexText");
  let rgbText = document.querySelector(".rgbText");
  let rgbButton = document.querySelector(".rgbButton");

  const hexColors = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

  function genRandomNumber(random) {
    let colors = Math.floor(Math.random() * random.length);
    return colors;
  }

  function createHexColors() {
    let getColors = "#";
    for (let i = 0; i < 6; i++) {
      getColors += hexColors[genRandomNumber(hexColors)];
    }
    return getColors;
  }

  hexButton.addEventListener("click", () => {
    let hexColors = createHexColors();
    pageBody.style.backgroundColor = hexColors;
    hexText.innerHTML = hexColors;
  });
});
