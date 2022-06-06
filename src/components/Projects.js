import React from 'react'

import { projects } from '../data'

//React Router
import { Outlet, Link } from 'react-router-dom'

//Icons
import { FaGithub, FaTruckLoading } from "react-icons/fa";

export default function Projects() {
  return (
    <section id="projects">
      <div className="my-10 px-10 w-full">
        <div className="px-5">
          <h3 className="text-2xl font-bold pb-5">
            What I'm Working On
          </h3>
        </div>
        <div className="px-5 pb-5">
          <text>
            My mind doesn't like to sit still. Every minute, it feels like I'm thinking a thousand thoughts.
            Some of these are worthwhile, many don't deserve mentioning. However, I've derived many new ideas
            for projects as a result of my busy mind.
            <br />
            <br />
            So, here are a few of the projects that have come from this crazy thing I call my brain.
          </text>
        </div>
        <div className="flex flex-wrap w-full px-5 my-10">
          { projects.map((project) => (
            <div key={project} className="bg-black w-5/12 mx-auto my-5 p-5 text-center rounded hover:scale-105">
              <text className="text-white text-lg font-bold">{ project.name }</text>
              <br />
              <img
                src={ project.picture }
                alt="Project Screenshot"
                className="w-9/12 rounded mx-auto my-3"
              />
              <br />
              <div className="">
                <text className="text-white text-xs">{ project.description }</text>
              </div>
              { project.inProgress ? 
                <div className="flex flex-row w-1/2 mx-auto items-center rounded justify-center py-1 my-4">
                  <text className="text-2xl px-3 text-white"><FaTruckLoading /></text>
                  <text className="text-lg text-white">In progress</text>
                </div>
                :
                null
              }
              <div className="p-5 flex flex-col items-center justify-center">
                <nav>
                  <Link className="text-white underline" to={ project.link }>Learn More</Link>
                </nav>
                <Outlet />
                <div className="py-5">
                  <a href={ project.gitHubLink } rel="noreferrer" target="_blank" className="text-white text-4xl">
                    <FaGithub />
                  </a>
                </div>
              </div>
            </div>
          )) }
        </div>
      </div>
    </section>
  )
}
