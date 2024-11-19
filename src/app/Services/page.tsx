import Image from 'next/image'
import React from 'react'
import ServicesCard from '../HomeComponents/ServicesCard'
import { DarkButton } from '../HomeComponents/Button'
import Link from 'next/link'
import { FaBug } from 'react-icons/fa'

const page = () => {
  return (
    <section className=''>
      <div className='py-16 services px-[2rem]'>
        <div className='max-w-[70rem] gap-4 md:gap-0 m-auto grid grid-cols-1 md:grid-cols-[2fr_1fr]  relative'>
          <span>
            <h2 className='text-3xl md:text-4xl  lg:text-5xl text-white font-bold drop-shadow-[1px_1px_1px_rgba(0,0,0,0.2)]'>Our Services</h2>
            <p className='text-white text-xl lg:text-2xl font-bold leading-relaxed md:mt-2 drop-shadow-[1px_1px_1px_rgba(0,0,0,0.2)]'>We Can Take Care Of Any Pest Problem</p>
          </span>
          <main className='flex md:hidden items-center select-none order-first md:order-last'>
            <div className='bg-white p-10 rounded-full w-fit h-fit'>
              <FaBug size={45} color='var(--Primary)' />
            </div>
          </main>
        </div>
      </div>

      <main className='max-w-[70rem] m-auto py-[3rem] md:py-[5rem] px-[2rem]'>

        {/* Cards Section */}
        <main className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 '>
          <ServicesCard
            name='Spiders'
            para='Our team quickly removes spiders, leaving your home completely web-free and comfortable.'
            img='/item2.jpg'
            icon='/spiderRed.png' />

          <ServicesCard
            name='Cockroaches'
            para='From ants to cockroaches, we handle all small pests with ease. Not sure what it is? We&#39;ve got it covered!'
            img='/item1.jpg'
            icon='/cockroachRed.png' />

          <ServicesCard
            name='Flying Pest'
            para='Eliminate flying pests quickly with our expert treatments for a disturbance-free home.'
            img='/item6.jpg'
            icon='/flyRed.png' />

          <ServicesCard
            name='Ants'
            para='We offer fast, effective ant control, eliminating nests and preventing future infestations.'
            img='/item3.jpg'
            icon='/AntRed.png' />

          <ServicesCard
            name='Rodents'
            para='We offer swift rodent removal, sealing entry points and ensuring your home stays rodent-free.'
            img='/item4.jpg'
            icon='/mouseRed.png' />

          <ServicesCard
            name='Termites'
            para='Protect your home with our effective termite treatments that target infestations and prevent future damage.'
            img='/item5.jpg'
            icon='/termiteRed.png' />

          <ServicesCard
            name='Raccoons'
            para='Quickly remove raccoons from your property with our reliable, humane pest control services.'
            img='/item7.jpg'
            icon='/racoonRed.png' />

          <ServicesCard
            name='Mosquitoes'
            para='Keep your home safe with our quick and effective mosquito control solution'
            img='/item8.jpg'
            icon='/mosquitoRed.png' />

          <ServicesCard
            name="Encapsulation"
            para="Protect your home from moisture with expert encapsulation for a safer, more secure space."
            img="/item9.jpg"
            icon="/shield2Red.png"
          />

          <ServicesCard
            name="Exclusion"
            para="Prevent rodent entry by sealing your home with durable wire barriers for long-lasting protection."
            img="/item10.jpg"
            icon="/repairRed.png"
          />
        </main>

        {/* Video Section */}
        <div className='mt-[4rem] md:my-[6rem] relative'>
          <h1 className=' font-semibold text-center md:text-start text-2xl xl:text-3xl text-black mb-4 md:mb-8'>Sample Termite Treatment</h1>
          <video
            src='/termiteControl3.mp4'
            className='w-full  h-[15rem] sm:h-[20rem] md:h-[25rem] lg:h-[30rem] bg-black'
            loop
            width='100%'
            height='100%'
            controls
          />
        </div>


        {/* Stamp Section */}
        <section className=" bg-white md:flex md:space-x-12 w-full mt-[3rem] md:mt-[4rem] items-center">
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
          <main className='flex justify-center items-center h-fit'>
            <div className="mt-4 md:mt-0 md:w-fit h-fit">
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
                Sustainable Pest Control Solutions
              </h1>
              <p className=" lg:text-lg text-black/80 mb-6">
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