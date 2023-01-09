import { ShuffleArray } from './../../utils/ShuffleArray';
import { DifficultyState, Question, QuestionState } from 'Types/Types';


export const FetchApi = async (amount:number, difficulty : DifficultyState) => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty-${difficulty}&type=multiple`;
    const returnData = await (await fetch(endpoint)).json();   
    return returnData.results.map((question : Question)=> (
        {
            ...question,
            answers : ShuffleArray([...question.incorrect_answers, question.correct_answer])
        }
        ))
    
    
}