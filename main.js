const cardContainer = document.querySelectorAll(".card");
const front = document.querySelectorAll("front");
let firstCard, secondCard;

const display = document.getElementById("timer");
const alertText = document.getElementById("alert-text");

cardContainer.forEach((container) =>
  container.addEventListener("click", (event) => {
    const [front, back] = container.children;
    front.classList.toggle("front-show");
    back.classList.toggle("back-hide");

    if (firstCard === undefined) {
      return (firstCard = container.dataset.number);
    }
    if (secondCard === undefined) {
      secondCard = container.dataset.number;
    }

    if (firstCard === secondCard) {
      alertText.innerHTML = "<p>You found a match!</p>";
      
    } else {
      alertText.innerHTML = "<P> Keep Trying </P>";
     setTimeout(() => {
      back.classList.toggle("back-hide");
      }, 2000);
    }
  })
);

const second = 0,
  minute = 0;
const timer = document.querySelector(".timer");
var interval ;
const startTimer = () => {
  interval = (setInterval= () => {
    timer.innerHTML = minute + "mins " + second + "secs";
    second++;
    if (second == 60) {
      minute++;
      second = 0;
    }
    if (minute == 60) {
      hour++;
      minute = 0;
    }
  }, 1000);
}
const moveCounter = () => {
  moves++;
  counter.innerHTML = moves;
  //start timer on first move
  if (moves == 1) {
    second = 0;
    minute = 0;
    hour = 0;
    startTimer();
  }
}
const  shuffle = (() => {
  cardContainer.forEach((card) => {
    let ramdomPos = Math.floor(Math.random() * 12);
    card.style.order = ramdomPos;
  });
})()
