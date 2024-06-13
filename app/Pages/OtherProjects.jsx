import React from 'react'
import CardProjects from '../components/CardProjects'
import { ALLPROJECTS } from '../const/constantes'

const OtherProjects = () => {
  return (
    <section className='flex flex-col items-center justify-center pt-[200px]'>
      <p className={`text-LightSlate justify-center text-[25px] flex mb-[40px]  gap-5 items-center font-bold `}>
        Otros proyectos
      </p>
      <div className='flex w-[1100px] justify-center gap-5 flex-wrap'>
        {ALLPROJECTS.map(({ description, technologies, title, url }, index) => <CardProjects description={description} technologies={technologies} title={title} url={url} key={index} />)}


      </div>


    </section >
  )
}

export default OtherProjects