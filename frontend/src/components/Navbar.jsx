import Button from './Button'
import logo from '../assets/logo.png';
import { useEffect } from 'react';
import { useState } from 'react';
// import { BorrowBook } from './BorrowBook';

function Navbar(){
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(()=>{
        console.log(isLoggedIn);
    },[isLoggedIn]);

    return (
        <div className="border border-b-1 border-gray-200 w-full h-[10vh] flex items-center justify-between px-6">
            <div className=''>
                <img  src={logo} alt="Logo"  className='h-12 object-cover'/>
            </div>
            <div className="flex gap-6 smooth-avg">
                <Button content={'Home'} variant='navbutton' route={'/'}/>
                <Button content={'Books'} variant='navbutton' route={'/books'}/>
                <Button content={'Borrow Book'} variant='navbutton' route={'/borrowbook'}/>
                <Button content={'Return Book'} variant='navbutton' route={'/returnbook'}/>
                {isLoggedIn && <>
                <Button content={'Add Book'} variant='navbutton' route={'/addbook'}/>
                <Button content={'Add Student'} variant='navbutton' route={'/addstudent'}/></>}
            </div>
            <div className=''>
                <Button content={isLoggedIn ? 'Logout' : 'Login'} onClick={() => setIsLoggedIn(!isLoggedIn)}/>
            </div>
        </div>
    )
}

export default Navbar;