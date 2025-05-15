import { makeNumeric, setValidationMessage } from "./helpers.js";

const divsNumberInput = document.querySelector("#divs-number-input");
const modalContainer = document.querySelector("#modal-container");
const btnOk = document.querySelector("#btn-modal-ok");
const btnCancel = document.querySelector("#btn-modal-cancel");
const closeModalButton = document.querySelector(".close");
const inputValidation = document.querySelector("#input-validation");


// hide modal when clicked out of modal 
window.addEventListener("click", (event) => {
  if (event.target === modalContainer) {
    closeModal();
  }
});

modalContainer.addEventListener("click", handleModal);


function handleModal(event) {
  hideInputValidation();
  let inputValue = makeNumeric(divsNumberInput.value);
  console.log(inputValue);
  if (event.target === btnOk) {
    if (Number(inputValue) >= 1 && Number(inputValue) <= 100) {
      console.log(inputValue)
    } else {
      handleErrorMessage(inputValue);
    }
  } else if (event.target === btnCancel || event.target === closeModalButton) { 
    closeModal();
  } 
}

function closeModal() {
  divsNumberInput.value = "";
  modalContainer.style.display = "none";
}

function handleErrorMessage(inputValue) {
  showInputValidation();
  inputValidation.textContent = setValidationMessage(inputValue);
}

function showInputValidation() {
  inputValidation.style.visibility = "visible";
}

function hideInputValidation() {
  inputValidation.style.visibility = "hidden";
}


export { closeModal };

// developer notes
// 3a. a user enters a number from 1 to 100 and clicks "Ok" → current grid is cleared, a new grid is created with number of divs entered --- value to integer
// 3b. a user enters a number less than 1 or greater than 100 and clicks "Ok" → validation at popup field and an error message on "Ok" button?
// 3c. a user enters nothing and clicks "Ok" → validation at popup field and an error message on "Ok" button? ---- empty string 
// 3d. a user enters a non-numeric value and clicks "Ok" → validation at popup field and an error message on "Ok" button?

// 4. a user clicks "Ok" at the popup  → event handler on "Ok" button? clear input
// 5. "Ok" event handler function
//     a. clear divContainer contents
//     b. create divs inside divContainer. logics on number of squares and their height and width 
//       → user number X user number = total number of squares
//       → 960 / user number = div width = div height in pixels 

// ? > Button tags in HTML and how make a JavaScript function run when a tag is clicked.