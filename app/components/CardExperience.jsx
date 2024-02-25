import React from 'react'
import { firacode } from '../const/constantes'
const CardExperience = ({ experience }) => {

  console.log(experience)
  return (
    <div>
      <div className='font-semibold text-[18px]'>
        <h3 className='text-LightestSlate '>{experience.position} en
          <span className='text-Green ml-1 '>{experience.company}</span>
        </h3>
      </div>
      <p className={`text-LightSlate mb-[25px]  ${firacode.className} text-[14px]`}>{experience.time}</p>
      <ul className='w-full list-none p-0 m-0 '>
        {
          experience.responsability.map((item, index) => <li
            className='text-Slate text-[14px] flex ml-[30px] pb-[10px] 
              before:content-["▹"] before:text-Green before:mr-5 
              '
            key={index}>
            {item}
          </li>)
        }

      </ul>
    </div>
  )
}

export default CardExperience