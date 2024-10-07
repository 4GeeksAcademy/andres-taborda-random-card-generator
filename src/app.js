/* eslint-disable */
import "bootstrap";
import "./style.css";

import { suit, values } from "./cards";

const showCard = (randomSuit, randomValue) => {
  const card = document.querySelector("#card");

  if (randomSuit == "♥" || randomSuit == "♦") {
  }
  card.innerHTML = `
        <div class='${
          randomSuit == "♥" || randomSuit == "♦" ? "suitRed" : ""
        } suit'>${randomSuit}</div>
        <div class="value-card">${randomValue}</div>
        <div class='${
          randomSuit == "♥" || randomSuit == "♦" ? "suitRed" : ""
        } suit'>${randomSuit}</div>`;
};

const generateRandomCard = () => {
  const randomSuit = suit[Math.floor(Math.random() * 4)];
  const randomValue = values[Math.floor(Math.random() * 13)];
  showCard(randomSuit, randomValue);
};

const generateCardByTime = () => {
  setInterval(() => generateRandomCard(), 10000);
};

const generateCardByClick = () => {
  document
    .querySelector("#btn-newCard")
    .addEventListener("click", () => generateRandomCard());
};

window.onload = function() {
  //write your code here
  generateRandomCard();
  generateCardByClick();
  generateCardByTime();
};
