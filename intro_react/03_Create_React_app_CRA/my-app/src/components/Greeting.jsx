import React from 'react'
import "./Greeting.css"
function Greeting() {
  // const firstName = "Suraj";
  // const firstName =(name)=>name.toUpperCase();
  // function firstName(name){
  //   return name.toUpperCase();
  // }
  // const firstName = function (name){
  //   return name.toUpperCase();
  // }
  const firstName =(name)=>{
    return name.toUpperCase();
  }
  

  return (
    <div className='bg-dark'> 
      <h1>Hello, {firstName("suraj")}</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis provident voluptates natus eius, reprehenderit nihil!</p>
        {/* <h2>Form</h2>
        <form>
          <label htmlFor="fname">First Name</label>
          <input type="text" id='fname' name='fname' />
        </form> */}
        </div>
  )
}

export default Greeting;

// import React, { useState } from 'react';
// import "./Greeting.css";

// function Greeting() {
//   const [firstName, setFirstName] = useState("");

//   const handleInputChange = (e) => {
//     setFirstName(e.target.value); // Update the state with the input value
//     console.log(e.target.value);   // Log the value to the console as it changes
//   };

//   return (
//     <div className='bg-dark'> 
//       <h1>Hello, {firstName.toUpperCase()}</h1>
//       <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis provident voluptates natus eius, reprehenderit nihil!</p>
//       <h2>Form</h2>
//       <form>
//         <label htmlFor="fname">First Name</label>
//         <input 
//           type="text" 
//           id="fname" 
//           name="fname" 
//           value={firstName} // Bind input to state
//           onChange={handleInputChange} // Update state on input change
//         />
//       </form>
//     </div>
//   );
// }

// export default Greeting;
