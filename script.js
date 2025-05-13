const divContainer = document.querySelector("#div-container");
const btn = document.querySelector("#btn-select-divs-number");
const modalContainer = document.querySelector("#modal-container");
const closeModalButton = document.querySelector(".close");

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

createDivs(100);

divContainer.addEventListener("mouseover", draw);

function draw(event) {
  let div = event.target;
  div.classList.add("active");
}

btn.addEventListener("click", callModal);

function callModal(event) {
  modalContainer.style.display = "block";

  //const promptResult = prompt("H");

  if (sign === null) {
    log.innerText = "OK, maybe next time.";
  } else if (sign.toLowerCase() === "") {
    log.innerText = "Don't be shy, enter your sign!";
  }
}

window.addEventListener("click", (event) => {
  if (event.target === modalContainer) {
    modalContainer.style.display = "none";
  }
});


// // developer notes
// 2. a user clicks a button and a popup is triggered with the text "Here you can change number of squares at the canvas per side. Please enter a number from 1 to 100. Clicking 'Cancel' entering nothing will not effect the current grid."
// 3a. a user enters a number from 1 to 100 and clicks "Ok" → current grid is cleared, a new grid is created with number of divs entered --- value to integer
// 3b. a user enters a number less than 1 or greater than 100 and clicks "Ok" → validation at popup field and an error message on "Ok" button?
// 3c. a user enters nothing and clicks "Ok" → validation at popup field and an error message on "Ok" button? ---- empty string 
// 3d. a user enters a non-numeric value and clicks "Ok" → validation at popup field and an error message on "Ok" button?
// 3e. a user enters something and clicks "Cancel" → nothing happens ---- null 
// 3f. a user enters nothing and clicks "Cancel" → nothing happens --- null 
// 4. a user clicks "Ok" at the popup  → event handler on "Ok" button? clear input
// 5. "Ok" event handler function
//     a. clear divContainer contents
//     b. create divs inside divContainer. logics on number of squares and their height and width 
//       → user number X user number = total number of squares
//       → 960 / user number = div width = div height in pixels 

// ? > Button tags in HTML and how make a JavaScript function run when a tag is clicked.