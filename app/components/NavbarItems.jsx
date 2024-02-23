import React from 'react'
import { firacode } from '../const/constantes'
const NavbarItems = ({ number, text }) => {

  return (
    <div>

      <p className={`text-LightSlate ${firacode.className} text-[13px] hover:text-Green transition-colors duration-500 hover:cursor-pointer`}>
        <span className='text-Green mr-1 '>{number}.</span>
        {text}
      </p>
    </div>
  )
}

export default NavbarItems