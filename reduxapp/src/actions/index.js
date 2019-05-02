// Crud Methods are called as actions.

export const selectTrainer=(trainer)=>{
    console.log("You have clicked on Trainer",trainer.id);
    // Writer here if you want to make axios async call. 
    return{
        type:'TRAINER_SELECTED',
        payload:trainer
    }
}