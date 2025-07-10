import React from 'react'

function ServiceCard({imgURL, label, subtext}) {
  return (
    <div className='sm:w-[350px] flex-wrap  rounded-[20px] shadow-xl px-10 py-16'>
      <div className=' flex w-11 h-11 justify-center items-center bg-coral-red rounded-full'>
 <img src={imgURL} height={24} width={24} />
      </div>
      <h3 className='mt-5 font-palanquin text-3xl leading-normal font-bold'>{label}</h3>
      <p className=' mt-3 break-words font-montserrat text-lg text-slate-gray'>{subtext}</p>
    </div>
  )
}

export default ServiceCard
