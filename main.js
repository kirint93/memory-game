const cardArray = [
  {
    name: "blackdog",
    img: "images/blackdog.jpg",
  },
  {
    name: "blackdog",
    img: "images/blackdog.jpg",
  },
  {
    name: "browndog",
    img: "images/browndog.jpg",
  },
  {
    name: "browndog",
    img: "images/browndog.jpg",
  },
  {
    name: "husky",
    img: "images/husky.jpg",
  },
  {
    name: "husky",
    img: "images/husky.jpg",
  },
  {
    name: "labradoodle",
    img: "images/labradoodle.jpg",
  },
  {
    name: "labradoodle",
    img: "images/labradoodle.jpg",
  },
  {
    name: "pug",
    img: "images/pug.jpg",
  },
  {
    name: "pug",
    img: "images/pug.jpg",
  },
  {
    name: "whitedog",
    img: "images/whitedog.jpg",
  },
  {
    name: "whitedog",
    img: "images/whitedog.jpg",
  },
];
cardArray.sort(() => {
  return 0.5 - Math.random();
});
const grid = document.querySelector(".grid");
const resultDisplay = document.querySelector("#result");
const alertText = document.getElementById("alert-text");
let cardsChosen = [];
let cardsChosenId = [];
const cardsWon = [];
//   CREATE BOARD
createBoard = () => {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/playingcard.jpg");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    grid === void 0 ? void 0 : grid.appendChild(card);
  }
};

//   // CHECK MATCHES
checkForMatch = () => {
  const cards = document.querySelectorAll("img");
  const optionOneId = cardsChosenId[0];
  const optionTwoId = cardsChosenId[1];
  if (cardsChosen[0] === cardsChosen[1]) {
    alertText.innerHTML = "You found a match!";
    setTimeout =
      (function () {
        alertText.innerHTML = " Find all the matching dogs!";
      },
      800);
    cards[optionOneId].setAttribute("src", "images/white.jpg");
    cards[optionTwoId].setAttribute("src", "images/white.jpg");
    cards[optionOneId].style.pointerEvents = "none";
    cards[optionTwoId].style.pointerEvents = "none";
    cardsWon.push(cardsChosen);
  } else {
    cards[optionOneId].setAttribute("src", "images/playingcard.jpg");
    cards[optionTwoId].setAttribute("src", "images/playingcard.jpg");
    alertText.innerHTML = "Sorry, try again!";

    setTimeout(() => {
      alertText.innerHTML = "Find all the dogs!";
    }, 800);
  }
  cardsChosen = [];
  cardsChosenId = [];

  resultDisplay.textContent = cardsWon.length;
  if (cardsWon.length === cardArray.length / 2) {
    alertText.innerHTML = "Congratulations! You found them all!";
  }
};
// //   FLIP CARD

function flipCard() {
  const cardId = this.getAttribute("data-id");
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenId.push(cardId);
  this.setAttribute("src", cardArray[cardId].img);
  if (cardsChosen.length === 2) {
    if (cardsChosenId[0] === cardsChosenId[1]) {
      alertText.innerHTML =
        "You are choosing the same card. Choose another one!";

      setTimeout(() => {
        alertText.innerHTML = "Find all the dogs!";
      }, 1500);
      cardsChosenId;
      cardsChosenId.pop();
      cardsChosen.pop();
    }
    setTimeout(checkForMatch, 800);
  }
}

createBoard();
