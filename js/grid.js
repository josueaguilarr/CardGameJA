let existBoard = false;
let message = document.getElementById("message");
let containerCards = document.getElementById("containerCards");
let initialRandomNumberToFind = Math.floor(Math.random() * 10);
document.getElementById("number").textContent = initialRandomNumberToFind;

const createPositions = () => {
  let numbersOccupied = [];
  for (let i = 0; i < 9; i++) {
    generateRandomNumber(numbersOccupied);
  }

  existBoard === false
    ? (createBoard(numbersOccupied), (existBoard = true))
    : "";
};

const generateRandomNumber = (arr) => {
  let randomNumber = Math.floor(Math.random() * 10);
  validateNumber(randomNumber, arr);
};

const validateNumber = (number, arr) =>
  arr.includes(number) ? generateRandomNumber(arr) : arr.push(number);

const createBoard = (arrNumbers) => {
  for (let i = 0; i < arrNumbers.length; i++) {
    let currentImage = document.createElement("img");
    currentImage.setAttribute("src", "img/signo.png");
    currentImage.id = arrNumbers[i];
    currentImage.classList.add("_card-item");
    containerCards.appendChild(currentImage);
  }

  changeImageSelected();
};

const changeImageSelected = () => {
  let lifes = 3;

  document.querySelectorAll("._card-item").forEach((el) => {
    el.addEventListener("click", (e) => {
      if (lifes > 0) {
        const id = e.target.getAttribute("id");
        const cardSelected = document.getElementById(id);
        cardSelected.classList.add('_transform-card');
        cardSelected.setAttribute("src", "img/" + id + ".png");
        lifes--;
        id == initialRandomNumberToFind
          ? ((message.textContent = "Encontraste el número :)"),
            (lifes = 0),
            animationToWin())
          : (message.textContent = "Te quedan " + lifes + " vidas :(");
      }
    });
  });
};

const animationToWin = () => {
  let canvasConfetti = document.getElementById("canvas-confetti");

  let myConfetti = confetti.create(canvasConfetti, {
    resize: false,
    useWorker: true,
  });
  myConfetti({
    particleCount: 300,
    spread: 150,
    startVelocity: 20,
  });
};

const deletePositions = () => {
  while (containerCards.firstElementChild) {
    containerCards.removeChild(containerCards.firstElementChild);
  }
  message.textContent = "";
  let generateRandomNumberToFind = Math.floor(Math.random() * 10);
  initialRandomNumberToFind = generateRandomNumberToFind;
  document.getElementById("number").textContent = initialRandomNumberToFind;
  existBoard = false;
};