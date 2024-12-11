import React, { useState } from 'react'

function StateObject() {
    const[person,setPerson] = useState({
        id : 1,
        firstName : "Suraj",
        lastName : "Jagtap",
        email : "surajjagtap@gmail.com",
        phone : 9090909090,
        age : 35,
    });
    const increageAge = () =>{
       setPerson({
        ...person,
        age : person.age + 1,
       });
    }
  return (
    <div>
        <h1>State Object</h1>
        <p>First Name :{person.firstName}</p>
        <p>Last Name :{person.lastName}</p>
        <p>Email :{person.email}</p>
        <p>Phone :{person.phone}</p>
        <p>Age :{person.age}</p>
        <button onClick={increageAge}>Increase Age</button>
    </div>
  )
}

export default StateObject