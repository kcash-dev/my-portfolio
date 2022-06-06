import React from 'react'

function ProjectTechnologies({ technologies }) {
  return (
    <div>
      <h3 className="text-md font-bold underline">
        Technologies
      </h3>
      { technologies.map((technology) => (
        <div>
          <text>
              { technology }
          </text>
        </div>
      )) }
    </div>
  )
}

export default ProjectTechnologies