'use strict';

const resetButton = document.querySelector(".again");
const numberInput = document.querySelector(".number-input");
const checkButton = document.querySelector(".check");
let guessMessage = document.querySelector(".guess-message");
let question = document.querySelector(".question");
let scorePoints = document.querySelector(".score");
let highScorePoints = document.querySelector(".highscore");

let score = 20;
let highScore = 0;
let secretNumber = Math.floor(Math.random() * 20 + 1);

const playGame = function () {
    const guessingNumber = Number(numberInput.value);

    if (!guessingNumber) {
        guessMessage.textContent = "Введите число!";
    } else if (score > 1 && guessingNumber === secretNumber) {
        guessMessage.textContent = "Правильно!";
        question.textContent = secretNumber;
        if (highScore < score) {
            highScore = score
        }
        highScorePoints.textContent = highScore;
        highScore = score;
        document.body.style.backgroundColor = "rgb(9, 250, 21)";
    } else if (score > 1 && guessingNumber > secretNumber) {
        guessMessage.textContent = "Слишком много!";
        score--;
        scorePoints.textContent = score;
    } else if (score > 1 && guessingNumber < secretNumber) {
        guessMessage.textContent = "Слишком мало!";
        score--;
        scorePoints.textContent = score;
    } else {
        guessMessage.textContent = "Игра окончена!";
        score = 0;
        scorePoints.textContent = score;
    }
};

const resetGame = function () {
    question.textContent = "???";
    guessMessage.textContent = "Начни угадывать";
    score = 20;
    scorePoints.textContent = score;
    document.body.style.backgroundColor = "rgb(0, 0, 0)";
    numberInput.value = "";
    secretNumber = Math.floor(Math.random() * 20 + 1);
    console.log(secretNumber);
};

checkButton.addEventListener("click", playGame);
resetButton.addEventListener("click", resetGame);
