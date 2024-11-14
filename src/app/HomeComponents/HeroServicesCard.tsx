import Image from 'next/image'
import React from 'react'

type PropType = {
    img: string
}

const Slider = (props: PropType) => {
    return (
        <div id='WorkCard' className='relative cursor-pointer bg-black/5'>
            <div>
                <Image width={400} height={400} draggable={false} id='WorkCardImage' src={props.img} alt="" className='object-cover  md:w-[20rem] h-[18rem] lg:h-[20rem] -z-10 select-none ' />
                <h2 id='CheckOutWorkCard' className='text-black font-bold absolute  z-50 h-fit w-fit m-auto text-center top-[8rem] left-[5rem] opacity-0'>Check Out</h2>
            </div>
        </div>
    )
}

export default Slider