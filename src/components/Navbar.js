import React from 'react'

//React Router
import { Link, Outlet } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="bg-black w-full py-5 flex flex-row items-center justify-between">
      <div className="mx-3">
        <nav className="p-5">
          <Link className="underline" to="/">
            <img 
              src='https://i.imgur.com/wAkyxqH.jpg'
              alt="K Cash Dev Logo"
              className="w-3/12"
            />
          </Link>
        </nav>
        <Outlet />
      </div>
      <div>
        <a href="#about" className="text-white px-2 font-bold text-lg">About</a>
        <a href="#skills" className="text-white px-2 font-bold text-lg">Skills</a>
        <a href="#projects" className="text-white px-2 font-bold text-lg">Projects</a>
        <a href="#contact" className="text-white px-2 font-bold text-lg">Contact</a>
      </div>
    </div>
  )
}
