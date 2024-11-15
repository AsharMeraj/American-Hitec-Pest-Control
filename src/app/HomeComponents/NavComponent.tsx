import Link from 'next/link'
import React, { Dispatch, SetStateAction } from 'react'
import { DarkButton } from './Button'
import { Menu } from 'lucide-react'
import { ImMail4 } from 'react-icons/im'

type PropType = {
    setShowMobileNav: Dispatch<SetStateAction<boolean>>
}


const NavComponent = ({ setShowMobileNav }: PropType) => {
    return (
        <div id='navbar' className='z-20 '>
            <nav className={`z-50 relative w-full flex justify-center bg-white items-center h-[6rem] shadow-lg shadow-black/15`}>
                <div className='w-[70rem] mx-4 sm:mx-10 flex items-center justify-between'>
                    <img alt='/' src={'/logo3.png'} className='w-[15rem] min-[820px]:w-[15rem] min-[900px]:w-[18rem] xl:w-[20rem] ' />
                    <div>
                        <div id='namebox' className='hidden md:flex items-center justify-between gap-2 min-[900px]:gap-4 lg:gap-7'>
                            <Link href='/' className='names cursor-pointer text-md hover:text-[--Secondary] transition-all font-semibold text-black tracking-wide'>
                                <h2>Home</h2>
                            </Link>
                            <Link href='/Services' className='names cursor-pointer text-md hover:text-[--Secondary] transition-all font-semibold text-black tracking-wide'>
                                <h2>Services</h2>
                            </Link>
                            <Link href='/Personal' className='names cursor-pointer text-md hover:text-[--Secondary] transition-all font-semibold text-black tracking-wide'>
                                <h2>Personal</h2>
                            </Link>
                            <Link href='/Contact' className='names cursor-pointer text-md hover:text-[--Secondary] transition-all font-semibold text-black tracking-wide'>
                                <h2>Contact</h2>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <span className='hidden md:flex items-center gap-4'>
                            <a href="tel:8432248976">
                                <DarkButton name="Schedule a Call" />
                            </a>
                            <a href='mailto:americamhitec@yahoo.com' className='hover:opacity-80 cursor-pointer'>
                                <ImMail4 color='var(--Primary)' size={35} />
                            </a>
                        </span>
                        <div className='md:hidden' onClick={() => setShowMobileNav(true)}>
                            <Menu color="var(--Primary)" size={30} />
                        </div>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavComponent