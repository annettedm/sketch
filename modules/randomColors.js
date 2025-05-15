import { randomize } from "./helpers.js";

function drawRandom() {
  return `rgb(${randomize(255)}, ${randomize(255)}, ${randomize(255)})`;
}

export { drawRandom }; 