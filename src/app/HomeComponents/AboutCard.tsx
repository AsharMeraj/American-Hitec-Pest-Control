import React from 'react'
import { IconBaseProps } from 'react-icons'

type PropType = {
    Icon: React.ElementType<IconBaseProps>,
    title: String,
    para: string
}

const AboutCard = ({Icon, title, para}: PropType) => {
    return (
        <div className='p-6 md:p-10 shadow-lg shadow-black/5 hover:shadow-black/15 duration-200 rounded-2xl'>
            <span className='flex flex-col gap-4'>
                <Icon color="var(--Secondary)" size={40} />
                <h2 className='text-[1.3rem] md:text-2xl font-semibold text-[--Primary]'>{title}</h2>
            </span>
            <p className='md:text-base xl:text-lg mt-2 text-black'>{para}</p>
        </div>
    )
}

export default AboutCard