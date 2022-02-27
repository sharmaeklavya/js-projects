document.addEventListener("DOMContentLoaded", (event) => {
  const questions = document.querySelectorAll(".question");

  let status = false;

  questions.forEach((e) => {
    const btn = e.querySelector(".button");
    const answer = e.querySelector(".answer");
    const open = e.querySelector(".open");
    const close = e.querySelector(".close");

    btn.addEventListener("click", () => {
      questions.forEach((f) => {
        if (f !== e) {
          const para = f.querySelector(".answer");
          const minus = f.querySelector(".open");
          const plus = f.querySelector(".close");

          para.style.display = "none";
          plus.style.display = "block";
          minus.style.display = "none";
        }
      });

      if (status === false) {
        open.style.display = "block";
        answer.style.display = "block";
        close.style.display = "none";
        status = true;
      } else {
        open.style.display = "none";
        answer.style.display = "none";
        close.style.display = "block";
        status = false;
      }
    });
  });
});
