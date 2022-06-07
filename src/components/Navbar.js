import React from 'react'

//React Router
import { Link, Outlet } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="bg-black w-full py-5 flex flex-row items-center justify-between">
      <div className="mx-3">
        <nav className="lg:p-5 md:p-3 sm:p-1">
          <Link className="underline" to="/">
            <img 
              src='https://i.imgur.com/wAkyxqH.jpg'
              alt="K Cash Dev Logo"
              className="lg:w-3/12 md:w-5/12 sm:w-9/12"
            />
          </Link>
        </nav>
        <Outlet />
      </div>
      <div>
        <a href="#about" className="text-white px-2 font-bold lg:text-lg md:text-md sm:text-sm">About</a>
        <a href="#skills" className="text-white px-2 font-bold lg:text-lg md:text-md sm:text-sm">Skills</a>
        <a href="#projects" className="text-white px-2 font-bold lg:text-lg md:text-md sm:text-sm">Projects</a>
        <a href="#contact" className="text-white px-2 font-bold lg:text-lg md:text-md sm:text-sm">Contact</a>
      </div>
    </div>
  )
}
