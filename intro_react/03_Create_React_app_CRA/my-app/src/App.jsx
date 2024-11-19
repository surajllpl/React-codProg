// import Greeting from "./components/GreetingModuleCss"

import GreetingChildren from "./components/GreetingChildren";
import GreetingProps from "./components/GreetingProps"

const Users =["user1","user2"];
function App() {
  return (
    <div className="App">
       
        {/* <GreetingProps firstName = "Suraj" lastName = "Jagtap" age = {25} users ={Users}/>  */}
        {/* <GreetingProps firstName = "Shekhar" lastName = "Chavan" age = {25}/>  */}
        {/* <GreetingProps firstName = "Mohan" />  */}

        {/* pass props to the child  */}
        
        {/* <GreetingProps firstName = "Suraj" lastName = "Jagtap" />  */}

        {/* children props  */}
        {/* <GreetingChildren><h2>Hi,There Children...</h2> </GreetingChildren> */}
        <GreetingChildren firstName = "Suraj" lastName = "Jagtap">
          <h2>Hi,There Children...</h2> 
          </GreetingChildren>


    </div>
  )
}

export default App