function setValidationMessage(choice) {
  if (choice === "") {
    return "Please enter a value.";
  }
  if (choice < 1 || choice > 100) {
    return "Value should be between 1 and 100."
  }
  if (isNaN(choice)) {
    return "Please enter a number.";
  }
}

function makeNumeric(value) {
  if (value.toLowerCase() === "" || isNaN(value)) {
    return value;
  } else {
    return Number(value);
  }
}

function randomize(number) {
  return Math.floor(Math.random() * number);
}

export { setValidationMessage, makeNumeric, randomize };