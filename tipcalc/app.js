const form = document.querySelector(".form-container");
const alert = document.querySelector(".alert");
const tipTitle = document.querySelector(".amount");
const tip = document.querySelector(".amount h2");
const bill = document.getElementById("bill");
const service = document.getElementById("service");
const people = document.getElementById("people");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const billValue = bill.value;
  const serviceValue = service.value;
  const peopleValue = people.value;
  const tipAmount = (billValue * serviceValue) / 100;
  const divideAmount = (tipAmount / peopleValue).toFixed(2);
  

  if (!billValue || serviceValue === "service") {
    timeOut();
  } else if (billValue && serviceValue && peopleValue) {
    tipTitle.classList.add("show-text");
    tip.innerHTML = `₹ ${divideAmount} each`;
  } else if (billValue && serviceValue) {
    tipTitle.classList.add("show-text");
    tip.textContent = `₹ ${tipAmount} INR`;
  }
});

function timeOut() {
  alert.textContent = "Empty Value";
  alert.classList.add("show-text");
  setTimeout(() => {
    alert.textContent = "";
    alert.classList.remove("show-text");
  }, 1000);
}
