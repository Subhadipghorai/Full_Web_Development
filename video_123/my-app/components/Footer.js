import React from 'react'

const Footer = () => {
  return (
    <footer className='flex justify-around bg-slate-800 text-white py-4 text-xs'>
        <div className="text-center">Copyright &copy; 2023, All rights reserved by ite </div>
        <ul className="flex gap-6">
                <a href="/"><li>Home</li></a>
                <a href="/about"><li>About</li></a>
                <a href="/contact"><li>Contact</li></a>
            </ul>


    </footer>
  )
}

export default Footer
