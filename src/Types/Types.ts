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