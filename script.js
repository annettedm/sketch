
// 2. 16x16 grid of square divs with JavaScript.
//   a. flexbox to make divs appear as a grid
//   b. pay attention to borders and margins as they may adjust squares size
// 3. use console.log and devtools for help

const divContainer = document.querySelector("#divContainer");

function createDivs() {
  for (let i = 0; i < 256; i++) {
    let div = document.createElement("div");
    div.style.width = "60px";
    div.style.height = "60px";
    div.style.border = "1px solid #fa3d64";
    divContainer.appendChild(div);
  }
}

createDivs();