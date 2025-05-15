import { makeNumeric, setValidationMessage } from "./helpers.js";
import { clearGrid, createDivs } from "../script.js";

const divsNumberInput = document.querySelector("#divs-number-input");
const modalContainer = document.querySelector("#modal-container");
const btnOk = document.querySelector("#btn-modal-ok");
const btnCancel = document.querySelector("#btn-modal-cancel");
const closeModalButton = document.querySelector(".close");
const inputValidation = document.querySelector("#input-validation");


function callModal() {
  divsNumberInput.value = "";

  modalContainer.style.display = "block";
}

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

  if (event.target === btnOk) {
    if (Number(inputValue) >= 1 && Number(inputValue) <= 100) {
      closeModal();
      clearGrid();
      createDivs(inputValue);
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


export { closeModal, callModal };
