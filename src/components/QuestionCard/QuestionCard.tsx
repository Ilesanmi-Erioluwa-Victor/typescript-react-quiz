import React from 'react'
import { Props } from 'Types/Types'
import { Wrapper, ButtonWrapper } from './QuestionCard.styles'

const QuestionsCard:React.FC<Props> = ({ question,answers,callback,userAnswer,questionNum, totalQuestions}) => {
  return (
    <Wrapper>
      <p className='number'>Question : {questionNum} / {totalQuestions}</p>

      <p dangerouslySetInnerHTML={{__html : question}} />
      <div>
       {answers.map((answer, i) => (
        <ButtonWrapper key={i}
         correct={userAnswer?.correctAnswer === answer}
         userClicked={userAnswer?.answer === answer}
        >
            <button disabled={!!userAnswer} onClick={callback} value={answer}>
              <span dangerouslySetInnerHTML={{__html : answer}} />
            </button>
        </ButtonWrapper>
       ))}
      </div>
    </Wrapper>
  )
}

export default QuestionsCard
