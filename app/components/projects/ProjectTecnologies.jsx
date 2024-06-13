import React from 'react'

const ProjectTechnologies = ({ technologies }, index) => {
  return (
    <ul className='flex gap-4 p-2'>
      {technologies.map((technologie) => <ul key={index}>
        <li className='text-LightSlate text-[13px]'>{technologie}</li>
      </ul>)}
    </ul>
  )
}

export default ProjectTechnologies