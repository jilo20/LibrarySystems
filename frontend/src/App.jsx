import { useState } from 'react'
import './App.css'
import {Navbar,Button ,Card, Home} from './components' 

function App() {

  return (
    <div className='min-h-screen w-full'>
      <Navbar/>
      <Home/>
    </div>
  )
}

export default App
