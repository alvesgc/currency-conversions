import { convertAll } from './convertCurrency.js';

export function getValues() {
  const button = document.getElementById("currencyButton");
  const input = document.getElementById("currencyInputValue");

  button.addEventListener("click", () => {
    const value = input.value.trim();
    convertAll(value);
  });
}
