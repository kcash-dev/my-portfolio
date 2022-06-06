import React from 'react'

import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function BottomNav() {
  return (
    <div className="w-full border-t-2 border-white flex flex-row justify-between items-center py-5 px-5 bg-black">
      <div>
        <a href="">
          <img 
            src='https://i.imgur.com/wAkyxqH.jpg'
            alt="K Cash Dev Logo"
            className="w-2/12"
          />
        </a>
      </div>
      <div className="flex flex-row justify-evenly w-2/12">
        <a href="https://github.com/kcash-dev" target="_blank" rel="noreferrer">
          <text className="font-bold text-white text-3xl"><FaGithub /></text>
        </a>
        <a href="www.linkedin.com/in/kcashdev" target="_blank" rel="noreferrer">
          <text className="font-bold text-white text-3xl"><FaLinkedin /></text>
        </a>
      </div>
    </div>
  )
}
