let showQuote = document.getElementById("show-quote"),
  quote = document.getElementById("quote"),
  author = document.getElementById("author"),
  numOfQuote = document.getElementById("numOfQuote");

let englishQuotes = [
  {
    quote:
      "People do not like to think if one thinks, one must reach conclussions conclussions are not always pleasant",
    author: "-- Helen Keller --",
  },
  {
    quote: "Education without execution is extinction",
    author: "-- Bo Sanchez --",
  },
  {
    quote:
      "Concentrate all your thoughts upon the work at hand the sun's rays do not burn untill brought to focus",
    author: "-- Alexander Graham Bell --",
  },
  {
    quote:
      "Tomorrow is my exam but i don't care because a single sheet of paper can't decide my future",
    author: "-- Thomas A. Edison --",
  },
  {
    quote: "Once you stop learning, You start dying",
    author: "-- Albert Einstein --",
  },
  {
    quote:
      "Whenever you read a book or have a conversation, the experience causes physical changes in your brain",
    author: "-- George Johnson --",
  },
  {
    quote:
      "سيب اللي يقول يقول، مش ماشيه بالأصول، العيش والملح داب، كله لأجل الوصول",
    author: "-- عـبـسـلام --",
  },
];

let lastNum = 0;
function getRandomQuote() {
  let randomQuotes;

  do {
    randomQuotes = Math.floor(Math.random() * englishQuotes.length);
    showQuote.style.height = "260px";
    showQuote.style.display = "block";
    numOfQuote.innerHTML = randomQuotes
    quote.innerHTML = `<p class="lead quote pt-4"><i class="fa-solid fa-quote-left"></i> ${englishQuotes[randomQuotes].quote} <i class="fa-solid fa-quote-right"></i></p>`;
    author.innerHTML = `<p class="lead author pb-4 mb-0"> ${englishQuotes[randomQuotes].author} </p>`;
    console.log(randomQuotes);
  } while (randomQuotes === lastNum);
  lastNum = randomQuotes;
}
