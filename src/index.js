import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = createStore(reducer);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

reportWebVitals();
