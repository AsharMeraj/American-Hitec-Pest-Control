import Image from 'next/image'
import React from 'react'

type PropType = {
    name: string,
    para: string,
    img: string,
    position: string
}

const PersonalCard = ({ name, para, img, position }: PropType) => {
    return (
        <div className='flex flex-col md:flex-row items-center md:shadow-lg md:shadow-black/5'>
            <div className='w-fit md:w-auto bg-black/5'>
                <Image src={img} alt='/' width={800} height={800} className='h-[20rem] md:h-[18rem] lg:h-[20rem] w-[15rem] md:w-[20rem] object-cover' />
            </div>
            <div className={`w-full flex  items-center `}>
                <div className={`max-w-[45rem] md:ml-8 mt-4 md:mt-0`}>
                    <h2 className={`text-xl md:2xl xl:text-3xl font-extrabold uppercase text-center md:text-start text-[--Primary]`}>{name}</h2>
                    <h2 className={`text-xl md:text-xl font-bold text-[--Secondary] md:mt-1 text-center md:text-start`}>{position}</h2>
                    <p className={`text-black/80  md:text-lg mt-2 md:mt-4 text-center md:text-start`}>{para}</p>
                </div>
            </div>
        </div>

    )
}

export default PersonalCard