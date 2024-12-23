import React, { useState } from 'react'
import Users from './Users'

function AppStateExample() {
    const [users,setUsers] = useState([
        {id : 1, firstName : "Suraj", lastName : "Jagtap", age : 25},
        {id : 2, firstName : "Rahul", lastName : "Kale", age : 27},
        {id : 3, firstName : "Kunal", lastName : "Bhosale", age : 22},
        {id : 4, firstName : "Rohan", lastName : "Mehata", age : 24},
    ])
  return (
    <div className='App'>
        <h1>App State Example</h1>
        <Users users={users}/>
        </div>
  )
}

export default AppStateExample