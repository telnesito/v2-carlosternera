import Image from 'next/image'
import React from 'react'

const ProjectImage = ({ src, alt, w, h }) => {
  return (
    <div className='flex gap-3 transition-all bg-Lightnavy hover:bg-LightestNavy hover:transition-all p-5 rounded'>
      <Image
        className="bg-Lightnavy rounded-lg"
        width={600}
        height={600}
        src={src}
        alt={alt}
      />
    </div>
  )
}

export default ProjectImage