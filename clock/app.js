// class selectors
const clock = document.querySelectorAll(".clock-container p");

// time function

function getTime() {
  // get current time
  const time = new Date();

  // get hours
  const hours = time.getHours();
  // get minutes
  const mins = time.getMinutes();
  // get seconds
  const secs = time.getSeconds();

  // create array for value
  const value = [hours, mins, secs];
  // function for placing zero before the number
  const format = (item) => (item < 10 ? (item = `0${item}`) : item);
  // function for placing the hours, mins and seconds
  clock.forEach((time, index) => (time.innerHTML = format(value[index])));
}
// function for running timer
const timer = setInterval(getTime, 1000);
// invoking the get time function
getTime();
