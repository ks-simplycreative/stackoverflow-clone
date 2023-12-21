/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type Answer = {
  __typename?: "Answer";
  _id?: Maybe<Scalars["ID"]["output"]>;
  author?: Maybe<Scalars["String"]["output"]>;
  body?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["String"]["output"]>;
  votes?: Maybe<Scalars["Int"]["output"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  downvoteQuestion?: Maybe<Question>;
  upvoteQuestion?: Maybe<Question>;
};

export type MutationDownvoteQuestionArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationUpvoteQuestionArgs = {
  id: Scalars["ID"]["input"];
};

export type Query = {
  __typename?: "Query";
  questionById?: Maybe<Question>;
  questions: Array<Question>;
};

export type QueryQuestionByIdArgs = {
  id: Scalars["ID"]["input"];
};

export type Question = {
  __typename?: "Question";
  _id: Scalars["ID"]["output"];
  answers: Array<Answer>;
  author: Scalars["String"]["output"];
  body: Scalars["String"]["output"];
  createdAt: Scalars["String"]["output"];
  tags: Array<Scalars["String"]["output"]>;
  title: Scalars["String"]["output"];
  votes: Scalars["Int"]["output"];
};

export type UpvoteQuestionMutationVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type UpvoteQuestionMutation = {
  __typename: "Mutation";
  upvoteQuestion?: {
    __typename: "Question";
    _id: string;
    votes: number;
  } | null;
};

export type DownvoteQuestionMutationVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type DownvoteQuestionMutation = {
  __typename: "Mutation";
  downvoteQuestion?: {
    __typename: "Question";
    _id: string;
    votes: number;
  } | null;
};

export type QuestionDetailQueryVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type QuestionDetailQuery = {
  __typename: "Query";
  questionById?: {
    __typename: "Question";
    _id: string;
    title: string;
    body: string;
    author: string;
    tags: Array<string>;
    createdAt: string;
    votes: number;
    answers: Array<{
      __typename: "Answer";
      _id?: string | null;
      body?: string | null;
      author?: string | null;
      createdAt?: string | null;
      votes?: number | null;
    }>;
  } | null;
};

export type QuestionOverviewPageQueryVariables = Exact<{
  [key: string]: never;
}>;

export type QuestionOverviewPageQuery = {
  __typename: "Query";
  questions: Array<{
    __typename: "Question";
    _id: string;
    title: string;
    body: string;
    author: string;
    tags: Array<string>;
    createdAt: string;
    votes: number;
    answers: Array<{
      __typename: "Answer";
      _id?: string | null;
      body?: string | null;
      author?: string | null;
      createdAt?: string | null;
      votes?: number | null;
    }>;
  }>;
};

export const UpvoteQuestionDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "UpvoteQuestion" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "upvoteQuestion" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                { kind: "Field", name: { kind: "Name", value: "_id" } },
                { kind: "Field", name: { kind: "Name", value: "votes" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpvoteQuestionMutation,
  UpvoteQuestionMutationVariables
>;
export const DownvoteQuestionDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "DownvoteQuestion" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "downvoteQuestion" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                { kind: "Field", name: { kind: "Name", value: "_id" } },
                { kind: "Field", name: { kind: "Name", value: "votes" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DownvoteQuestionMutation,
  DownvoteQuestionMutationVariables
>;
export const QuestionDetailDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "QuestionDetail" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "questionById" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                { kind: "Field", name: { kind: "Name", value: "_id" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "body" } },
                { kind: "Field", name: { kind: "Name", value: "author" } },
                { kind: "Field", name: { kind: "Name", value: "tags" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "votes" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "answers" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "__typename" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "_id" } },
                      { kind: "Field", name: { kind: "Name", value: "body" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "author" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "votes" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<QuestionDetailQuery, QuestionDetailQueryVariables>;
export const QuestionOverviewPageDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "QuestionOverviewPage" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "questions" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                { kind: "Field", name: { kind: "Name", value: "_id" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "body" } },
                { kind: "Field", name: { kind: "Name", value: "author" } },
                { kind: "Field", name: { kind: "Name", value: "tags" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "votes" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "answers" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "__typename" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "_id" } },
                      { kind: "Field", name: { kind: "Name", value: "body" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "author" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "votes" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  QuestionOverviewPageQuery,
  QuestionOverviewPageQueryVariables
>;
