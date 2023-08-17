import React from 'react'
import Logo from '../Assets/logo.png'

const Navbar = () => {
  return (
    <div className='w-full h-screen bg-[#e8e7]'>
    <div className='flex justify-between'>
      
      <img src={Logo} alt='/' sizes={20} />
      <ul>
        <li>Individual</li>
        <li>Business</li>
        <li>Pricing</li>
        <li>Set your Payroll</li>
      </ul>
      <div className='px-6 py-3 my-2 items-center flex'>
      <button className='border-2 text-green-700 bg-white'>Login</button>
      <button className='text-white bg-green-800 border-2'>Register</button>
      </div>
    </div>
    </div>
  )
}

export default Navbar;
