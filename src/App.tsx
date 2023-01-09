import React, { useState } from "react";
import QuestionsCard from "components/QuestionsCard/QuestionsCard";

const App = (): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(false);
  const [quetions, setQuestions] = useState<string[]>([]);
  const [number, setNumber] = useState<number>(0);
  const [userAnswers, setUserANswers] = useState<string[]>([]);
  const [score, setScore] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(true);

  const TOTAL_QUESTIONS = 10;

  const StartTrivia = async () => {};

  const CheckAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

  const NextQuestion = () => {};

  return (
    <div className="App">
      <h1> React Typescript Quiz Game</h1>

      <button className="start__btn" onClick={StartTrivia}>
        Start
      </button>
      <p className="quiz__score">Score : </p>
      <p className="loader">Loading Questions ...</p>
      <QuestionsCard
      questionNum={number + 1}
      totalQuestions = {TOTAL_QUESTIONS}
      />
      <button className="next__ques" onClick={NextQuestion}>
        Next Question
      </button>
    </div>
  );
};

export default App;
