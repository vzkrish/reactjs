import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
// npm install react-redux --save

import {applyMiddleware,createStore} from 'redux'
import "./index.css"
import allReducers from './reducers/index'
import App from './components/App'

import logger from 'redux-logger'
import {composeWithDevTools} from "redux-devtools-extension"

const store = createStore(allReducers,composeWithDevTools(applyMiddleware(logger)));

ReactDOM.render(
    <Provider store={store}>
    <App/>
    </Provider>,
    document.getElementById('root')
);
