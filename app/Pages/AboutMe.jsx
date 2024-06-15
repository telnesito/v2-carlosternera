import React from 'react'
import TitleSection from '../components/TitleSection'
import { HABILITIES } from '../const/constantes'


const AboutMe = () => {
  return (
    <section id="conoceme" className='flex items-center justify-center pb-[100px] pt-[100px]'>
      <div className='w-[900px]'>
        <TitleSection number={'02'} title={'Sobre mi'}></TitleSection>

        <div className='flex gap-[50px]'>
          <div className='text-LightSlate  flex flex-col gap-10'>
            <p>
              Hola! Mi nombre es Carlos Ternera y soy ingeniero en sistemas. Actualmente estoy trabajando en <span className='text-Green'>
                CianCoders</span>  como programador frontend de forma remota. <br /> <br />

              Mi interés en el desarrollo web comenzó hace unos años, cuando decidí adentrarme en la creación de aplicaciones web. Desde entonces, <span className='text-Green'>he tenido la oportunidad de trabajar en diversos proyectos y aprender nuevas tecnologías</span>. Gracias a esto he participado en varias competencias de desarrollo de software y de proyectos en donde he logrado obtener <span className='text-Green'>multiples reconocimientos</span>.
              <br /> <br />
              El ultimo proyecto personal en el que he trabajado ha sido en una plataforma educativa estilo Platzi utilizando <span className='text-Green'>Next.js y Python</span>.
              <br /><br />
              Aqui algunas tecnologias en las que he programado ultimamente:</p>
            <ul className='flex gap-2 list-none w-[700px] flex-wrap'>
              {HABILITIES.map((technologie, index) => <li className='w-[300px] text-Slate text-[14px] flex ml-[30px] pb-[10px] 
                before:content-["▹"] before:text-Green before:mr-5 ' key={index}>{technologie}</li>)}
            </ul>
          </div>

        </div>
      </div>


    </section>
  )
}

export default AboutMe