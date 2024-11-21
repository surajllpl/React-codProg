import React, { useState } from 'react'
//hooks
// useState
// useEffect

// useState()
// - useState(defaultvalue) -----> it return array[stateValue,functionToUpdateThatStateValue]
// - useState call directly components not call outside of component within function 


function App_state() {
    // let firstName ="Suraj"; // variable cannont rerender the UI.
    // function handleChangeName(){  // in react we cannot use normal veriable to change the UI.
    //     firstName = "Mohan";
    //     console.log("clicked",firstName);
    // }
    console.log("component render");
    // const returnValue = useState("Suraj");
    // const firstName = returnValue[0];
    // const updateFirstName = returnValue[1];
    const [firstName, setFirstName] = useState("Suraj");
    function handleChangeName(){
        if(firstName === "Suraj"){
            setFirstName("Mohan");// we can use setState to change the UI.
        }else{
            setFirstName("Suraj");
        }
    }
  return (
    <div>
        <h1>{firstName}</h1>

        <button onClick={handleChangeName}>clicked me</button>
    </div>
  )

  
}

export default App_state