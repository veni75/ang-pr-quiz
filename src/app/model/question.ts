import { Answer } from "./answer";

export class Question {
    id: number = 0;
    question: string = '';
    answers: string[] = [];
    correct: boolean[] = [false,false,false,false];
    points: number = 0;
    active: boolean = false;
}
