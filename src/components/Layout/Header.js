'use client';
import Image from 'next/image';
import { Link } from 'react-scroll';
import { useState } from 'react';
import {
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
  motion,
} from 'framer-motion';

import Logo from '@/assets/Logo.png';

const Header = () => {
  const { scrollY } = useScroll();
  const [backgroundColor, setBackgroundColor] = useState('');
  const [showNavbar, setShowNavbar] = useState(false);

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest >= 100 && backgroundColor !== 'bg-bgSecondary') {
      setBackgroundColor('bg-bgSecondary');
    } else if (latest < 100 && backgroundColor !== '') {
      setBackgroundColor('');
    }
  });

  return (
    <header className='w-full phone:h-[90px] laptop:h-[100px] bg-gradient-to-r from-bgColor via-bgSecondary to-bgColor border-b'>
      <nav
        className={`${backgroundColor} w-full fixed z-10 flex ease-out duration-100 phone:justify-between laptop:items-center laptop:py-6 laptop:px-10 phone:py-6 phone:px-3`}
      >
        <div className='flex items-center laptop:gap-3'>
          <Image
            alt='TelleNet Logo'
            src={Logo}
            className='rounded-full laptop:ml-2 laptop:w-[50px] phone:w-[40px]'
          />
          <h1 className='font-black tracking-wider laptop:inline laptop:mx-0 laptop:text-xl phone:mx-auto phone:text-lg'>
            TelleNet <sub>Pro</sub>
          </h1>
        </div>
        <ul className='font-bold laptop:flex laptop:text-lg laptop:gap-12 phone:hidden'>
          <li>
            <Link
              to='about'
              spy={true}
              activeClass='text-secondary'
              ignoreCancelEvents={true}
              smooth={true}
              duration={1200}
              offset={-110}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to='services'
              spy={true}
              activeClass='text-secondary'
              ignoreCancelEvents={true}
              smooth={true}
              duration={1200}
              offset={-110}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to='products'
              ignoreCancelEvents={true}
              smooth={true}
              duration={1200}
              spy={true}
              activeClass='text-secondary'
              offset={-110}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to='contact'
              ignoreCancelEvents={true}
              smooth={true}
              duration={1200}
              spy={true}
              activeClass='text-secondary'
              offset={-110}
            >
              Contact Us
            </Link>
          </li>
        </ul>
        <button className='laptop:hidden phone:inline' onClick={toggleNavbar}>
          <div className='p-[10px] space-y-[5px] border-[1px] border-textColor rounded shadow'>
            <span className='block w-6 h-0.5 bg-textColor animate-pulse'></span>
            <span className='block w-6 h-0.5 bg-textColor animate-pulse'></span>
            <span className='block w-6 h-0.5 bg-textColor animate-pulse'></span>
          </div>
        </button>
      </nav>
      <AnimatePresence>
        {showNavbar && (
          <motion.ul
            className='w-full z-10 font-bold flex flex-col gap-y-2 bg-bgSecondary fixed top-[85px] py-8'
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
          >
            <li className='w-full text-[30px] py-5 text-center hover:bg-cyan-500 ease-out duration-200'>
              <Link
                to='about'
                activeClass='text-secondary'
                ignoreCancelEvents={true}
                smooth={true}
                duration={1200}
                onClick={toggleNavbar}
                spy={true}
                offset={-110}
              >
                About
              </Link>
            </li>
            <li className='w-full text-[30px] py-5 text-center hover:bg-cyan-500 ease-out duration-200'>
              <Link
                to='services'
                spy={true}
                activeClass='text-secondary'
                ignoreCancelEvents={true}
                smooth={true}
                duration={1200}
                offset={-110}
                onClick={toggleNavbar}
              >
                Services
              </Link>
            </li>
            <li className='w-full text-[30px] py-5 text-center hover:bg-cyan-500 ease-out duration-200'>
              <Link
                to='products'
                ignoreCancelEvents={true}
                activeClass='text-secondary'
                spy={true}
                smooth={true}
                duration={1200}
                offset={-110}
                onClick={toggleNavbar}
              >
                Products
              </Link>
            </li>
            <li className='w-full text-[30px] py-5 text-center hover:bg-cyan-500 ease-out duration-200'>
              <Link
                to='contact'
                activeClass='text-secondary'
                spy={true}
                ignoreCancelEvents={true}
                smooth={true}
                duration={1200}
                offset={-110}
                onClick={toggleNavbar}
              >
                Contact Us
              </Link>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
