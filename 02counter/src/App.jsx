import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)
  //useState return arrays of two values

  // let counter = 5

  const addValue = () =>{
    // counter = counter + 1
    // setCounter(counter + 1)

    // or
    if(counter < 20){
    counter = counter + 1
    setCounter(counter)
  }
    // console.log("clicked", counter)
  }
  const removeValue = ()=>{
    if(counter>0)
    setCounter(counter - 1)
  }

  return (
    <>
     <h1>Chai aur react</h1>
     <h2>Counter value: {counter}</h2>
     <button
     onClick={addValue}>Add Value</button>
     <br /> 
     <button
     onClick={removeValue}>Decrease Value</button>
    </>
  )
}

export default App
