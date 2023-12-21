import { ObjectId } from "mongodb";
import { Resolvers } from "./generated.types";

export const resolvers: Resolvers = {
    Query: {
        questions: async (_root, _args, { db }) => {
            return db.questions.find().toArray();
        },
        questionById: async (_root, { id }, { db }) => {
            return db.questions.findOne({ _id: new ObjectId(id) });
        },
    },
    Mutation: {
        upvoteQuestion: async (_root, { id }, { db }) => {
            const updatedQuestion = await db.questions.findOneAndUpdate(
                { _id: new ObjectId(id) },
                { $inc: { votes: 1 } },
            );
            return updatedQuestion;
        },
        downvoteQuestion: async (_root, { id }, { db }) => {
            const updatedQuestion = await db.questions.findOneAndUpdate(
                { _id: new ObjectId(id) },
                { $inc: { votes: -1 } },
            );
            return updatedQuestion;
        },
    },
};