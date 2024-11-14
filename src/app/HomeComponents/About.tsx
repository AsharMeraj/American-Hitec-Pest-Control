import { CalendarRange, ContactRound, House, ShieldCheck, ShieldHalf, Target } from 'lucide-react'
import React from 'react'


const About = () => {
  return (
    <section className='grid place-items-center py-[4rem] px-[2rem] md:px-10'>
      <main className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 max-w-[70rem] gap-y-10 gap-x-16'>
        <div className='p-6 md:p-10 shadow-lg shadow-black/5 hover:shadow-black/15 duration-200 rounded-2xl'>
          <span className='flex flex-col gap-4'>
          <ContactRound color="var(--Primary)" size={40} />
            <h2 className='text-[1.3rem] md:text-2xl font-semibold'>Family Run</h2>
          </span>
          <p className='md:text-lg  mt-2 text-black/80'>Don&#x27;t get swaggled by the big box exterminators, let us take care of your family </p>
        </div>
        <div className='p-6 md:p-10 shadow-lg shadow-black/5 hover:shadow-black/15 duration-200 rounded-2xl'>
          <span className='flex flex-col gap-4'>
            <Target color="var(--Primary)" size={40} />
            <h2 className='text-[1.3rem] md:text-2xl font-semibold'>Precision</h2>
          </span>
          <p className='md:text-lg  mt-2 text-black/80'>You won&#x27;t even know we were there, except there will be a little more room and a few less occupants</p>
        </div>
        <div className='p-6 md:p-10 shadow-lg shadow-black/5 hover:shadow-black/15 duration-200 rounded-2xl'>
          <span className='flex flex-col gap-4'>
            <ShieldCheck color="var(--Primary)" size={43} />
            <h2 className='text-[1.3rem] md:text-2xl font-semibold'>Certified Technicians</h2>
          </span>
          <p className='md:text-lg  mt-2 text-black/80'>All of our technicians are certified and have many hours of experience.</p>
        </div>
        <div className='p-6 md:p-10 shadow-lg shadow-black/5 hover:shadow-black/15 duration-200 rounded-2xl'>
          <span className='flex flex-col gap-4'>
            <ShieldHalf color="var(--Primary)" size={40} />
            <h2 className='text-[1.3rem] md:text-2xl font-semibold'>Take Care Of It All</h2>
          </span>
          <p className='md:text-lg  mt-2 text-black/80'>We can take care of everything from flies to raccoons and large animals</p>
        </div>
        <div className='p-6 md:p-10 shadow-lg shadow-black/5 hover:shadow-black/15 duration-200 rounded-2xl'>
          <span className='flex flex-col gap-4'>
            <CalendarRange color="var(--Primary)" size={40} />
            <h2 className='text-[1.3rem] md:text-2xl font-semibold'>On Your Schedule</h2>
          </span>
          <p className='md:text-lg  mt-2 text-black/80'>We&#39;ll work with you to schedule the best time for home care, keeping you worry-free with regular service.</p>
        </div>
        <div className='p-6 md:p-10 shadow-lg shadow-black/5 hover:shadow-black/15 duration-200 rounded-2xl'>
          <span className='flex flex-col gap-4'>
            <House color="var(--Primary)" size={40} />
            <h2 className='text-[1.3rem] md:text-2xl font-semibold'>Child and Pet Friendly</h2>
          </span>
          <p className='md:text-lg  mt-2 text-black/80'>No need to worry about harsh chemicals—our green pest solutions are safe for your family.</p>
        </div>
      </main>
    </section >
  )
}

export default About