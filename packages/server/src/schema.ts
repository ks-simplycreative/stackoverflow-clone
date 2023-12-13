export const typeDefinitions = /* GraphQL */ `
    type Query {
        questionById(id: ID!): Question
        questions: [Question!]!
    }

    type Question {
        _id: ID!
        title: String!
        body: String!
        author: String!
        tags: [String!]!
        createdAt: String!
        votes: Int!
        answers: [Answer!]!
    }

    type Answer {
        _id: ID
        body: String
        author: String
        createdAt: String
        votes: Int
    }
`;