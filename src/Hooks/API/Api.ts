import { DifficultyState } from 'Types/Types';


export const FetchApi = async (amount:number, difficulty : DifficultyState) => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty-${difficulty}&type=multiple`;
    const returnData = await (await fetch(endpoint)).json();

    console.log(returnData);
    
}