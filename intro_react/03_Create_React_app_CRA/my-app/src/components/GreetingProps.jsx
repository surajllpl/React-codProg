import React from 'react'
import ShowFullName from './ShowFullName'

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



// function GreetingProps({firstName,lastName,fullName="Suraj Jagtap"}) { //default props fullName="Suraj Jagtap"
  
  
//   return (
    
//     // <div><h1>Hello, {firstName} {lastName} {age} {users[0]}</h1></div>
//   // <div><h1>Hello,{fullName} </h1>
  
//   // </div>
//   <ShowFullName firstName = {firstName} lastName = {lastName}/>


//   )
// }

// export default GreetingProps

function GreetingProps(props) {
 
  return (
  <ShowFullName {...props}/>
  )
}

export default GreetingProps