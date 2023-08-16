import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Header } from './Components/Header'
import { Main } from './Components/Main'

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
      <Header/>
      <Main/>
      </BrowserRouter>
    </div>
  )
}

export default App
