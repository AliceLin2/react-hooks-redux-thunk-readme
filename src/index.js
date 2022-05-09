import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, appleMiddeleware, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"
import App from "./App";
import rootReducer from "./reducer";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))
const store = createStore(
  rootReducer, composedEnhancer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
