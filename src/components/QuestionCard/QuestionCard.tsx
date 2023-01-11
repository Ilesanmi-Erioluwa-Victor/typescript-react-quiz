import React from 'react'
import { Props } from 'Types/Types'

const QuestionsCard:React.FC<Props> = ({ question,answers,callback,userAnswer,questionNum, totalQuestions}) => {
  return (
    <div>
      <p className='number'>Question : {questionNum} / {totalQuestions}</p>

      <p dangerouslySetInnerHTML={{__html : question}} />
      <div>
       {answers.map((answer, i) => (
        <div key={i}>
            <button disabled={userAnswer} onClick={callback}>
              <span dangerouslySetInnerHTML={{__html : answer}} />
            </button>
        </div>
       ))}
      </div>
    </div>
  )
}

export default QuestionsCard
