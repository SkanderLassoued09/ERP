import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { ApolloModule, APOLLO_OPTIONS, APOLLO_FLAGS } from "apollo-angular";
import { HttpLink } from "apollo-angular/http";
import { InMemoryCache, ApolloLink, split } from "@apollo/client/core";
import { setContext } from "@apollo/client/link/context";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";
import { URL } from "./URLs";

const uri = URL.URL;
const wsUri = "ws://localhost:3000/graphql"; // WebSocket URL

export function createApollo(httpLink: HttpLink) {
  const basic = setContext((operation, context) => ({
    headers: {
      Accept: "charset=utf-8, application/json",
    },
  }));

  const auth = setContext((operation, context) => {
    const token = localStorage.getItem("token");

    if (token === null) {
      return {};
    } else {
      return {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
    }
  });

  const http = httpLink.create({ uri });

  const ws = new WebSocketLink({
    uri: wsUri,
    options: {
      reconnect: true,
      // connectionParams: {
      //   authToken: localStorage.getItem("token"),
      // },
    },
  });

  const link = split(
    // split based on operation type
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === "OperationDefinition" &&
        definition.operation === "subscription"
      );
    },
    ws,
    ApolloLink.from([basic, auth, http])
  );

  const cache = new InMemoryCache();

  return {
    link,
    cache,
    defaultOptions: {
      watchQuery: {
        fetchPolicy: "no-cache",
        errorPolicy: "ignore",
      },
      query: {
        fetchPolicy: "no-cache",
        errorPolicy: "all",
      },
    },
  };
}

@NgModule({
  imports: [ApolloModule, HttpClientModule],
  providers: [
    {
      provide: APOLLO_FLAGS,
      useValue: {
        useMutationLoading: true,
      },
    },
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQlModule {}
