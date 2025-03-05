import "./practice"
import React,{useContext} from "react"
const UserContext = React.createContext();
function Component1() {
  return (
    <>
      <h1>Component1</h1>
      <Component2/>
    </>
  );
}

function Component2() {
    const user = useContext(UserContext)
  return (
    <> 
      <h1>Component 2</h1>
      <h2>{`Hello ${user.firstName} again!`}</h2>
    </>
  );
}

function App(){
    const initialState = {
        firstName:"sreenath",
        lastName:"Reddy",
        email:"example@gmail.com"
    }

    return (
        <UserContext.Provider value = {initialState}>
            <Component1/>
        </UserContext.Provider>
    )
}
export default App;