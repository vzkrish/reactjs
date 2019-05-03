import React from 'react';
import Counter from '../contianers/Counter';
import AddCounter from "../contianers/AddContainer";
import RemoveCounter from '../contianers/RemoveContainer'

const App = () => {
  return (
    <div className="container">
      <Counter></Counter><br />
      <div className="columns">
        <div className="column is-11">
          <AddCounter></AddCounter>
        </div>
        <div className="column auto">
          <RemoveCounter></RemoveCounter>
        </div>
      </div>
      </div>
  )
}
export default App;
