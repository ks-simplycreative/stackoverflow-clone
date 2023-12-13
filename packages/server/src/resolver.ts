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
};