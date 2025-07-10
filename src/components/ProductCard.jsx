import React from 'react'
import { star } from '../assets/icons'

const ProductCard = ({name, price ,imgURL}) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full'>
      <img src={imgURL} alt={name} className='w-[280px]  h-[280px]' />
      <div className='mt-8 flex justify-start gap-2.5'>
        <img src={star} alt="" width={24} height={24} />
        <p className='font-montserrat text-xl leading-normal text-slate-gray'>(4.6)</p>
        
      </div>
      <div><h3 className='text-xl font-palanquin font-bold mt-2'>{name}</h3>
        <p className='text-lg font-montserrat text-slate-gray mt-2'>{price}</p></div>
    </div>
  )
}

export default ProductCard
