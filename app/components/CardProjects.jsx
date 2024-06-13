import Link from 'next/link'
import React from 'react'
import { firacode } from '../const/constantes'
const CardProjects = ({ title, url, description, technologies }) => (
  <div className='bg-Lightnavy mb-5 relative transition-transform hover:-translate-y-2 hover:transition-all p-5 max-w-[350px] min-w-[350px] h-auto flex flex-col gap-3'>
    <div className='flex items-center justify-between'>
      <svg class="h-10 w-10 text-Green" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" /></svg>
      <Link href={url} target='_blank'>
        <svg class="h-5 w-5 text-White" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
      </Link>
    </div>

    <Link className='text-LightSlate mt-5 text-[18px] font-bold hover:text-Green' href={url} target='_blank'>
      {title}
    </Link>
    <p className='text-[15px]  max-h-[150px] min-h-[150px] text-Slate'>
      {description}

    </p>

    <ul className='flex flex-wrap gap-2'>
      {technologies.map((el, index) => <li className={`${firacode.className} text-[12px] text-Slate`} key={index}>
        {el}
      </li>)}
    </ul>
  </div>
)

export default CardProjects