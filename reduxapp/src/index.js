// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();



/*  Redux Training 
import {applyMiddleware,createStore} from "redux"
import logger from "redux-logger"

const reducer = function(state, action){
    console.log(state, action)
    if (action.type === "INC"){
        return state + action.payload;
    }
    if (action.type === "DEC"){
        return state - action.payload;
    }
    return state;
}

const middleware=applyMiddleware(logger)
//Create Store and attaching to reducer with initial state
const store = createStore(reducer, 1,middleware);

//subscribe you store to get new state
store.subscribe(() => {
    console.log("Store Changed : " + store.getState())
})

//Dispatch action to invoke reducer
store.dispatch({type:"INC", payload:100})
store.dispatch({type:"INC", payload:10000})
store.dispatch({type:"DEC", payload:50})
store.dispatch({type:"DEC", payload:500})

*/

//Level3 : Combined Reducers with debugging u sing Redux Dev tool

import {combineReducers,applyMiddleware,createStore} from 'redux'
import logger from 'redux-logger'

import {composeWithDevTools} from "redux-devtools-extension"

const userReducer = (state = {}, action) => {
    switch(action.type){
        case "CHANGE_NAME":{
            return state = {...state,name:action.payload};
        }
        case "CHANGE_AGE":{
            return state = {...state,age:action.payload};
        }
        
    }
    return state;
}

const tweetReducer=(state=[],action) =>{
    return state;
}

const reducers=combineReducers({
    user:userReducer,
    tweets:tweetReducer
})

const store = createStore(reducers,composeWithDevTools(applyMiddleware(logger)));

store.subscribe(() =>{console.log("Store Changed:",store.getState)});

store.dispatch({type:'CHANGE_NAME',payload:"Krish"})
store.dispatch({type:'CHANGE_AGE',payload:36})
store.dispatch({type:'CHANGE_NAME',payload:"Krisnam"})
