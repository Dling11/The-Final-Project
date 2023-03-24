import React from 'react'

type Props = {
   name: string;
   description?: string;
   image: string
}

function MyWebsite({ name, description, image }: Props) { 
   const overlayStyles = `p-5 absolute z-30 flex h-[380px] w-[450px] flex-col items-center justify-center whitespace-normal bg-primary-theme text-center text-white opacity-0 transition duration-500 hover:opacity-90`;

  return (
    <li className="relative mx-5 inline-block h-[380px] w-[450px]">
      <div className={overlayStyles}>
         <p className="cursor-default text-2xl">{name}</p>
         <p className="cursor-default mt-5 mb-[6.5rem]">{description}</p>
      </div>
      <img src={image} alt={`${image}`} />
    </li>
  )
}

export default MyWebsite