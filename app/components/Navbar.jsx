import React from 'react'
import { NAVBARITEMS } from '../const/constantes'
import NavbarItems from './NavbarItems'
import OutlinedButton from './OutlinedButton'
import Logo from './Logo'
const Navbar = () => {
  return (
    <header className='h-[80px] z-40 pl-[20px]  bg-Navy pr-[20px] fixed flex items-center w-full top-0'>
      <nav className='flex justify-between w-full p-5'>
        <div className='flex gap-5 items-center'>
          <Logo />
        </div>
        <div className='flex gap-8 items-center'>
          {
            NAVBARITEMS.map(({ number, text }, index) => <NavbarItems key={index} number={number} text={text} />)
          }
          <a className={'w-[100]'} href="/carlos-ternera-fullstack.pdf" download>
            <OutlinedButton texto={'Curriculum'} />
          </a>

        </div>
      </nav>
    </header>

  )
}

export default Navbar