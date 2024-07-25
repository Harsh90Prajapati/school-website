import React, { useState } from 'react'
import {AiOutlineMenu , AiOutlineClose} from 'react-icons/ai'

const NavBar = () => {

    const [open , setOpen] = useState(true)

    const openMenu =()=>{
        setOpen(!open)
    }
  return (
    <div className='flex bg-white justify-center items-center gap-10 w-full overflow-hidden px-8 text-black h-16 rounded-b-xl mt-0 shadow-lg '>
    <h1 className='w-full line-clamp-1 font-semibold tracking-wide text-rose-400 '>Springdale Public School.</h1>
    <ul className='hidden lg:flex md:gap-4'>
        <a href="#home"><li className='p-4 cursor-pointer'>Home</li></a>
        <a href="#about"><li className='p-4 cursor-pointer'>About</li></a>
        <a href="#academics"><li className='p-4 cursor-pointer'>Academics</li></a>
        <a href="#admissions"><li className='p-4 cursor-pointer'>Admission</li></a>
        <a href="#faculty"><li className='p-4 cursor-pointer'>Faculty</li></a>
        <a href="#students"><li className='p-4 cursor-pointer'>Students</li></a>
        <a href="#gallery"><li className='p-4 cursor-pointer'>Gallery</li></a>
        <a href="#contact"><li className='p-4 cursor-pointer'>Contact</li></a>
    </ul>
    
    <div onClick={openMenu} className='block lg:hidden flex-1 '>
    {!open ? <AiOutlineClose/> : <AiOutlineMenu size={20}/>}
    </div>
    <div className={!open ? 'fixed z-10 bg-slate-50 font-semibold text-gray-600 left-0 top-0 w-full border-r mt-14 border-r-gray-400 ease-in-out duration-500 lg:hidden rounded-b-lg shadow-md':'fixed z-10 top-[-100%] h-[50%] w-full duration-700'}>
    <ul className='uppercase p-4 cursor-pointer'>
        <a href="#home"><li className='p-4 cursor-pointer border-b'>Home</li></a>
        <a href="#about"><li className='p-4 cursor-pointer border-b'>About</li></a>
        <a href="#academics"><li className='p-4 cursor-pointer border-b'>Academics</li></a>
        <a href="#admissions"><li className='p-4 cursor-pointer border-b'>Admission</li></a>
        <a href="#faculty"><li className='p-4 cursor-pointer border-b'>Faculty</li></a>
        <a href="#students"><li className='p-4 cursor-pointer border-b'>Students</li></a>
        <a href="#gallery"><li className='p-4 cursor-pointer border-b'>Gallery</li></a>
        <a href="#contact"><li className='p-4 cursor-pointer border-b'>Contact</li></a>
    </ul>
    </div>
</div>
  )
}

export default NavBar