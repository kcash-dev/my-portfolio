import React from 'react'
import { Link, Outlet } from 'react-router-dom'

//Data
import { projects } from '../data'

function OtherProjects() {
  return (
    <div className="my-10 px-10">
        <h3 className="text-lg font-bold">
            Other Projects
        </h3>
        <div className="flex flex-row flex-wrap">
            { projects.map((project) => (
                <div key={ project.name } className="lg:w-5/12 md:w-full sm:w-full bg-gray-200 m-1 rounded">
                    <h4 className="text-md font-bold p-5">
                        { project.name }
                    </h4>
                    <img 
                        src={ project.picture }
                        alt="Project sample"
                        className="w-2/3 mx-auto rounded"
                    />
                    <div className="p-5 mx-auto">
                        <text>
                            { project.shortenedDescription }
                        </text>
                    </div>
                    <nav className="p-5">
                        <Link className="underline" to={ project.link }>Learn More</Link>
                    </nav>
                    <Outlet />
                </div>
            )) }
        </div>
    </div>
  )
}

export default OtherProjects