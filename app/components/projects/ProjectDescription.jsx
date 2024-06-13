import React from 'react'

const ProjectDescription = ({ description }) => {
  return (
    <div className='bg-Lightnavy p-[25px] w-[500px] text-LightSlate h-auto rounded'>
      <p className=' text-[15px]'>{description}
      </p>
    </div>
  )
}

export default ProjectDescription