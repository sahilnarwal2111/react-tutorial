import Chai from "./Chai"
function App() {
  const username =  ' chai aur code'
  return (
      <> // known as fragment
      <Chai/>
      <h1>Chai aur react {username} </h1> //curly brac syntax inside it is variables names
      </>
  ) 
}
export default App
// evaluated expresion
//<h1>Chai aur react {username} </h1>
// <h1>Chai aur react {if(true) username} </h1> ->Incorrect

