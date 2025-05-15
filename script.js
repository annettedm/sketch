import { callModal } from "./modules/customModal.js";
import { drawColor, decreaseOpacity, parseOpacity } from "./modules/elementStyling.js";

const divContainer = document.querySelector("#div-container");
const btnSelectDivsNumber = document.querySelector("#btn-select-divs-number");


function createDivs(divsPerSide) {
  const divsTotal = divsPerSide * divsPerSide;
  const divSide = 960 / divsPerSide;

  for (let i = 0; i < divsTotal; i++) {
    let div = document.createElement("div");
    div.style.width = `${divSide}px`;
    div.style.height = `${divSide}px`;
    div.classList.add("grid-div");

    let childOpacityDiv = document.createElement("div");
    childOpacityDiv.style.width = `${divSide}px`;
    childOpacityDiv.style.height = `${divSide}px`;
    childOpacityDiv.style.backgroundColor = "rgba(0, 0, 0, 0)";
    childOpacityDiv.classList.add("child-grid-div");
    div.appendChild(childOpacityDiv);

    divContainer.appendChild(div);
  }
}

createDivs(10);

divContainer.addEventListener("mouseover", draw);

function draw(event) {
  let childDiv = event.target;
  let parentDiv = event.target.parentElement;
  if (parentDiv.classList.contains("grid-div") && childDiv.classList.contains("child-grid-div")) {
    parentDiv.style.backgroundColor = drawColor();
    manageChildOpacity(childDiv);
  }
}

function clearGrid() {
  divContainer.innerHTML = "";
}

btnSelectDivsNumber.addEventListener("click", callModal);

function manageChildOpacity(childDiv) {
  let opacity = parseOpacity(childDiv.style.backgroundColor);

  if (opacity <= 0.9) {
    opacity = decreaseOpacity(opacity);
    childDiv.style.backgroundColor = `rgba(0, 0, 0, ${(opacity === 1 || opacity === 0) ? opacity : opacity.toFixed(1)})`;
    console.log(`${(opacity === 1 || opacity === 0) ? opacity : opacity.toFixed(1)}`);
  }
}

export { createDivs, clearGrid };

