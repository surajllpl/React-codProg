import React from 'react'

function App_Event() {

    function handleClick(e){
        console.log(e.target.textContent = "You clicked me");
    }
    function handleClick2(firstName,lastName){
        console.log(firstName, lastName);
    }
    // // wrapper function
    // function handleClickWrapper(){
    //     handleClick2("Suraj", "Jagtap");
    //     }
  return (
    <div>
        <h1>App Evevts</h1>
        <button onClick={handleClick}>click me</button>
        <br /><br />
        {/* <button onClick={handleClickWrapper}>click me</button> */}
            {/* using arrow function  */}
        <button onClick={() => {
            handleClick2("Suraj", "Jagtap");
        }}>Click me!</button>
        
    </div>
  )
}

export default App_Event