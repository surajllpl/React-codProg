import React, { useState } from 'react'
// import CounterState from './components/state/Counter_State'
import StateArray from './components/state/State_Array'
// import SimpleStateExample from './components/state/SimpleStateExample';

function App_state() {
    const [fruits,setFruits] = useState(["Apple","Mango","Banana"]);
    function handleAddFruit(){
        console.log("add fruit");
        setFruits([...fruits,"Grapes"])
    }
  return (
    <div>
      {/* <SimpleStateExample />  */}
        {/* < CounterState /> */}
        <h1><StateArray /></h1> 
        <ul>
            {fruits.map((fruit, index) => (
                <li key={index}>{fruit}</li>
                ))}
        </ul>
        <button onClick={handleAddFruit}>Add Fruit</button>
    </div>
  )
}

export default App_state