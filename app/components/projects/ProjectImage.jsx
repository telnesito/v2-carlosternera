import Image from 'next/image'
import React from 'react'

const ProjectImage = ({ src, alt, w, h }) => {
  return (
    <div className='flex gap-3  transition-all bg-LightestNavy hover:transition-all p-5 rounded'>
      <Image
        className=" rounded-lg  active:scale-110 hover:cursor-zoom-in transition-all hover:transition-all backdrop-blur-0"
        width={w}
        height={h}
        src={src}
        alt={alt}
      />
    </div>
  )
}

export default ProjectImage