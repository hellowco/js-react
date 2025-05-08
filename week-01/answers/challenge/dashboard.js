// 탭 전환
const tabCalc = document.getElementById('tab-calc');
const tabQuiz = document.getElementById('tab-quiz');
const secCalc = document.getElementById('calc-section');
const secQuiz = document.getElementById('quiz-section');

tabCalc.addEventListener('click', () => {
    secCalc.classList.remove('hidden');
    secQuiz.classList.add('hidden');
});
tabQuiz.addEventListener('click', () => {
    secQuiz.classList.remove('hidden');
    secCalc.classList.add('hidden');
});

// 계산기 기능
const n1 = document.getElementById('n1');
const n2 = document.getElementById('n2');
const calcResult = document.getElementById('calc-result');
document.querySelectorAll('#calc-section button[data-op]').forEach(btn => {
    btn.addEventListener('click', () => {
        const a = n1.value, b = n2.value;
        if (a === '' || b === '') {
            alert('숫자를 모두 입력하세요');
            return;
        }
        const x = Number(a), y = Number(b);
        let res;
        switch (btn.dataset.op) {
            case '+': res = x + y; break;
            case '-': res = x - y; break;
            case '*': res = x * y; break;
            case '/': res = x / y; break;
        }
        calcResult.textContent = `결과: ${res}`;
    });
});

// 퀴즈 기능
const quizzes = [
    { q: "JS에서 변수를 선언하는 키워드는?", a: "let" },
    { q: "배열 요소를 추가하는 메서드는?", a: "push" },
    { q: "템플릿 리터럴은 어떤 기호로 감싸나요?", a: "`" }
];
const quizQ = document.getElementById('quiz-question');
const quizAns = document.getElementById('quiz-answer');
const quizCheck = document.getElementById('quiz-check');

function loadQuiz() {
    const idx = Math.floor(Math.random() * quizzes.length);
    quizQ.textContent = quizzes[idx].q;
    quizCheck.dataset.answer = quizzes[idx].a;
}
quizCheck.addEventListener('click', () => {
    const correct = quizCheck.dataset.answer;
    alert(quizAns.value === correct ? '정답!' : `오답! 정답은 ${correct}`);
    quizAns.value = '';
    loadQuiz();
});

// 초기화
loadQuiz();