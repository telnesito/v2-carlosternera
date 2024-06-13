import React from 'react'
import TitleSection from '../components/TitleSection'
import ProjectTitle from '../components/projects/ProjectTitle'
import ProjectDescription from '../components/projects/ProjectDescription'
import ProjectTechnologies from '../components/projects/ProjectTecnologies'
import Image from 'next/image'
import ProjectImage from '../components/projects/ProjectImage'
import { PROJECTS } from '../const/constantes'

const Projects = () => {
  return (
    <section className='flex items-center justify-center pt-[100px]'>

      <div className='w-[1100px]'>
        <TitleSection number={'03'} title={'Proyectos que he desarrollado'}></TitleSection>
        <div className='flex flex-col gap-[100px]'>

          {PROJECTS.map(({ alt, url, description, h, w, image, technologies, title }, index) => <div key={index} className={`flex ${index % 2 && "flex-row-reverse"} items-center pb-5 justify-center`}>

            <ProjectImage src={image} h={h} w={w} alt={alt} />
            <div className={`flex flex-col ${index % 2 ? "items-start text-left right-[-50px]" : "items-end text-right left-[-50px]"} relative  gap-4`}>
              <ProjectTitle url={url} title={title} />
              <ProjectDescription description={description} />
              <ProjectTechnologies technologies={technologies} />
            </div>
          </div>
          )}

        </div>
      </div>


    </section>
  )
}

export default Projects