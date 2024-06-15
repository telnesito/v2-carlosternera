'use client'
import React from 'react'
import { firacode } from '../const/constantes'
import OutlinedButton from '../components/OutlinedButton'
import { useRouter } from 'next/navigation'
const Hero = () => {
  const router = useRouter()

  return (
    <section id={'#inicio'} className='text-White h-[80vh] flex  flex-col items-center justify-center '>
      <div className={`w-[1000px] flex flex-col `}>
        <p className={`text-Green text-[16px] mb-[30px] ${firacode.className} `}>Hola, mi nombre es</p>
        <div className={`text-[80px] text-left flex flex-col mb-[20px]  font-bold leading-[80px]`}>
          <h2 className='m-0 text-LightestSlate' >Carlos Ternera.</h2>
          <h1 className='text-Slate'>Desarrollador FullStack.</h1>
        </div>
        <p className='w-7/12 mb-[50px] text-Slate'>Ingeniero en sistemas con +1 año de experiencia profesional especializado en el desarrollo y mantenimiento de sitios web. Me adapto a cualquier equipo de desarrollo proactivo y <span className='text-Green'>comunicativo.</span>
        </p>
        <div>

          <OutlinedButton onClick={() => router.push('#experiencia')} size='medium' texto={'Conoce mi experiencia!'} />

        </div>
      </div>
    </section>
  )
}

export default Hero