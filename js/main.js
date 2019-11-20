const button = document.querySelector('.js-form__submit');
const numberCount = 0;
const clue = document.querySelector('.js-clue');
const countingText = document.querySelector('.js-counting-text');

// GENRANDO NÚMERO RANDOM
const generateRandomNumber = function (max) {
    return Math.ceil(Math.random() * max);
};

const randomNumber = generateRandomNumber(100);
console.log(randomNumber);

// COMPARANDO NÚMERO RANDOM A NUMERO IMPUT

const compare = function () {
    const input = document.querySelector('.js-form__input');
    const inputValue = input.value;
    const inputNumberValue = inputValue;
    console.log(inputNumberValue);

    if (inputNumberValue >= 100) {
        clue.innerHTML = "El número debe estar entre 1 y 100."
    } else if (inputNumberValue <= 1) {
        clue.innerHTML = "El número debe estar entre 1 y 100."
    } else if (inputNumberValue > randomNumber) {
        clue.innerHTML = "Demasiado Alto.";
    } else if (inputNumberValue < randomNumber) {
        clue.innerHTML = "Demasiado Bajo.";
    } else {
        clue.innerHTML = "Has ganado campeona!!!";
    };
};



const count = function () {
    let numberCount = (numberCount + 1);
    console.log(numberCount)
}

const actionButton = function (event) {
    event.preventDefault();
    // generateRandomNumber();
    compare();
    // count();
};

button.addEventListener('click', actionButton);