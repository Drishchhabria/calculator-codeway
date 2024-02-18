const display = document.querySelector("#display");
const resultDisplay = document.querySelector("#result-display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "clear") {
      display.innerText = "";
      resultDisplay.innerText = "";
    } else if (item.id == "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (item.id == "equal") {
      try {
        resultDisplay.innerText = eval(display.innerText);
      } catch (error) {
        resultDisplay.innerText = "Error";
      }
    } else if (display.innerText == "Empty!" && item.id == "equal") {
      display.innerText = "";
      resultDisplay.innerText = "";
    } else {
      display.innerText += item.id;
    }
  };
});

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
let isDark = true;
themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
};


