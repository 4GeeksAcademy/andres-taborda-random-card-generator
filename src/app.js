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

const customizeCard = (cardWidth, cardHeight) => {
  if (!isNaN(cardWidth) && !isNaN(cardHeight)) {
    const card = document.querySelector("#card");
    cardWidth ? (card.style.width = `${cardWidth}px`) : `${card.offsetWidth}px`;
    cardHeight
      ? (card.style.height = `${cardHeight}px`)
      : `${card.offsetHeight}px`;
  }
};

const handleSubmit = () => {
  document.querySelector("form").addEventListener("submit", e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const cardWidth = Number(formData.get("width"));
    const cardHeight = Number(formData.get("height"));

    customizeCard(cardWidth, cardHeight);
  });
};

window.onload = function() {
  //write your code here
  generateRandomCard();
  generateCardByClick();
  //generateCardByTime();
  handleSubmit();
};
