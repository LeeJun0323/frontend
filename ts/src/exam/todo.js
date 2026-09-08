// 1. 타입(인터페이스) 정의
// Question : question 문자열, choices , answer
interface Question {
  question: string;
  choices: string[];
  answer: number;
}

// type 정의
// GameState : playing or finished
type GameState = "playing" | "finished";

// 2. 문제 데이터 가져오기
// fetch()
let questions: Question[] = [];
const loadQuestions = async (): Promise<void> => {
  async function load() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1",
    );
    const data = await fetch("./question.json");
    questions = await response.json();
    showQuestion();
  }
};

// 3. 게임상태 변수
// currentQuestionIndex : number(초기값 0)
let currentQuestionIndex: number = 0;
// score: 위와 동일
let score: number = 0;
// selectedAnswer : 숫자 or null (초기값 null)
let selectedAnswer: number | null = null;
// gameState : GameState (초기값 playing)
let gameState: GameState = "playing";

// 4. dom 요소 가져오기
//
const questionNumber = document.querySelector(
  "#quesion-number",
) as HTMLSpanElement;
const scoreElement = document.querySelector("#score") as HTMLSpanElement;
const progessBar = document.querySelector("#progress-bar") as HTMLDivElement;
const quizSection = document.querySelector("#quiz-section") as HTMLElement;
const choicesElement = document.querySelector("#choices") as HTMLDivElement;
const nextButton = document.querySelector("#next-button") as HTMLButtonElement;
const resultSection = document.querySelector(
  "#result-section",
) as HTMLDivElement;
const resultMessage = document.querySelector("#result-message") as HTMLElement;
const finalScore = document.querySelector(
  "#final-score",
) as HTMLParagraphElement;
const restartButton = document.querySelector(
  "#restart-button",
) as HTMLButtonElement;
const questionElement = document.querySelector("#question") as HTMLHeadElement;

// 문제 출력
function showQuestion(): void {
  // 문제 가져오기
  const currentQuestion: Question = questions[currentQuestionIndex];

  // 가져온 문제 화면에 보여주기
}
