let numOne = "";
let operator = "";
let numTwo = "";
const $operator = document.querySelector('input[id="operator"]');
const $result = document.querySelector('input[id="result"]');
const onClickNumber = (event) => {
  if (!operator) {
    numOne += event.target.textContent;
    $result.value += event.target.textContent;
    return;
  }

  if (!numTwo) {
    $result.value = "";
  }
  numTwo += event.target.textContent;
  $result.value += event.target.textContent;

  /*
  if (operator) {
    if (!numTwo) {
      $result.value = "";
    }
    numTwo += event.target.textContent;
    $result.value += event.target.textContent;
  } else {
    numOne += event.target.textContent;
    $result.value += event.target.textContent;
  }
  */
};

// 고차함수 high order function
const onClickOperator = (op) => (event) => {
  if (numOne) {
    operator = op;
    $operator.value = op;
  } else {
    alert("숫자입력");
  }
};

const onClickCal = (event) => {
  if (!numTwo) {
    alert("숫자 입력");
    return;
  }

  if (operator) {
    switch (operator) {
      case "+":
        $result.value = parseInt(numOne) + parseInt(numTwo);
        break;
      case "-":
        $result.value = parseInt(numOne) - parseInt(numTwo);
        break;
      case "/":
        $result.value = parseInt(numOne) / parseInt(numTwo);
        break;
      case "*":
        $result.value = parseInt(numOne) * parseInt(numTwo);
        break;
    }

    numOne = $result.value;
    numTwo = "";
    $operator.value = event.target.textContent;
  }
};

document
  .querySelector('button[id="num-0"]')
  .addEventListener("click", onClickNumber);
document
  .querySelector('button[id="num-1"]')
  .addEventListener("click", onClickNumber);
document
  .querySelector('button[id="num-2"]')
  .addEventListener("click", onClickNumber);
document
  .querySelector('button[id="num-3"]')
  .addEventListener("click", onClickNumber);
document
  .querySelector('button[id="num-4"]')
  .addEventListener("click", onClickNumber);
document
  .querySelector('button[id="num-5"]')
  .addEventListener("click", onClickNumber);
document
  .querySelector('button[id="num-6"]')
  .addEventListener("click", onClickNumber);
document
  .querySelector('button[id="num-7"]')
  .addEventListener("click", onClickNumber);
document
  .querySelector('button[id="num-8"]')
  .addEventListener("click", onClickNumber);
document
  .querySelector('button[id="num-9"]')
  .addEventListener("click", onClickNumber);
document
  .querySelector('button[id="plus"]')
  .addEventListener("click", onClickOperator("+"));
document
  .querySelector('button[id="minus"]')
  .addEventListener("click", onClickOperator("-"));
document
  .querySelector('button[id="div"]')
  .addEventListener("click", onClickOperator("/"));
document
  .querySelector('button[id="mul"]')
  .addEventListener("click", onClickOperator("*"));
document.querySelector('button[id="clear"]').addEventListener("click", () => {
  numOne = "";
  operator = "";
  numTwo = "";
  $result.value = "";
  $operator.value = "";
});
document
  .querySelector('button[id="cal"]')
  .addEventListener("click", onClickCal);
