import React, { useState } from 'react'
import './App.css'
import Student from './components/Student'

const App = () => {

  const [student, setStudent] = useState("")

  return (
    <>
      <Student student={student} />
      <button onClick={() => setStudent("Alice")}>Change Student</button> 
    </>
  )
}

export default App 