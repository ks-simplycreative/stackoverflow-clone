import { DbContext, connectToDB } from "./db/db_context"
import { YogaInitialContext } from "graphql-yoga"

export type GqlContext = {
  db: DbContext
}

export const createContext = async (): Promise<
  (ctx: YogaInitialContext) => GqlContext
> => {
  const db = await connectToDB()
  return (ctx: YogaInitialContext) => {
    return { db }
  }
}