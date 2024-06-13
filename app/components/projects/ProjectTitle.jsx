import React from 'react'
import { firacode } from '@/app/const/constantes'

const ProjectTitle = ({ title }) => {
  return (
    <div className='flex flex-col'>
      <p className={`${firacode.className} text-[13px] text-Green `}>Proyectos importantes</p>
      <p className={` text-[22px] font-bold text-LightestSlate hover:text-Green transition-all `}>{title}</p>
    </div>
  )
}

export default ProjectTitle