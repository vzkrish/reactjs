import * as actionType from "./ActionTypes"
import * as newActionType from "./types"

export const addCounter =(newvalue) => ({
    type: actionType.ADD_COUNTER,
    payload: newvalue
});

export const removeCounter = (newvalue) =>({
    type: actionType.REMOVE_COUNTER,
    payload: newvalue
});


export const saveComment = (comment) =>({
    type: newActionType.SAVE_COMMENT,
    payload: comment
});