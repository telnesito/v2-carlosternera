import React from 'react'
import { firacode } from '../const/constantes'

const TitleSection = ({ title, number }) => {
  return (
    <div>
      <p className={`text-LightSlate text-[25px] flex gap-5 items-center font-bold after:w-[350px] after:h-[1px] after:content-[""]  after:block after:bg-LightestNavy`}>
        <span className={` text-Green  ${firacode.className} text-[20px]  `}>{number}.</span>
        {title}
      </p>
    </div>
  )
}

export default TitleSection