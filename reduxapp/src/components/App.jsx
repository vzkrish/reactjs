import React from 'react'
import TrainerList from '../containers/trainer-list'
import TrainerDetails from '../containers/trainer-details'


const App = () => (
    <div>
        <h2>
            Trainers List - Krish Software
        </h2>
        <TrainerList/>
        <hr/>
        <h2> Trainer Details</h2>
        <TrainerDetails/>
    </div>
)

export default App