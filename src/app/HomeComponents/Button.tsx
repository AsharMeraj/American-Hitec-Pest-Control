import React from 'react'

type PropType = {
    name: string,
}

export const DarkButton = ({ name }: PropType) => {
    return (
        <main className='text-white w-full bg-[--Primary] px-6 py-3 rounded-full hover:opacity-80 font-semibold cursor-pointer '>
            {name}
        </main>
    );
}

export const LightButton = ({ name }: PropType) => {
    return (
        <main className='text-white w-full border-2 border-white px-6 py-3 rounded-full hover:text-[--Primary] hover:bg-white text-lg font-semibold cursor-pointer text-center'>
            {name}
        </main>
    );
}

