import React from 'react'

function Users({users}) {
    console.log(users)
  return (
    <div>
        {users.map(user =>{
          <div>
            <p>first name : {users.firstName}</p>
          </div>
        }
        )}
        
    </div>
  )
}

export default Users