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
        <TitleSection number={'02'} title={'Proyectos donde he trabajado!'}></TitleSection>
        <div className='flex flex-col gap-[100px]'>

          {PROJECTS.map(({ alt, description, image, technologies, title }, index) => <div key={index} className={`flex ${index % 2 && "flex-row-reverse"} items-center pb-5 justify-center`}>

            <ProjectImage src={'finappchat.svg'} alt={'Imagen de finapp'} />
            <div className={`flex flex-col ${index % 2 ? "items-start text-left right-[-50px]" : "items-end text-right left-[-50px]"} relative  gap-4`}>
              <ProjectTitle title={'Finapp: Agenda y asistente financiero'} />
              <ProjectDescription description={"Aplicación web con inteligencia artificial para gestionar tus finanzas personales. Interfaz optimizada para dispositivos móviles y chatbot que ofrece recomendaciones personalizadas"} />
              <ProjectTechnologies technologies={["HTML", "CSS", "JavaScript", "Reactjs", "Nextjs", "Firebase", "Gemini API"]} />
            </div>
          </div>
          )}

        </div>
      </div>


    </section>
  )
}

export default Projects