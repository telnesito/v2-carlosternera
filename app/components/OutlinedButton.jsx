import React from 'react'
import { firacode } from '../const/constantes';
const OutlinedButton = ({ texto, size = 'small' }) => {

  let style = ` hover:-translate-y-1 hover:-translate-x-1 transition-all duration-300 hover:shadow-HoverBtns hover:shadow-Green w-3/12 border-[1px] pl-4 pr-4 rounded text-[13px] border-Green text-Green ${firacode.className}`

  if (size === 'medium') {
    style += ' pt-4 pb-4';
  } else if (size === 'small') {
    style += ' pt-2 pb-2';

  }

  return (
    <button className={style}>{texto}</button>
  )
}

export default OutlinedButton