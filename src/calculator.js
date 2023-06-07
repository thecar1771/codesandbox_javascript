let numOne = "";
let operator = "";
let numTwo = "";
const $operator = document.querySelector('input[id="operator"]');
const $result = document.querySelector('input[id="result"]');
const operatorCal = (a) => {
  if (operator) {
    numTwo = a;
  } else {
    numOwn = a;
  }
};

document.querySelector('button[id="num-0"]').addEventListener("click", () => {
  operatorCal(0);
});
document.querySelector('button[id="num-1"]').addEventListener("click", () => {
  operatorCal(1);
});
document.querySelector('button[id="num-2"]').addEventListener("click", () => {
  operatorCal(2);
});
document.querySelector('button[id="num-3"]').addEventListener("click", () => {
  operatorCal(3);
});
document.querySelector('button[id="num-4"]').addEventListener("click", () => {
  operatorCal(4);
});
document.querySelector('button[id="num-5"]').addEventListener("click", () => {
  operatorCal(5);
});
document.querySelector('button[id="num-6"]').addEventListener("click", () => {
  operatorCal(6);
});
document.querySelector('button[id="num-7"]').addEventListener("click", () => {
  operatorCal(7);
});
document.querySelector('button[id="num-8"]').addEventListener("click", () => {
  operatorCal(8);
});
document.querySelector('button[id="num-9"]').addEventListener("click", () => {
  operatorCal(9);
});
document.querySelector('button[id="plus"]').addEventListener("click", () => {});
document
  .querySelector('button[id="minus"]')
  .addEventListener("click", () => {});
document.querySelector('button[id="div"]').addEventListener("click", () => {});
document.querySelector('button[id="mul"]').addEventListener("click", () => {});
document
  .querySelector('button[id="clear"]')
  .addEventListener("click", () => {});
document.querySelector('button[id="cal"]').addEventListener("click", () => {});
