// Unit Converter

// First we declare our global-scope variables.
const fromUnit = document.querySelector("#from");
const toUnit = document.querySelector("#to");
const button = document.querySelector("#calculateBtn");
const input = document.querySelector("#userInput");

// Our convert function which will run when the user clicks the calculate button.
function convert() {
  // Variables which are only accessable in our function
  const inputValue = parseInt(input.value);
  const toUnitValue = toUnit.value;
  const fromUnitValue = fromUnit.value;
  let result;

  //   conditional to check which unit the user has selected for "to" and "from" dropdowns and what conversion to use based on the selections. We are using a Switch/Case conditional but If/Else would work also.
  switch (fromUnitValue + "-" + toUnitValue) {
    case "meters-kilometers":
      result = inputValue / 1000;
      break;
    case "meters-miles":
      result = inputValue * 0.000621371;
      break;
    case "kilometers-meters":
      result = inputValue * 1000;
      break;
    case "kilometers-miles":
      result = inputValue * 0.621371;
      break;
    case "miles-meters":
      result = inputValue * 1609.34;
      break;
    case "miles-kilometers":
      result = inputValue * 1.60934;
      break;
    default:
      result = inputValue;
  }

  //  sending our result from the 'result' variable to the paragraph in html
  document.querySelector("#result").textContent = result.toFixed(2);
}

// listening for a change on the "to" and "from" selects, then running the "sameUnits" function.
fromUnit.addEventListener("change", sameUnits);
toUnit.addEventListener("change", sameUnits);

// function to compare unit values in "to" and "from", if they are the same the button is disabled, otherwise it's enabled.
function sameUnits() {
  if (fromUnit.value === toUnit.value) {
    button.disabled = true;
  } else {
    button.disabled = false;
  }
}
