import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Provider } from 'react-redux';
import { store } from './store';

// Material Dashboard 2 React Context Provider
import { MaterialUIControllerProvider } from "./context";

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
    <MaterialUIControllerProvider>
      <Provider store={store}>
      <App />
      </Provider>
    </MaterialUIControllerProvider>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
