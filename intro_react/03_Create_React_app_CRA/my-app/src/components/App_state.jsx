import React from 'react'
//hooks
// useState
// useEffect


function App_state() {
    let firstName ="Suraj"; // variable cannont rerender the UI.
    function handleChangeName(){  // in react we cannot use normal veriable to change the UI.
        firstName = "Mohan";
        console.log("clicked",firstName);
    }
  return (
    <div>
        <h1>{firstName}</h1>
        <button onClick={handleChangeName}>clicked me</button>
    </div>
  )
}

export default App_state