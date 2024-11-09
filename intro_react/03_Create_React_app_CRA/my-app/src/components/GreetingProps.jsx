import React from 'react'

// function GreetingProps(props) {
//   console.log(props);//  object 
//   // const firstName = props.firstName;
//   // const lastName = props.lastName;
//   const {firstName,lastName} = props; // destructring
  
//   return (
//     // <div><h1>Hello, {props.firstName} {props.lastName}</h1></div>
//     <div><h1>Hello, {firstName} {lastName}</h1></div>

//   )
// }

// export default GreetingProps



function GreetingProps({firstName,lastName,age,users}) {
  
  return (
    
    <div><h1>Hello, {firstName} {lastName} {age} {users[0]}</h1></div>

  )
}

export default GreetingProps