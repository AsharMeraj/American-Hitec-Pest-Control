'use client'
import 'react-multi-carousel/lib/styles.css';
import React from 'react'
import Carousel from 'react-multi-carousel'
import ServicesCard from './HeroServicesCard';

const Services = () => {
    const Responsive = {

        desktop: {
            breakpoint: { max: 3000, min: 878 },
            items: 3
        },
        SmallScreen: {
            breakpoint: { max: 878, min: 646 },
            items: 2
        },
        tablet: {
            breakpoint: { max: 646, min: 0 },
            items: 1
        }

    }
    return (
        <section className=' px-[2rem] pt-2 md:pt-[2rem] pb-[4rem] md:pb-[8rem] '>
            <main className='max-w-[70rem] m-auto'>
                <h2 className='text-2xl lg:text-3xl text-center md:text-start font-semibold md:pl-[1rem]  mb-[2rem] md:mb-[4rem]'>We Get Them All</h2>
                <Carousel
                    responsive={Responsive}
                    containerClass='z-0'
                    infinite={true}>
                        <ServicesCard img='/bedbug.png'/>
                        <ServicesCard img='/heroService5.png'/>
                        <ServicesCard img='/termites.png'/>
                        <ServicesCard img='/heroService6.png'/>
                        <ServicesCard img='/cockroach.png'/>
                        <ServicesCard img='/heroService7.png'/>
                        <ServicesCard img='/carpenterAnt.png'/>
                        <ServicesCard img='/heroService8.png'/>
                        <ServicesCard img='/heroService9.png'/>
                        <ServicesCard img='/heroService10.png'/>
                        <ServicesCard img='/heroService11.png'/>
                        <ServicesCard img='/heroService12.png'/>
                        <ServicesCard img='/heroService13.png'/>
                        <ServicesCard img='/heroService14.png'/>
                        <ServicesCard img='/heroService15.png'/>
                        <ServicesCard img='/heroService16.png'/>
                        <ServicesCard img='/heroService17.png'/>
                </Carousel>
                
            </main>
        </section>
    )
}

export default Services