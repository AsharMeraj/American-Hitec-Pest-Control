'use client';
import { useEffect, useState } from 'react';
import MobileNavbar from '@/app/HomeComponents/MobileNavbar'
import NavComponent from './NavComponent';

function Navbar() {
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false)
  const [position, setPosition] = useState<boolean>(false);
  function AppearNavbar() {
    if (window.scrollY >= 200) {
      setPosition(true);
    }
    else if (window.scrollY <= 200) {
      setPosition(false);
    }

  }
  useEffect(() => {
    console.log(window.scrollY)
    window.addEventListener('scroll', AppearNavbar);
  }, [])

  return (
    <div>
      <nav className="w-full z-40 relative">
        <NavComponent setShowMobileNav={setShowMobileNav} />
      </nav>
      <nav className={position ? 'fixed top-0 w-full translate-y-0 duration-700 z-30' : "absolute top-0 translate-y-[-100%]  w-full z-30"}>
        <NavComponent setShowMobileNav={setShowMobileNav} />
      </nav>
      <main className={`fixed bg-white/80 backdrop-blur-md flex h-screen justify-center top-0 left-0 right-0 z-50 w- overflow-x-hidden duration-700 shadow-lg shadow-black/20  ${showMobileNav ? 'translate-x-[0%]' : 'translate-x-[100%]'}`}>
        <MobileNavbar setShowMobileNav={setShowMobileNav} />
      </main>

    </div>
  )
}
export default Navbar