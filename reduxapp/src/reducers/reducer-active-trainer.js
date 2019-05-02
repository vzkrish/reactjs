// Reducer need to have simple logic

export default function (state=null, action){
    switch(action.type){
        case "TRAINER_SELCTED":
        return action.payload;
    }
return state;
}