import { CalendarRange, ContactRound, House, ShieldCheck, ShieldHalf, Target } from 'lucide-react'
import React from 'react'
import AboutCard from './AboutCard'


const About = () => {
  return (
    <section className='grid place-items-center py-[4rem] px-[2rem] md:px-10'>
      <main className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 max-w-[70rem] gap-y-10 gap-x-16'>

        <AboutCard Icon={ContactRound} title={"Family Run"} para='Don&#x27;t get swaggled by the big box exterminators, let us take care of your family'/>

        <AboutCard Icon={Target} title={"Precision"} para='You won&#x27;t even know we were there, except there will be a little more room and a few less occupants'/>

        <AboutCard Icon={ShieldCheck} title={"Certified Technicians"} para='All of our technicians are certified and have many hours of experience.'/>

        <AboutCard Icon={ShieldHalf} title={"Take Care Of It All"} para='We can take care of everything from flies to raccoons and large animals.'/>

        <AboutCard Icon={CalendarRange} title={"On Your Schedule"} para='We&#39;ll work with you to schedule the best time for home care, keeping you worry-free with regular service.'/>
        
        <AboutCard Icon={House} title={"Child and Pet Friendly"} para='No need to worry about harsh chemicals—our green pest solutions are safe for your family.'/>

      </main>
    </section >
  )
}

export default About