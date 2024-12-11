import React, { useState } from 'react'

function StateArray() {
  const [fruits,setFruits]=useState(["Apple","Mango","Banana"]);
  function handleAddFruit(){
    console.log("add fruit");
    setFruits([...fruits,"Grapes"]);
    // setFruits((prevState)=>{
    //   return [...prevState,"Grapes"];
    // });
}
  return (
    <div>State Array
      <ul>
            {fruits.map((fruit, index) => (
                <li key={index}>{fruit}</li>
                ))}
        </ul>
        <button onClick={handleAddFruit}>Add Fruit</button>
    </div>
  )
}

export default StateArray