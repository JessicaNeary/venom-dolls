import React from "react";
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import 'bootstrap/dist/css/bootstrap.css';
import './src/styles.css';

import { reducer } from "./src/reducers"

const wrapPageElement = ({ element }) => {
    const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
    return <Provider store={store}>{element}</Provider>
}

export { wrapPageElement }