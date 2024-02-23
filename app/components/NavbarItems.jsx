import React from 'react'

const NavbarItems = ({ number, text }) => {
  return (
    <div>

      <p className='text-White text-[13px] font-firacode'>
        <span className='text-Green mr-1'>{number}.</span>
        {text}
      </p>
    </div>
  )
}

export default NavbarItems