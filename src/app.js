/* eslint-disable */
import "bootstrap";
import "./style.css";

import { suit, values } from "./cards";

const showCard = (randomSuit, randomValue) => {
  const card = document.querySelector("#card");
  card.innerHTML = `
        <div>${randomSuit}</div>
        <div>${randomValue}</div>
        <div>${randomSuit}</div>`;
};

const generateRandomCard = () => {
  const randomSuit = suit[Math.floor(Math.random() * 4)];
  const randomValue = values[Math.floor(Math.random() * 13)];
  showCard(randomSuit, randomValue);
};

window.onload = function() {
  //write your code here
  generateRandomCard();

  document
    .querySelector("#btn-newCard")
    .addEventListener("click", () => generateRandomCard());
};
