const quizzes = [
  { q: "JS에서 변수를 선언하는 키워드는?", a: "let" },
  { q: "JS 배열 메서드 중 요소를 추가하는 메서드는?", a: "push" },
  { q: "템플릿 리터럴은 어떤 기호로 감싸나요?", a: "`" },
  { q: "undefined의 타입을 알려주는 typeof 결과는?", a: "undefined" },
  { q: "항상 true를 반환하는 비교 연산은?", a: "===" }
];

const quizEl = document.getElementById("quiz");
const answerEl = document.getElementById("answer");
const btn = document.getElementById("checkBtn");

const idx = Math.floor(Math.random() * quizzes.length);
const item = quizzes[idx];
quizEl.textContent = item.q;

btn.addEventListener("click", () => {
  alert(answerEl.value === item.a ? "정답!" : `오답. 정답은 ${item.a}` );
});