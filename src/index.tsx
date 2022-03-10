import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { CssBaseline } from "@mui/material";

import Alert from "./features/Alert/Alert";
import * as serviceWorker from "./serviceWorker";
import history from "./utils/history";
import { store } from "./app/store";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HistoryRouter history={history}>
        <CssBaseline />
        <Alert />
        <App />
      </HistoryRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
