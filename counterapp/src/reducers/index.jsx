import {combineReducers} from 'redux'
import counterReducer from "./counterReducer"

const counterApp = combineReducers({
    counter: counterReducer
})

export default counterApp