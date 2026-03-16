import { useState } from 'react'
import './App.css'
import {Navbar,Button ,Card, Home, BorrowBook, ReturnBook,AddBook,AddStudent,BookList} from './components' 
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className='min-h-screen w-full'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/books' element={<BookList/>}/> 
        <Route path='/borrowbook' element={<BorrowBook/>}/> 
        <Route path='/returnbook' element={<ReturnBook/>}/>
        <Route path='/addbook' element={<AddBook/>}/>
        <Route path='/addstudent' element={<AddStudent/>}/>
        <Route path='*' element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App
