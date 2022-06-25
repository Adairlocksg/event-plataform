import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4u21e640h9g01ud4kf9exeb/master",
  cache: new InMemoryCache(),
});
