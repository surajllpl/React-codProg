import React from 'react'

function GreetingChildren(props) {
  return (
    <div>
        <>{props.children}
        <h3>{props.firstName} {props.lastName}</h3></>
        </div>
  )
}

export default GreetingChildren