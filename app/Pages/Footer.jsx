import React from 'react'
import { firacode } from '../const/constantes'
const Footer = () => {
  return (
    <footer className='flex flex-col items-center pb-6 justify-center mt-[200px]'>

      <p className={`hover:text-Green cursor-pointer text-LightSlate  ${firacode.className} text-[12px]  `}>Desarrollado por Carlos Ternera</p>
      <p className={`hover:text-Green cursor-pointer text-LightSlate  ${firacode.className} text-[12px]  `}>Inspirado en el portafolio de Brittany Chiang</p>


    </footer>
  )
}

export default Footer