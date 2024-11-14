import Image from 'next/image'
import React from 'react'
import ServicesCard from '../HomeComponents/ServicesCard'
import { DarkButton } from '../HomeComponents/Button'
import Link from 'next/link'

const page = () => {
  return (
    <section className=''>
      <div className=' py-[4rem] services px-[2rem]'>
        <div className='max-w-[70rem] gap-4 md:gap-0 m-auto grid grid-cols-1 md:grid-cols-[2fr_1fr]  relative'>
          <span>
            <h2 className='text-[1.7rem] sm:text-3xl md:text-4xl  lg:text-5xl text-white font-bold drop-shadow-[1px_1px_1px_rgba(0,0,0,0.2)]'>Our Services</h2>
            <p className='text-white text-xl lg:text-2xl font-bold leading-relaxed md:mt-2 drop-shadow-[1px_1px_1px_rgba(0,0,0,0.2)]'>We Can Take Care Of Any Pest Problem</p>
          </span>
          <main className='flex md:hidden items-center select-none order-first md:order-last'>
            <div className='bg-white p-10 rounded-full w-fit h-fit'>
              <img src="/bug2.png" className='w-[3rem] opacity-90' />
            </div>
          </main>
        </div>
      </div>

      <main className='max-w-[70rem] m-auto py-[3rem] md:py-[5rem] px-[2rem]'>

        {/* Cards Section */}
        <main className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 '>
          <ServicesCard
            name='Flying Pest'
            para='Eliminate flying pests quickly with our expert treatments for a disturbance-free home.'
            img='/item6.jpg'
            icon='/flyIcon.png' />

          <ServicesCard
            name='Cockroaches'
            para='From ants to cockroaches, we handle all small pests with ease. Not sure what it is? We&#39;ve got it covered!'
            img='/item1.jpg'
            icon='/cockroachIcon.png' />

          <ServicesCard
            name='Spiders'
            para='Our team quickly removes spiders, leaving your home completely web-free and comfortable.'
            img='/item2.jpg'
            icon='/spiderIcon.png' />

          <ServicesCard
            name='Ants'
            para='We offer fast, effective ant control, eliminating nests and preventing future infestations.'
            img='/item3.jpg'
            icon='/AntIcon.png' />

          <ServicesCard
            name='Rodents'
            para='We offer swift rodent removal, sealing entry points and ensuring your home stays rodent-free.'
            img='/item4.jpg'
            icon='/mouseIcon.png' />

          <ServicesCard
            name='Termites'
            para='Protect your home with our effective termite treatments that target infestations and prevent future damage.'
            img='/item5.jpg'
            icon='/termiteIcon.png' />

          <ServicesCard
            name='Racoons'
            para='Quickly remove raccoons from your property with our reliable, humane pest control services.'
            img='/item7.jpg'
            icon='/racoonIcon.png' />

          <ServicesCard
            name='Bats'
            para='Bats can be a health risk, let us help you control them quickly to keep your home secure.'
            img='/item8.jpg'
            icon='/batIcon.png' />
        </main>

        {/* Video Section */}
        <div className='mt-[4rem] md:my-[6rem]'>
          <iframe className='w-full  h-[15rem] sm:h-[20rem] md:h-[25rem] lg:h-[30rem]' src="https://www.youtube.com/embed/Ws6BS7ccqjQ?si=4xFpuYij9FjHI2lM" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>


        {/* Stamp Section */}
        <section className=" bg-white md:flex md:space-x-12 w-full my-[2rem] md:my-[4rem] items-center">
          {/* Image and Badge */}
          <div className="relative w-full md:w-fit flex justify-center md:justify-start items-center">
            <Image
              src="/Stamp.png"
              alt="Eco-friendly Seal"
              width={600}
              height={600}
              className=" w-[50rem] "
            />
            <span className="absolute top-4 left-4 bg-[--Primary] text-white text-sm px-3 py-1 rounded-full font-semibold">
              Eco-Friendly
            </span>
          </div>

          {/* Content Section */}
          <main className='flex justify-center items-center h-fit'>
            <div className="mt-4 md:mt-0 md:w-fit h-fit">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">
                Sustainable Pest Control Solutions
              </h1>
              <p className="text-lg text-black/80 mb-6">
                Your home can be an ideal spot for many pests, from ants to rodents. American Hi Tec Pest Control offers guaranteed, eco-friendly solutions to eliminate even the toughest infestations. Our expert team provides safe, effective treatments, so you can enjoy a pest-free, comfortable home.
              </p>
              <button>
                <Link href={'/Personal'}>
                  <DarkButton name='Learn More' />
                </Link>
              </button>
            </div>
          </main>
        </section>
      </main>
    </section>
  )
}

export default page