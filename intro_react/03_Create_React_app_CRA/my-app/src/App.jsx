// import Greeting from "./components/GreetingModuleCss"

import GreetingChildren from "./components/GreetingChildren";
import GreetingProps from "./components/GreetingProps";
import User from "./components/User";

// const Users =["user1","user2"];
const Users = [
  { id: 1, firstName: "Suraj", lastName: "jagtap" },
  { id: 2, firstName: "Sagar", lastName: "jadhav" },
  { id: 3, firstName: "Santosh", lastName: "bhosale" },
  { id: 4, firstName: "Atul", lastName: "chavan" },
];
//map method can be used in jsx code

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
      {/* <GreetingChildren firstName = "Suraj" lastName = "Jagtap">
          <h2>Hi,There Children...</h2> 
          </GreetingChildren> */}
      {/* Render List  */}
      {/* <User firstName = {Users[0].firstName} lastName = {Users[0].lastName}/>
          <User firstName = {Users[1].firstName} lastName = {Users[1].lastName}/>
          <User firstName = {Users[2].firstName} lastName = {Users[2].lastName}/>
          <User firstName = {Users[3].firstName} lastName = {Users[3].lastName}/> */}
      {/* map method - for n no of list of user info  */}
      {
        // Users.map((user) => {
        //   return (
        //       <User firstName={user.firstName} lastName={user.lastName} />
        //     )})
      }
      {
        //  Users.map((user)=>(<User firstName={user.firstName} lastName={user.lastName}/>))
      }
      {/* {Users.map((user) => {
        return <User {...user} />;
      })} */}
      {/* key props */}
      {Users.map((user) => { // used when list is dynamic
        return <User key={user.id} {...user} />;
      })}
      {/* {Users.map((user,index) => {  // used index when list is static
        return <User key={index} {...user} />;
      })} */}
    </div>
  );
}

export default App;
