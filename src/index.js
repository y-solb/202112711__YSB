import React from "react";
import ReactDOM from "react-dom";
import App from "./app.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store";
import GlobalStyle from "./globalStyles";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
