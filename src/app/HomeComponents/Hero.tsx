import React from 'react'
import { LightButton } from './Button'
import Link from 'next/link'
import { FaBug } from 'react-icons/fa'

const Hero = () => {
  return (
    <section className='w-full background h-[calc(100vh-10rem)] md:h-full px-2 md:px-10  md:py-[8rem] grid place-items-center'>
      <main className='w-full gap-4 md:gap-8 grid grid-rows-[0.5fr_1fr] md:grid-rows-1 md:grid-cols-[3fr_1fr] lg:grid-cols-[2fr_1fr] max-w-[70rem] z-0 mb-10 md:mb-0'>
        <main className='flex flex-col gap-0 md:gap-6 justify-center items-center md:items-start'>
          <h2 className='text-white drop-shadow-[1px_1px_1px_rgba(0,0,0,0.2)] text-3xl md:text-4xl  lg:text-5xl font-bold leading-relaxed w-fit text-center'>Call someone who cares!</h2>
          <h1 className='text-white text-xl lg:text-2xl font-semibold leading-relaxed max-w-[30rem] text-center md:text-start drop-shadow-[1px_1px_1px_rgba(0,0,0,0.2)]'>Learn more about our eco-friendly pest control services.</h1>
          <main className='mt-4 md:mt-2 flex flex-col md:flex-row gap-4 justify-center items-center'>

            <div className='w-fit md:order-first '>
              <Link href={'/Contact'}>
                <LightButton name="Contact Us" />
              </Link>
            </div>
          </main>
        </main>
        <main className='flex md:hidden justify-center items-center select-none order-first md:order-last'>
          <div className='bg-white p-12 rounded-full w-fit h-fit'>
          <FaBug size={45} color='var(--Primary)'/>
          </div>
        </main>
      </main>
    </section >
  )
}

export default Hero