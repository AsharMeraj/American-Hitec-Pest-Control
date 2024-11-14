'use client';
import React from 'react'
import Link from 'next/link'
import { X } from 'lucide-react';
import { FaClipboardCheck, FaHome } from 'react-icons/fa';
import { IoIosCall, IoIosSend, IoMdMail } from 'react-icons/io';
type ChildType = {
    setShowMobileNav: React.Dispatch<React.SetStateAction<boolean>>
}

const MobileNavbar: React.FC<ChildType> = ({ setShowMobileNav }) => {
    return (
        <main className='flex items-center justify-center z-20 '>
            <div className='absolute h-[6rem] w-full top-0 flex justify-end items-center px-4'>

                <X onClick={() => { setShowMobileNav(false) }} color='var(--Primary)' size={30} />
            </div>
            <ul className='flex flex-col gap-8 items-center '>
                <li className='text-[15px] hover:opacity-80 items-center cursor-pointer select-none flex gap-3 w-full'>
                    <FaHome color='var(--Primary)' size={35} />
                    <Link className='tracking-wider text-[--Primary] cursor-pointer text-lg duration-300' onClick={() => { setShowMobileNav(false) }} href='/' >Home</Link>
                </li>
                <li className='text-[15px] hover:opacity-80 items-center cursor-pointer select-none flex gap-3 w-full'>
                    <FaClipboardCheck color='var(--Primary)' size={35} />
                    <Link className='tracking-wider text-[--Primary] cursor-pointer text-lg duration-300' onClick={() => { setShowMobileNav(false) }} href='/Services'>Services</Link>
                </li>
                <li className='text-[15px] hover:opacity-80 items-center cursor-pointer select-none flex gap-3 w-full'>
                    <IoIosSend color='var(--Primary)' size={35} />
                    <Link className='tracking-wider text-[--Primary] cursor-pointer text-lg duration-300' onClick={() => { setShowMobileNav(false) }} href='/Contact'>Contact</Link>
                </li>
                <li className='text-[15px] hover:opacity-80 items-center cursor-pointer select-none flex gap-3 w-full'>
                    <IoIosCall color='var(--Primary)' size={35} />
                    <a className='tracking-wider text-[--Primary] cursor-pointer text-lg duration-300' onClick={() => { setShowMobileNav(false) }} href='tel:8432248976'>Schedule a Call</a>
                </li>
                <li className='text-[15px] hover:opacity-80 items-center cursor-pointer select-none flex gap-3 w-full'>
                    <FaHome color='var(--Primary)' size={35} />
                    <Link className='tracking-wider text-[--Primary] cursor-pointer text-lg duration-300' onClick={() => { setShowMobileNav(false) }} href='/Personal'>Personal</Link>
                </li>
                <li className='text-[15px] hover:opacity-80 items-center cursor-pointer select-none flex gap-3 w-full'>
                    <IoMdMail color='var(--Primary)' size={35} />
                    <a className='tracking-wider text-[--Primary] cursor-pointer text-lg duration-300' onClick={() => { setShowMobileNav(false) }} href='mailto:americanhitec@yahoo.com'>Send Email</a>
                </li>

            </ul>
        </main>
    )
}

export default MobileNavbar