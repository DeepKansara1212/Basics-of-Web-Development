import React from 'react'
import Wrapper from './components/Wrapper'
import './App.css'

const App = () => {

  return (
    <>
      <div>
        <Wrapper color="red"> 
          <div>
            Hello John
          </div>
        </Wrapper>

        <Wrapper>
          <div>
            Hello Alice
          </div>
        </Wrapper>

        <Wrapper>
          <div>
            Hello Admin
          </div>
        </Wrapper>
      </div>
    </>
  )
}

export default App 