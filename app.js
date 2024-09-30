/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/

//storing reference of buttons to a variable
const buttons = document.querySelectorAll(".button");
let display = document.querySelector(".display");
let currentInput = "";
let firstOperand = null;
let operator = "";

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    // storing of button value
    const value = event.target.innerText;
    console.log(value);

    // conditional statement based on type of value

    // if it is number value:
    if (value >= "0" && value <= "9") {
      currentInput += value;
      updateDisplay(currentInput);
    }
    // if is operator value:
    else if (value === "+" || value === "-" || value === "/" || value === "*") {
      if (currentInput) {
        firstOperand = parseFloat(currentInput);
        operator = value;
        currentInput = "";
      }
    }
    // if is '='
    else if (value === "=") {
      if (firstOperand !== null && operator) {
        currentInput = calculate(
          firstOperand,
          parseFloat(currentInput),
          operator
        );
        firstOperand = null;
        operator = "";
        display.textContent = currentInput;
      }
    }

    // if is 'C'
    else if (value === "C") {
      clearCalculator();
    }
  });
});

function updateDisplay(value) {
  display.textContent = value;
}

function clearCalculator() {
  currentInput = "";
  firstOperand = null;
  operator = "";
  display.textContent = "";
}

function calculate(a, b, op) {
  switch (op) {
    case "+":
      return (a + b).toString();
    case "-":
      return (a - b).toString();
    case "*":
      return (a * b).toString();
    case "/":
      return b !== 0 ? (a / b).toString() : "Error"; 
    default:
      return "";
  }
}

// get value displayed on display
