document.addEventListener("DOMContentLoaded", (event) => {
  const email = document.getElementById("arrow");
  const input = document.getElementById("email");
  const error = document.getElementById("error");
  let message = document.getElementById("message");

  email.addEventListener("click", () => {
    let validate = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      input.value
    );
    if (input.value === "") {
      message.innerHTML = "You can not leave this empty.";
      error.style.display = "block";
    } else if (!validate) {
      message.innerHTML = "Please provide a valid email.";
      error.style.display = "block";
    } else {
      message.innerHTML =
        "Thank you for subscribing. We'll get back to you ASAP.";
      error.style.display = "none";
    }
  });
});
