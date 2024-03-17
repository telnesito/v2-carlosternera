import React from 'react'
import TitleSection from '../components/TitleSection'
import { HABILITIES } from '../const/constantes'
import Image from 'next/image'


const AboutMe = () => {
  return (
    <section className='flex items-center justify-center pt-[100px]'>
      <div className='w-[900px]'>
        <TitleSection number={'02'} title={'Sobre mi'}></TitleSection>

        <div className='flex gap-[50px]'>
          <div className='text-LightSlate  flex flex-col gap-10'>
            <p>
              Hola! Mi nombre es Carlos Ternera y soy ingeniero en sistemas. Actualmente estoy trabajando en CianCoders como programador frontend de forma remota. <br /> <br />

              Mi interés en el desarrollo web comenzó hace unos años, cuando decidí adentrarme en la creación de aplicaciones web. Desde entonces, he tenido la oportunidad de trabajar en diversos proyectos y aprender nuevas tecnologías. Gracias a esto he participado en varias competencias de desarrollo de software y de proyectos en donde he logrado obtener multiples reconocimientos.
              <br /> <br />
              El ultimo proyecto personal en el que he trabajado ha sido en una plataforma educativa estilo Platzi utilizando Next.js y Python
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