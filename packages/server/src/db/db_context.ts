import { MongoClient } from "mongodb";
import { QuestionDB } from "./types";

export async function connectToDB() {
    const client = await MongoClient.connect(
        "mongodb://localhost:27017",
    );
    const db = client.db(process.env.MONGO_DATABASE ?? "stackunderflow");
    return {
        db,
        questions: db.collection<QuestionDB>("questions"),
    };
}

export type DbContext = Awaited<ReturnType<typeof connectToDB>>;