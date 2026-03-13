import { useState } from 'react'
import './App.css'
import {Navbar,Button ,Card, Home, BookPage,BorrowBook} from './components' 
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className='min-h-screen w-full'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/borrowbook' element={<BorrowBook/>}/>
        <Route path='*' element={<Home/>}/>
      </Routes>
      {/* <Home/> */}
      <BookPage/>
    </div>
  )
}

export default App
