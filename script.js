import { closeModal, callModal } from "./modules/customModal.js";
import { drawRandom } from "./modules/randomColors.js";

const divContainer = document.querySelector("#div-container");
const btnSelectDivsNumber = document.querySelector("#btn-select-divs-number");
const divsNumberInput = document.querySelector("#divs-number-input");
const modalContainer = document.querySelector("#modal-container");



function createDivs(divsPerSide) {
  const divsTotal = divsPerSide * divsPerSide;
  const divSide = 960 / divsPerSide;

  for (let i = 0; i < divsTotal; i++) {
    let div = document.createElement("div");
    div.style.width = `${divSide}px`;
    div.style.height = `${divSide}px`;
    div.style.border = "1px solid #fa3d64";
    divContainer.appendChild(div);
  }
}

createDivs(10);

divContainer.addEventListener("mouseover", draw);

function draw(event) {
  let div = event.target;
  div.style.backgroundColor = drawRandom();
}

function clearGrid() {
  divContainer.innerHTML = "";
}

btnSelectDivsNumber.addEventListener("click", callModal);

export { createDivs, clearGrid };

