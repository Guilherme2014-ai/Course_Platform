import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4u39cyk0ich01udf92669cd/master", // Rota GraphQL
  cache: new InMemoryCache(),
});
