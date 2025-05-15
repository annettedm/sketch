import { randomize } from "./helpers.js";

function drawColor() {
  return `rgb(${randomize(255)}, ${randomize(255)}, ${randomize(255)})`;
}

function decreaseOpacity(currentOpacity) {
  return currentOpacity + 0.1;
}

function parseOpacity(toBeParsed) {
  let result = toBeParsed.split(",")[3];
  if (result != null) {
    result = result.replace(")", "")
    .trim();
    
  return Number(result);
  }
}


export { drawColor, decreaseOpacity, parseOpacity }; 