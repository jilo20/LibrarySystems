import { useState } from 'react'
import './App.css'
import {Navbar,Button ,Card, Home, BookPage} from './components' 

function App() {

  return (
    <div className='min-h-screen w-full'>
      <Navbar/>
      {/* <Home/> */}
      <BookPage/>
    </div>
  )
}

export default App
