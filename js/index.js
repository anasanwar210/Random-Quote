var englishQuotes = [
  {
    quote:
      "People do not like to think. if one thinks, one must reach conclussions. conclussions are not always pleasant",
    author: "--Helen Keller--",
  },
  {
    quote: "Education without execution is extinction",
    author: "--Bo Sanchez--",
  },
  {
    quote:
      "Concentrate all your thoughts upon the work at hand . the sun's rays do not burn untill brought to focus.",
    author: "--Alexander Graham Bell--",
  },
  {
    quote:
      "Whenever you read a book or have a conversation, the experience causes physical changes in your brain.",
    author: "--George Johnson--",
  },
  {
    quote:
      "Tomorrow is my exam but i don't care because a single sheet of paper can't decide my future",
    author: "--Thomas A. Edison--",
  },
  {
    quote: "Once you stop learning, You start dying",
    author: "--Albert Einstein--",
  },
  {
    quote:
      "Whenever you read a book or have a conversation, the experience causes physical changes in your brain.",
    author: "--George Johnson--",
  },
];


let lastNum = 0;
function getRandomQuote() {
  let randomQuotes;

  do {
    randomQuotes = Math.floor(Math.random() * englishQuotes.length);
    document.getElementById(
      "quote"
    ).innerHTML = `<p class="lead"> ${englishQuotes[randomQuotes].quote} </p>`;
    document.getElementById(
      "author"
    ).innerHTML = `<p class="lead"> ${englishQuotes[randomQuotes].author} </p>`;
    console.log(randomQuotes);
  } while (randomQuotes === lastNum);
  lastNum = randomQuotes;
}