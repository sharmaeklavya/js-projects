// quiz question library
const quizLib = [
  {
    id: 1,
    question: "Who is the Prime Minister of India?",
    choices: {
      a: "Narendra Modi",
      b: "Amit Shah",
      c: "J P Nadda",
      d: "Shahnawaz Hussain",
    },

    answer: "Narendra Modi",
  },

  {
    id: 2,
    question: "Who is the Defence Minister of India?",
    choices: {
      a: "Nirmala Sitharaman",
      b: "Mukhtar Abbas Naqvi",
      c: "Rajnath Singh",
      d: "S Jaishankar",
    },
    answer: "Rajnath Singh",
  },
  {
    id: 3,
    question: "Who is the Home Minister of India?",
    choices: {
      a: "Amit Shah",
      b: "Narendra Singh Tomar",
      c: "Thaawar Chand Gehlot",
      d: "Ramesh Pokhriyal",
    },
    answer: "Amit Shah",
  },

  {
    id: 4,
    question: "Who is the Finance Minister of India?",
    choices: {
      a: "S. Jaishankar",
      b: "Nirmala Sitharaman",
      c: "Nitin Jairam Gadkari",
      d: "Chirag Paswan",
    },
    answer: "Nirmala Sitharaman",
  },

  {
    id: 5,
    question: "Who is the Minister of External Affairs of India?",
    choices: {
      a: "Yogi Adityanath",
      b: "Viplab Deb",
      c: "Shivraj Singh Chauhan",
      d: "S. Jaishankar",
    },
    answer: "S. Jaishankar",
  },
  {
    id: 6,
    question: "Who is the Minister of Education of India?",
    choices: {
      a: "Smriti Irani",
      b: "Prakash Javadekar",
      c: "Ramesh Pokhriyal",
      d: "Dharmendra Pradhan",
    },
    answer: "Dharmendra Pradhan",
  },

  {
    id: 7,
    question: "Who is the Minister of Law and Justice?",
    choices: {
      a: "Arjun Munda",
      b: "Kiren Rijiju",
      c: "Ramvilas Paswan",
      d: "Nitin Jairam Gadkari",
    },
    answer: "Kiren Rijiju",
  },
  {
    id: 8,
    question: "Who is the Minister of Railways?",
    choices: {
      a: "Giriraj Singh",
      b: "Ashwini Vaishnaw",
      c: "Dharmendra Pradhan",
      d: "Pralhad Joshi",
    },
    answer: "Ashwini Vaishnaw",
  },
  {
    id: 9,
    question: "Who is the Minister of Women and Child Development?",
    choices: {
      a: "Smriti Irani",
      b: "Mahendra Nath Pandey",
      c: "Gajendra Singh Shekhawat",
      d: "Maneka Gandhi",
    },
    answer: "Smriti Irani",
  },
  {
    id: 10,
    question: "Who is the Minister of Health and Family Welfare?",
    choices: {
      a: "Giriraj Singh",
      b: "Piyush Goel",
      c: "Dr. Mansukh Mandaviya",
      d: "Harsh Vardhan",
    },
    answer: "Mansukh Mandaviya",
  },
];

// onload
window.onload = function () {
  displayQuestions();
};

// class selectors
const quizContainer = document.querySelector(".quiz-container");
const submitBtn = document.querySelector(".submit-btn");

// event listeners
submitBtn.addEventListener("click", displayQuestions);

// create variables
let counter = 0;
let correct = 0;
let maxLength = quizLib.length;

// function displayQuestions
function displayQuestions() {
  // invoking value collector function
  inputCollector(quizLib[counter - 1]);
  // variable to store element number
  let next = quizLib[counter];
  // if else statement
  if (counter < maxLength) {
    quizContainer.innerHTML = `<h1>${next.question}</h1>
    <div class="questions">
      <div class="options">
        <input type="radio" name="option" value="${next.choices.a}" class="option" id="option-one" />
        <label for="option-one">${next.choices.a}</label>
      </div>
      <div class="options">
        <input type="radio" name="option" value="${next.choices.b}" class="option" id="option-two" />
        <label for="option-two">${next.choices.b}</label>
      </div>
      <div class="options">
        <input type="radio" name="option" value="${next.choices.c}" class="option" id="option-three" />
        <label for="option-three">${next.choices.c}</label>
      </div>
      <div class="options">
        <input type="radio" name="option" value="${next.choices.d}" class="option" id="option-four" />
        <label for="option-four">${next.choices.d}</label>
      </div>
    </div>`;
  } else {
    quizContainer.innerHTML = `<h1 class="header">You have answered ${correct} correct out of ${maxLength}.</h1>`;
    submitBtn.textContent = "Quiz Ended";
  }
  counter++;
}

// function input collector
function inputCollector(q) {
  // class selector
  const choices = document.querySelectorAll(".options input");
  choices.forEach((c) => {
    if (c.checked) {
      const value = c.value;
      if (value === q.answer) {
        correct++;
      }
    }
  });
}
