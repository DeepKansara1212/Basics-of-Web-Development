import React, { useState } from 'react'
import './App.css'

const App = () => {

  const [count, setCount] = useState(0);
  const [name, setName] = useState("John Doe") 

  return (
    <>
      <h1>React Hooks - useState()</h1>

      <h2>Name: {name}</h2>
      <button onClick={() => setName("Jane Doe")}>Change Name</button> 

      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button> 
    </>
  )
}

export default App 