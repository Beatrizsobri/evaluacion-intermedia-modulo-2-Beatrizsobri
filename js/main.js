"use strict";
const button = document.querySelector(".js-form__submit");
let numberCount = 0;
const clue = document.querySelector(".js-clue");
const countingText = document.querySelector(".js-counting-text");

// GENRANDO NÚMERO RANDOM
const generateRandomNumber = function(max) {
  return Math.ceil(Math.random() * max);
};

const randomNumber = generateRandomNumber(100);

// COMPARANDO NÚMERO RANDOM A NUMERO IMPUT

const compare = function() {
  const input = document.querySelector(".js-form__input");
  const inputValue = input.value;
  const inputNumberValue = parseInt(inputValue);

  if (inputNumberValue > 100 || inputNumberValue < 1) {
    clue.innerHTML = "El número debe estar entre 1 y 100.";
  } else if (inputNumberValue > randomNumber) {
    clue.innerHTML = "Demasiado Alto.";
  } else if (inputNumberValue < randomNumber) {
    clue.innerHTML = "Demasiado Bajo.";
  } else {
    clue.innerHTML = "Has ganado campeona!!!";
  }
};

const count = function() {
  numberCount = numberCount + 1;
  countingText.innerHTML = `Número de intentos: ${numberCount}`;
};

const actionButton = function(event) {
  event.preventDefault();
  compare();
  count();
};

button.addEventListener("click", actionButton);
console.log(randomNumber);
