import React from 'react'
import PersonalCard from '../HomeComponents/PersonalCard'

const page = () => {
  return (
    <section className=''>
      {/* Hero Section */}
      <div className='py-[4rem] services px-[2rem]'>
        <div className='max-w-[70rem] gap-4 md:gap-0 m-auto grid grid-cols-1 md:grid-cols-[2fr_1fr]  relative'>
          <span>
            <h2 className='text-3xl md:text-4xl  lg:text-5xl text-white font-bold drop-shadow-[1px_1px_1px_rgba(0,0,0,0.2)]'>Our Team</h2>
            <p className='text-white text-xl lg:text-2xl font-bold leading-relaxed md:mt-2 drop-shadow-[1px_1px_1px_rgba(0,0,0,0.2)]'>Meet the founders behind our pest control solutions.</p>
          </span>
          <main className='flex md:hidden items-center select-none order-first md:order-last'>
            <div className='bg-white p-10 rounded-full w-fit h-fit'>
              <img src="/bug2.png" className='w-[3rem] opacity-90' />
            </div>
          </main>
        </div>
      </div>

      {/* Card Section */}
      <main className='px-[2rem] py-[6rem] '>
        <main className='max-w-[70rem] m-auto flex flex-col gap-20'>

          <PersonalCard name="Henry Grimes" para='In the early 90s, Henry Grimes founded American Hi Tec and shared his pest control expertise with his son, Bubba, who now plays a key role and will continue the family legacy in the business.' img='/PersonalImg2.png' position='Owner' />

          <PersonalCard name={`HENRY "BUBBA" GRIMES`} para="Henry Grimes&#39; son, Bubba, is our lead technician and your direct point of contact. He&#39;s here to answer any questions and ensure you feel informed and confident throughout the process." img='/PersonalImg5.png' position='Lead Technician' />
          
          <PersonalCard name="Deborah Grimes" para='Deborah Grimes, wife of owner Henry Grimes, plays a key role in managing operations to ensure the smooth running of the business.' img='/PersonalImg3.png' position='Co-Manager' />

          <PersonalCard name="Stephanie Byrd-Grimes" para="Stephanie, wife of Henry 'Bubba' Grimes Jr., plays a key role in managing appointment scheduling and bookkeeping for the company." img='/PersonalImg4.png' position='Office Staff' />





        </main>
      </main>
    </section>
  )
}

export default page