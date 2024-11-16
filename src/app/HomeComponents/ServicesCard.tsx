import Image from 'next/image'
import React from 'react'

type PropType = {
  name: string,
  para: string,
  img: string,
  icon: string
}

const ServicesCard = ({ name, para, img, icon }: PropType) => {
  return (
    <section className='grid grid-rows-[auto,auto] shadow-xl shadow-black/5 rounded-t-[1rem]'>
      <main className='relative'>
        <Image alt='/' width={1000} height={1000} src={img} className='w-full h-full rounded-t-[1rem]' />
        <Image alt='' src={icon} width={90} height={90} className='absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-5 rounded-full' />
      </main>
      <main className='h-fit'>
        <h2 className='text-2xl font-semibold w-full text-center mt-12 text-[--Primary]'>{name}</h2>
        <p className='md:text-lg text-center mb-8 mt-1 px-4 md:px-8 text-black/80'>{para}</p>
      </main>
    </section>

  )
}

export default ServicesCard