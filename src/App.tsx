import React, { useState } from "react";
import QuestionsCard from "components/QuestionCard/QuestionCard";
import { FetchApi } from "Hooks/API/Api";
import { DifficultyState, QuestionState, AnswerObject  } from "Types/Types";

const App = (): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState<number>(0);
  const [userAnswers, setUserANswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(true);

   const TOTAL_QUESTIONS = 10;

  const StartTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestion = await FetchApi(TOTAL_QUESTIONS, DifficultyState.EASY);

    setQuestions(newQuestion);
    setScore(0);
    setUserANswers([]);
    setNumber(0);
    setLoading(false);
  };

  const CheckAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

  const NextQuestion = () => {};

  return (
    <div className="App">
      <h1> React Typescript Quiz Game</h1>
      {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
         <button className="start__btn" onClick={StartTrivia}>
        Start
      </button>
      ) : null}
    
      <p className="quiz__score">Score : </p>
      <p className="loader">Loading Questions ...</p>
      {/* <QuestionsCard
      questionNum={number + 1}
      totalQuestions = {TOTAL_QUESTIONS}
      question = {questions[number].question}
      answers = {questions[number].answers}
      userAnswer = {userAnswers ? userAnswers[number] : undefined}
      callback = {CheckAnswer}
      /> */}
      <button className="next__ques" onClick={NextQuestion}>
        Next Question
      </button>
    </div>
  );
};

export default App;
