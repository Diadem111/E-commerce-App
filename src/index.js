import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import {store, persistor} from "./reducers/store";
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
  
  </BrowserRouter>,
  document.getElementById("root")
);
