//This Index is used to combine and expose to the react guys
import {combineReducers} from 'redux'
import TrainerReducer from './reducer-trainers'
import ActiveTrainerReducer from "./reducer-active-trainer"

const allReducers = combineReducers({
    trainers: TrainerReducer,
    activeTrainer: ActiveTrainerReducer
});

export default allReducers