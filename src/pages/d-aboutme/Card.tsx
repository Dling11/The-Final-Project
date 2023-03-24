import { list } from 'postcss';
import React from 'react'

type Props = {
   icon: JSX.Element;
   title: string;
   desc: string;
}

const Card = ({ icon, title, desc }: Props) => {
  return (
    <div className='bg-white p-8 border-2 border-solid border-transparent rounded-3xl hover:border-white transition-all duration-500 hover:bg-transparent flex items-center justify-center flex-col gap-[0.5rem] hover:-translate-y-2'>
      <span className='text-2xl w-fit'>
         {icon}
      </span>
      <h5 className='font-semibold mt-[.6rem]'>{title}</h5>
      <small>{desc}</small>
    </div>
  )
}

export default Card