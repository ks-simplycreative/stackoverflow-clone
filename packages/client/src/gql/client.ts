import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import generatedIntrospection from "./fragement";

export const client = new ApolloClient({
    link: createHttpLink({ uri: "http://localhost:3000/graphql" }),
    cache: new InMemoryCache({
        possibleTypes: generatedIntrospection.possibleTypes,
    }),
});