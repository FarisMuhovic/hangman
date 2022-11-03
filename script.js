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
const inputField = document.getElementById("input-word");
const inputBtn = document.getElementById("inputWordBtn");
const menu = document.getElementById("menu");
const curtainbg = document.getElementById("bgcurtain");
inputBtn.addEventListener("click", () => {
  word = inputField.value;
  let wordArray = [];
  for (let i = 0; i < word.length; i++) {
    wordArray.push(word[i]);
    guessingDisplay.innerHTML += `<p data-place=${i}></p>`;
  }
  menu.style.display = "none";
  curtainbg.style.display = "none";
});
const keys = document.querySelectorAll("#keyboard div");
const figure = document.querySelector("#figure");
let fails = 0;
let correctGuesses = 0;
keys.forEach(key => {
  key.addEventListener("click", function QuandaleDingle() {
    let dataKey = key.getAttribute("data-key");
    word = inputField.value;
    let wordArray = [];
    for (let i = 0; i < word.length; i++) {
      wordArray.push(word[i]);
    }
    if (!word.includes(dataKey)) {
      key.removeEventListener("click", QuandaleDingle);
      key.style.backgroundColor = "#3360676c";
      key.style.color = "rgba(255, 255, 255, 0.338)";
      fails++;
      let lastchildren = figure.lastElementChild;
      lastchildren.remove();
      if (fails == 6) {
        alert("Game Over, you lost! The word was " + word);
        if (confirm) {
          location.reload();
        } else {
          location.reload();
        }
      }
    }
    wordArray.forEach(letter => {
      if (letter == dataKey) {
        const indexes = [];
        for (let index = 0; index < wordArray.length; index++) {
          if (wordArray[index] === letter) {
            indexes.push(index);
          }
        }
        correctGuesses++;
        console.log(correctGuesses);
        key.removeEventListener("click", QuandaleDingle);
        key.style.backgroundColor = "#1a95a8";
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
    setTimeout(() => {
      if (correctGuesses == word.length) {
        alert("You guessed it!");
        if (confirm) {
          location.reload();
        } else {
          location.reload();
        }
      }
    }, 500);
  });
});
