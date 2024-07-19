import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   const [counter, setcounter] = useState(5)

    const addValue = () =>{
      console.log("clicked", counter);
      setcounter(counter+1);
    }

    const removeValue = () =>{
      if (counter === 0) {
        setcounter(0);
      } else {
        setcounter(counter - 1);
      }
    }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter : {counter}</h2>
      <button
      onClick={addValue}
      >Add Value : {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value : {counter}</button>
      <p> counter : {counter}</p>
    </>
  )
}

export default App
