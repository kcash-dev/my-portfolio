import React from 'react'

export default function Navbar() {
  return (
    <div className="bg-black w-full py-5 flex flex-row items-center justify-between">
      <div className="mx-3">
        <a href="">
          <img 
            src='https://i.imgur.com/wAkyxqH.jpg'
            alt="K Cash Dev Logo"
            className="w-3/12"
          />
        </a>
      </div>
      <div>
        <a href="" className="text-white px-2 font-bold text-lg">About</a>
        <a href="" className="text-white px-2 font-bold text-lg">Skills</a>
        <a href="" className="text-white px-2 font-bold text-lg">Projects</a>
        <a href="" className="text-white px-2 font-bold text-lg">Contact</a>
      </div>
    </div>
  )
}
