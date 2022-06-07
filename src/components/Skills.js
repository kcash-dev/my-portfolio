import React from 'react'

import { skills } from '../data';

export default function Skills() {
  return (
    <section id="skills">
      <div className="my-10 px-10 py-5 bg-black w-full">
        <div className="px-5">
          <h3 className="text-2xl font-bold text-white pb-5">
            Skills and Technologies
          </h3>
        </div>
        <div className="px-5 pb-5">
          <text className="text-white">
            Through my learning, I've continued to develop my knowledge of a variety of web development and mobile technologies.
            I've taken these technologies and applied them to a variety of projects I've worked on in my free time.
          </text>
        </div>
        <div className="flex flex-wrap align-center justify-center">
          { skills.map((skill) => (
            <div key={ skill } className="bg-green-400 p-5 m-2 rounded lg:w-3/5 md:w-4/5 sm:w-full hover:scale-105 hover:bg-white hover:text-green-400">
              <div className="flex flex-row align-center">
                <text className="text-2xl px-5">{ skill.icon }</text>
                <text className="font-medium">{ skill.name }</text>
              </div>
            </div>
          )) }
        </div>
      </div>
    </section>
  )
}
