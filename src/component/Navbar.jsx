import React, {useState} from 'react';
import {  HiOutlineMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai'

const Navbar = () =>{

    const [nav, setNav] =useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
    return(
        <div className='flex justify-between items-center h-14 w-full '>
            
            <h1 className='ml-10 font-bold'>Mi tesoro</h1>
            <ul className=' hidden md:flex text-right'>
                <li className='p-8'>Home</li>
                <li className='p-8'>About</li>
                <li className='p-8'>Service</li>
                <li className='p-8'>Blog</li>
                <li className='p-8'>Contact</li>

                
            </ul>

{/* harmburger */}
            <div onClick={handleNav} className='md:hidden z-10'>
              { nav ? < AiOutlineClose size={20} /> : < HiOutlineMenuAlt4 size={20}  />}  
            </div>
            
            {/* mobile menu */}
            <div onClick={handleNav} className={nav ? 'absolute top-0 left-0 w-full h-full bg-neutral-50 text-center py-10 px-4 flex flex-col ':  'left-[-100%] absolute'}>
                
                <ul>
                <li className='py-2'>Home</li>
                <li className='py-2'>About</li>
                <li className='py-2'>Service</li>
                <li className='py-2'>Blog</li>
                <li className='py-2'>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;