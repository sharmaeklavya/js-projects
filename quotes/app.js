// create quotes database
const quotesLib = [
  {
    id: 1,
    quote: "In a conflict between the heart and the brain, follow your heart.",
    author: "Swami Vivekananda",
  },
  {
    id: 2,
    quote:
      "No one is wise by birth, for wisdom results from one own’s efforts.",
    author: "T. Krishnamacharya",
  },
  {
    id: 3,
    quote:
      "Devotion is that which generates knowledge; knowledge is that which fashions freedom.",
    author: "Tulsidas",
  },
  {
    id: 4,
    quote:
      "Comfort is no test of truth. Truth is often far from being comfortable.",
    author: "Swami Vivekananda",
  },
  {
    id: 5,
    quote:
      "I measure the progress of a community by the degree of progress which women have achieved.",
    author: "Dr. B. R. Ambedkar",
  },
  {
    id: 6,
    quote:
      "Teaching is a very noble profession that shapes the character, caliber, and future of an individual. If the people remember me as a good teacher, that will be the biggest honour for me",
    author: "Dr. A. P. J. Abdul Kalam",
  },
  {
    id: 7,
    quote:
      "A man is born alone and dies alone; and he experiences the good and bad consequesnces of his karma alone; and he goes alone to hell or the Supreme abode.",
    author: "Chanakya",
  },
  {
    id: 8,
    quote:
      "Discipline and united action are the real source of strength for the nation.",
    author: "Lal Bahadur Shastri",
  },
  {
    id: 9,
    quote:
      "No one succeeds without effort... Those who succeed owe their success to perseverance.",
    author: "Ramana Maharshi",
  },
  {
    id: 10,
    quote:
      "Don’t see others doing better than you, beat your own records every day because success is a fight between you and yourself",
    author: "Chandrasekhar Azad",
  },
];

// select classes
const button = document.querySelector(".button");
const blockquotes = document.querySelector(".texts");

//event listenerr
button.addEventListener("click", () => {
  const speech = quotesLib[getRandomNum()];
  blockquotes.innerHTML = `<i class="fas fa-quote-left icon"></i>
       ${speech.quote}  <p>- ${speech.author}</p>`;
});

// function - generate random number
function getRandomNum() {
  return Math.floor(Math.random() * quotesLib.length);
}
