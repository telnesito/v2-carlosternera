import React from 'react'
import Image from 'next/image'
const Logo = () => {
  return (
    <Image width={40} height={40} className='transition-all hover:-translate-x-1 hover:-translate-y-1 hover:drop-shadow-HoverLogo' alt='Logo de Carlos Ternera' src={'logotelne.svg'}></Image>
  )
}

// hover:-translate-y-1 hover:-translate-x-1 transition-all duration-300

export default Logo