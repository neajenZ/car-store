import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ApolloProvider } from "@apollo/client";
import { client } from "./shared/api/apolloClient";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./shared/store/store";

const rootNodeId = "root";

const container = document.getElementById(rootNodeId);

if (!container) {
  throw new Error(`Не найден Dom элемент с ${rootNodeId} `);
}

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <BrowserRouter>
          <App />      
        </BrowserRouter>
      </Provider>
    </ApolloProvider>
  </React.StrictMode>
);
