import React, { useState } from 'react'

function CounterState() {
    const [count, setCount] = useState(0);
    function handleIncrease(){
        // setCount(count + 1);
        // setCount((previousState)=>{  //Update state using callback
        //     return previousState +1;
        // })
        setCount((previousState)=> previousState + 1);
    }
    function handleDecrease(){
        setCount(count - 1);
    }
    function handleReset(){
        setCount(0);
    }
  return (
    <div>
        <h1>{count}</h1>

        <button onClick={handleIncrease}>Increse</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleDecrease}>Decrease</button>


        {/* // using Arrow function  */}
        {/* <button onClick={() => setCount(count + 1)}>Increse</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(count - 1)}>Decrease</button> */}

    </div>
  )
}

export default CounterState