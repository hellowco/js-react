const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const addBtn = document.getElementById("addBtn");
const resultDiv = document.getElementById("result");

addBtn.addEventListener("click", () => {
  const a = num1.value;
  const b = num2.value;
  if (!a || !b) {
    alert("숫자를 모두 입력하세요");
    return;
  }
  resultDiv.textContent = `결과: ${Number(a) + Number(b)}`;
});