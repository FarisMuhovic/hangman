// enter a word or let the computer generate a random word //
// guess it :D !
const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const keyboardDiv = document.getElementById("keyboard");
alphabet.forEach(letter => {
  keyboardDiv.innerHTML += `<div data-key=${letter.toLowerCase()}>${letter}</div>`;
});

const guessingDisplay = document.getElementById("guessWord");
word = "hippopotammus";
let wordArray = [];
for (let i = 0; i < word.length; i++) {
  wordArray.push(word[i]);
  guessingDisplay.innerHTML += `<p data-place=${i}></p>`;
}

const keys = document.querySelectorAll("#keyboard div");
keys.forEach(key => {
  key.addEventListener("click", () => {
    console.log(key.getAttribute("data-key"));
    let dataKey = key.getAttribute("data-key");
    wordArray.forEach(letter => {
      if (letter == dataKey) {
        const indexes = [];
        for (let index = 0; index < wordArray.length; index++) {
          if (wordArray[index] === letter) {
            indexes.push(index);
          }
        }
        let guessingDisplayPara = document.querySelectorAll("#guessWord p");
        guessingDisplayPara.forEach(guess => {
          indexes.forEach(index => {
            if (guess.getAttribute("data-place") == index) {
              document.querySelector(
                `[data-place=${CSS.escape(index)}]`
              ).innerHTML = letter;
            }
          });
        });
      }
    });
  });
});
