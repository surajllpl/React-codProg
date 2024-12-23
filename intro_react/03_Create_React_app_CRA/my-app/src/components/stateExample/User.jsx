import React from 'react'

function User({userDetail}) {
  return (
    <div> <p>first name : {userDetail.firstName}</p>
    <p>last name : {userDetail.lastName}</p>
    <p>age : {userDetail.age}</p></div>
  )
}

export default User