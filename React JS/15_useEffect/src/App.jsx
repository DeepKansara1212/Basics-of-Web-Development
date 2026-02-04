import React, { useEffect, useState } from 'react'
import './App.css'

const App = () => {

  const [count, setCount] = useState(0);
  const [calculate, setCalculate] = useState(0)

  useEffect(() => {
    // setTimeout(() => {
    //   setCount((count) => count + 1);
    // }, 1000);

    setCalculate(() => count * 2)
  }, [count]);

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Calculation: {calculate}</p> 
    </> 
  )
}

export default App 