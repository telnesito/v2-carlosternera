import React from 'react'
import TitleSection from '../components/TitleSection'
import { firacode } from '../const/constantes'
import OutlinedButton from '../components/OutlinedButton'

const GetInTouch = () => {
  return (
    <div className='flex flex-col gap-[20px] items-center pb-6 justify-center mt-[200px]'>

      <p className={` text-Green  ${firacode.className} text-[16px]  `}>04. ¿Qué sigue?</p>

      <p className='text-[50px] text-center font-bold text-LightSlate '>Get In Touch</p>

      <p className='text-Slate w-[550px] text-center' >Actualmente estoy buscando nuevas oportunidades que me ayuden a desarrollar mi carrera profesional. Si tienes alguna propuesta interesante, ¡no dudes en contactarme!</p>
      <div className='w-[500px] mt-[30px] flex items-center justify-center'>
        <OutlinedButton texto={"Contactar"} size='medium' />
      </div>
    </div>
  )
}

export default GetInTouch