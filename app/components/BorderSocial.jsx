import React from 'react'

const BorderSocial = ({ social }) => {
  return (
    <div className='fixed right-[40px] w-[40px] h-auto bottom-[300px] rotate-90 left-auto'>
      <div className='flex col items-center h-auto relative'>
        <p className='text-LightSlate flex after:w-[90px] after:h-[1px] after:content-[""] after:m-auto gap-5 after:block after:bg-LightSlate'>
          {social}
        </p>
      </div>
    </div>
  )
}

export default BorderSocial