// Reducer need to have simple logic

export default function (state=null, action){
    console.log("TRAINER_SELECTED",action)
    switch(action.type){
        case "TRAINER_SELECTED":
        return action.payload;
    }
return state;
}