import React from 'react'

const Navbar = () => {
  return (
    <nav className=
    ' bg-slate-600 text-white  '>
      <div className="myContainer flex justify-between items-center px-4 h-13 py-5">

      <div className="logo font-bold text-2xl">
        <span className='text-green-500'> &lt;</span>
        Nexus
        <span className='text-green-500'>Pass/&gt;</span>
        </div>
      <button className='text-white bg-salte-400 hover:bg-green-500 rounded-full my-5 flex justify-between items-center ring-1 ring-white'>
        <img className='invert-0 w-10 p-1 ' src="/icons/github.svg" alt="github logo" />
        <span className='font-bold px-2'>GitHub</span>
      </button>
      </div>
    </nav>
  )
}

export default Navbar
