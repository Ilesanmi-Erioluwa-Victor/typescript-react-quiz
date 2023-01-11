import React, { useState } from "react";
import QuestionsCard from "components/QuestionCard/QuestionCard";
import { FetchApi } from "Hooks/API/Api";
import { DifficultyState, QuestionState, AnswerObject  } from "Types/Types";
import { GlobalStyle } from "App.styles";

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

  const CheckAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if(!gameOver) {
      // user Answer..
      const answer = e.currentTarget.value;
      //  Check answer again
      const correct = questions[number].correct_answer === answer

      // add score if answer is correct
      if(correct)setScore(prev => prev + 1)

      // save question to answerObject
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer : questions[number].correct_answer,
      };

      setUserANswers( (prev) => [...prev, answerObject])
    }
  };

  const NextQuestion = () => {
    // Move to next provided not the last question...
    const nextQuestion = number + 1;

    if(nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true)
    } else {
      setNumber(nextQuestion)
    }
  };

  return (
    <>
    <GlobalStyle />
    <div className="App">
      <h1> React Typescript Quiz Game</h1>
      {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
         <button className="start__btn" onClick={StartTrivia}>
        Start
      </button>
      ) : null}
    
    {!gameOver && (
      <p className="quiz__score">Score : {score}</p>
    )}
      
      {loading && ( <p className="loader">Loading Questions ...</p>)}
     
      {!loading && !gameOver &&( <QuestionsCard
      questionNum={number + 1}
      totalQuestions = {TOTAL_QUESTIONS}
      question = {questions[number].question}
      answers = {questions[number].answers}
      userAnswer = {userAnswers ? userAnswers[number] : undefined}
      callback = {CheckAnswer}
      /> ) }

      {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 && (
           <button className="next__ques" onClick={NextQuestion}>
        Next Question
      </button>
      )}
     
    </div>
    </>
  );
};

export default App;
