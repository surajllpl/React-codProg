import React from 'react'

function User({firstName, lastName}) {
  return (
    <div>
      <h1>
        {firstName} {lastName}
        </h1>
      </div>
  )
}

export default User