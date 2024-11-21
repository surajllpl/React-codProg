import React, { useState } from 'react'

function Counter_State() {
    const [count, setCount] = useState(0);
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>Increse</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(count - 1)}>Decrease</button>

    </div>
  )
}

export default Counter_State