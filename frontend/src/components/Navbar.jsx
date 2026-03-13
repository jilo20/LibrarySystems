import Button from './Button'
import logo from '../assets/logo.png'

function Navbar(){
    return (
        <div className="border border-b-1 border-gray-200 w-full h-[10vh] flex items-center justify-between px-6">
            <div className=''>
                <img  src={logo} alt="Logo"  className='h-12 object-cover'/>
            </div>
            <div className="flex gap-6">
                <Button content={'Home'} variant='navbutton' style={''}/>
                <Button content={'Books'} variant='navbutton'/>
                <Button content={'Borrow Book'} variant='navbutton'/>
                <Button content={'Return Book'} variant='navbutton'/>
            </div>
            <div className=''>
                <Button content={'Login'}/>
            </div>
        </div>
    )
}

export default Navbar;