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
    </div>
  )
}
