document.addEventListener("DOMContentLoaded", (event) => {
  const body = document.querySelector("body");
  const header = document.getElementById("header");
  const toggle = document.querySelector(".switch");
  let box = document.querySelectorAll(".box");
  let square = document.querySelectorAll(".square");
  let headingOne = document.querySelectorAll("h1");
  let headingTwo = document.querySelectorAll("h2");
  let headingThree = document.querySelectorAll("h3");
  let headingFour = document.querySelectorAll("h4");
  let userName = document.querySelectorAll(".username");
  let checkbox = document.getElementById("checkbox");
  let slider = document.querySelector(".slider");

  toggle.addEventListener("change", () => {
    if (checkbox.checked) {
      darkMode();
    } else {
      lightMode();
    }
  });

  function darkMode() {
    body.style.backgroundColor = "hsl(230, 17%, 14%)";
    header.style.backgroundColor = "hsl(232, 19%, 15%)";
    slider.style.backgroundImage =
      "linear-gradient(hsl(210, 78%, 56%), hsl(146, 68%, 55%))";
    headingOne.forEach((e) => (e.style.color = "hsl(0, 0%, 100%)"));
    headingTwo.forEach((e) => (e.style.color = "hsl(0, 0%, 100%)"));
    headingThree.forEach((e) => (e.style.color = "hsl(228, 34%, 66%)"));
    headingFour.forEach((e) => (e.style.color = "hsl(228, 34%, 66%)"));
    userName.forEach((e) => (e.style.color = "hsl(228, 34%, 66%)"));
    box.forEach((e) => (e.style.backgroundColor = "hsl(228, 28%, 20%)"));
    square.forEach((e) => (e.style.backgroundColor = "hsl(228, 28%, 20%)"));
  }

  function lightMode() {
    body.style.backgroundColor = "hsl(0, 0%, 100%)";
    header.style.backgroundColor = "hsl(225, 100%, 98%)";
    slider.style.backgroundColor = "hsl(230, 22%, 74%)";
    headingOne.forEach((e) => (e.style.color = "hsl(230, 17%, 14%)"));
    headingTwo.forEach((e) => (e.style.color = "hsl(230, 17%, 14%)"));
    headingThree.forEach((e) => (e.style.color = "hsl(228, 12%, 44%)"));
    headingFour.forEach((e) => (e.style.color = "hsl(228, 12%, 44%)"));
    box.forEach((e) => (e.style.backgroundColor = "hsl(227, 47%, 96%)"));
    square.forEach((e) => (e.style.backgroundColor = "hsl(227, 47%, 96%)"));
  }
});
