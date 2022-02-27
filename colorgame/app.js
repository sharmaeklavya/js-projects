document.addEventListener("DOMContentLoaded", (event) => {
  // query selectors
  let header = document.querySelector("h1");
  let headRGB = document.querySelector("#headrgb");
  let newButton = document.querySelector("#newgame");
  let easyButton = document.querySelector("#easy");
  let hardButton = document.querySelector("#hard");
  let result = document.querySelector("#result");
  let square = document.querySelectorAll(".square");

  // variables and array
  let numSquare = 6;
  let colors = randomColors(numSquare);
  let selectedColor = randomSelectedColor();
  headRGB.innerText = selectedColor;

  // event listeners
  easyButton.addEventListener("click", function () {
    this.classList.add("selected");
    hardButton.classList.remove("selected");
    numSquare = 3;
    colors = randomColors(numSquare);
    selectedColor = randomSelectedColor();
    for (let i = 0; i < square.length; i++) {
      if (colors[i]) {
        square[i].style.backgroundColor = colors[i];
      } else {
        square[i].style.display = "none";
      }
    }
    headRGB.innerText = selectedColor;
    header.style.backgroundColor = "steelblue";
  });

  hardButton.addEventListener("click", function () {
    this.classList.add("selected");
    easyButton.classList.remove("selected");
    numSquare = 6;
    colors = randomColors(numSquare);
    selectedColor = randomSelectedColor();
    for (let i = 0; i < square.length; i++) {
      square[i].style.backgroundColor = colors[i];
      square[i].style.display = "inline-block";
    }
    headRGB.innerText = selectedColor;
    header.style.backgroundColor = "steelblue";
  });

  newButton.addEventListener("click", function () {
    colors = randomColors(numSquare);
    selectedColor = randomSelectedColor();
    for (let i = 0; i < colors.length; i++) {
      square[i].style.backgroundColor = colors[i];
    }
    header.style.backgroundColor = "steelblue";
    result.innerText = "";
  });

  for (let i = 0; i < colors.length; i++) {
    square[i].style.backgroundColor = colors[i];
    square[i].addEventListener("click", function () {
      if (colors[i] === selectedColor) {
        result.innerText = "That's Correct";
        header.style.backgroundColor = selectedColor;
        sameColors();
      } else {
        result.innerText = "Try Again";
        square[i].style.backgroundColor = "#232323";
      }
    });
  }

  // functions
  function sameColors() {
    for (let i = 0; i < square.length; i++) {
      square[i].style.backgroundColor = selectedColor;
    }
  }

  function randomSelectedColor() {
    let randomNum = Math.floor(Math.random() * colors.length);
    return colors[randomNum];
  }

  function randomRGB() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `RGB(${r}, ${g}, ${b})`;
  }

  function randomColors(num) {
    let arr = [];
    for (let i = 0; i < num; i++) {
      arr.push(randomRGB());
    }
    return arr;
  }
});
