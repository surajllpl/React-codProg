import React from 'react'
import style from"./Greeting.module.css"

function GreetingModuleCss() {
  return (
    <div className= {`${style.container} ${style["bg-dark"]}`}> 
      
    <h1>Hello CSS Module Example </h1>
      </div>
  )
}

export default GreetingModuleCss
