import React from 'react'
import User from './User'

function Users({users}) {
    console.log(users)
  return (
    <div>
        {/* {users.map((user) =>
         ( <div>
            <p>first name : {user.firstName}</p>
            <p>last name : {user.lastName}</p>

          </div>)
        )} */}
        {/* another way to return user details  */}
        {/* {users.map((user)=>{
          return(
            <div className='user' key={user.id}>
              <p>first name : {user.firstName}</p>
              <p>last name : {user.lastName}</p>
              <p>age : {user.age}</p>

              </div>
          )
        })} */}
        {/* another way to return user details  */}
        {users.map((user)=>(    <User userDetail ={user} />)
      
        )}
    </div>
  )
}

export default Users