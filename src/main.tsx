/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from "react";
import ReactDOM from "react-dom/client";

// Providers
import { ApolloProvider } from "@apollo/client";

// Libs
import { client } from "./libs/Apollo";

// Components
import App from "./App";

// Elements
const element = document.getElementById("root");

ReactDOM.createRoot(element!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
);
