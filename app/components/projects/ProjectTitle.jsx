import React from 'react'
import { firacode } from '@/app/const/constantes'
import Link from 'next/link'
const ProjectTitle = ({ title, url }) => {
  return (
    <div className='flex flex-col'>
      <p href={url} className={`${firacode.className} text-[13px] text-Green `}>Proyectos destacados</p>
      <Link target='_blank' href={url} className={` text-[22px] font-bold text-LightestSlate hover:text-Green transition-all `}>{title}</Link>
    </div>
  )
}

export default ProjectTitle