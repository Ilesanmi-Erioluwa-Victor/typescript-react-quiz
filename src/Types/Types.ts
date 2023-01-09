export type Props = {
    question : string;
    answers : string[];
    callback : any;
    userAnswer : any;
    questionNum : number;
    totalQuestions : number;
}

// Neither of the three Enum

export enum DifficultyState {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard"
}

export type Question = {
category: string;
correct_answer: string
difficulty: string
incorrect_answers: string[]
question: string
type: string
}