import { ObjectId } from "mongodb";

export interface QuestionDB {
    id: ObjectId;
    title: string;
    body: string;
    author: string;
    tags: string[];
    createdAt: Date;
    votes: number;
    answers: AnswerDB[];
}

export interface AnswerDB {
    id: ObjectId;
    body: string;
    author: string;
    createdAt: Date;
    votes: number;
}