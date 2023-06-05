const number = parseInt(prompt("참가자"), 10);
const $input = document.querySelector("input"); // 입력 field
const $order = document.querySelector('span[id="order"]'); // 참가자 field
const $word = document.querySelector('span[id="word"]'); // 제시어 field
const $listP = document.querySelector("p"); // 제시어 field

let word; // 제시어
let newWord; // 신규 입력
const wordArr = new Array(); // 입력 값 저장

$input.addEventListener("input", (textData) => {
  newWord = textData.target.value; // 신규 입력 저장
});

const onButtonClick = () => {
  if (!newWord) {
    alert("입력 후 진행");
    return;
  } else {
    if (!word) {
      word = newWord;
      $word.textContent = word; // 제시어 추가
    } else if (wordArr.slice(-1).toString().slice(-1) !== newWord.slice(0, 1)) {
      alert("틀림");
      return;
    }

    wordArr.push(newWord); // 입력값 저장
    $input.value = ""; // 입력 field 초기화
    $input.focus();

    //참가자 순서를 변경
    const order = parseInt($order.textContent);
    if (order >= number) {
      $order.textContent = 1;
    } else {
      $order.textContent = order + 1;
    }
    //입력 목록
    $listP.textContent = wordArr.toString();
    newWord = "";
  }

  /*
  if (!newWord) {
    alert("입력 후 진행");
    return;
  }

  if (!word) {
    //제시어가 비어 있을 경우
    word = newWord;
    $word.textContent = word; // 제시어 추가
    wordArr.push(word); // 입력값 저장
    $input.value = ""; // 입력 field 초기화
    $input.focus();

    //참가자 순서를 변경
    const order = parseInt($order.textContent);
    if (order >= number) {
      $order.textContent = 1;
    } else {
      $order.textContent = order + 1;
    }
    //입력 목록
    $listP.textContent = wordArr.toString();
    newWord = "";
  } else {
    //제시어가 비어 있지 않을 경우
    //단어 끝 부분 비교
    if (wordArr.slice(-1).toString().slice(-1) === newWord.slice(0, 1)) {
      //단어 끝 부분이 같을 경우
      wordArr.push(newWord); // 입력값 저장
      $input.value = ""; // 입력 field 초기화
      $input.focus();

      //참가자 순서를 변경
      const order = parseInt($order.textContent);
      if (order >= number) {
        $order.textContent = 1;
      } else {
        $order.textContent = order + 1;
      }
      //입력 목록
      $listP.textContent = wordArr.toString();
      newWord = "";
    } else {
      //단어 끝 부분이 다를 경우
      alert("틀림");
    }
  }
  */
};
document
  .querySelector("button[class='btn']")
  .addEventListener("click", onButtonClick);
