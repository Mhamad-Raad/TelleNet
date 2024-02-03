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

import { FiSend } from 'react-icons/fi';

import Logo from '@/assets/Logo.png';

import './style.css';

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
    <header className='w-full phone:h-[100px] bg-gradient-to-r from-bgColor via-bgSecondary to-bgColor border-b'>
      <nav
        className={`${backgroundColor} w-full fixed z-10 flex ease-out duration-100 phone:justify-between laptop:items-center laptop:py-6 laptop:px-10 phone:py-6 phone:px-3`}
      >
        <div className='flex items-center gap-3'>
          <Image
            alt='TelleNet Logo'
            src={Logo}
            className='rounded-full laptop:ml-2 laptop:w-[50px] phone:w-[40px]'
          />
          <h1 className='font-black tracking-wider laptop:inline laptop:mx-0 laptop:text-xl phone:mx-auto phone:text-lg'>
            TelleNet <sub>Pro</sub>
          </h1>
        </div>
        <ul className='font-bold laptop:flex laptop:items-center laptop:text-lg laptop:gap-12 phone:hidden tracking-[2px]'>
          <li>
            <Link
              to='about'
              spy={true}
              activeClass='text-[#5792fb]'
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
              activeClass='text-[#5792fb]'
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
              activeClass='text-[#5792fb]'
              offset={-110}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              className='animated-button1'
              to='contact'
              ignoreCancelEvents={true}
              smooth={true}
              duration={1200}
              offset={-110}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Contact Us
            </Link>
          </li>
        </ul>
        <button className='laptop:hidden phone:inline' onClick={toggleNavbar}>
          <div
            className={`space-y-[5px] border-[1px] border-textColor rounded shadow animate-pulse relative`}
          >
            <svg
              className={`ham6 ${showNavbar ? 'active' : ''}`}
              viewBox='0 0 100 100'
              width='60'
            >
              <path
                className='line top'
                d='m 30,33 h 40 c 13.100415,0 14.380204,31.80258 6.899646,33.421777 -24.612039,5.327373 9.016154,-52.337577 -12.75751,-30.563913 l -28.284272,28.284272'
              />
              <path
                className='line middle'
                d='m 70,50 c 0,0 -32.213436,0 -40,0 -7.786564,0 -6.428571,-4.640244 -6.428571,-8.571429 0,-5.895471 6.073743,-11.783399 12.286435,-5.570707 6.212692,6.212692 28.284272,28.284272 28.284272,28.284272'
              />
              <path
                className='line bottom'
                d='m 69.575405,67.073826 h -40 c -13.100415,0 -14.380204,-31.80258 -6.899646,-33.421777 24.612039,-5.327373 -9.016154,52.337577 12.75751,30.563913 l 28.284272,-28.284272'
              />
            </svg>
          </div>
        </button>
      </nav>
      <AnimatePresence>
        {showNavbar && (
          <motion.ul
            className='w-full z-10 font-bold flex flex-col gap-y-2 bg-bgSecondary fixed top-[100px] pt-8'
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
          >
            <li className='flex text-[30px] text-center hover:bg-primary ease-out duration-200'>
              <Link
                to='about'
                activeClass='bg-[#5792fb]'
                className='w-full py-5'
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
            <li className='flex text-[30px] text-center hover:bg-primary ease-out duration-200'>
              <Link
                to='services'
                className='w-full py-5'
                spy={true}
                activeClass='bg-[#5792fb]'
                ignoreCancelEvents={true}
                smooth={true}
                duration={1200}
                offset={-110}
                onClick={toggleNavbar}
              >
                Services
              </Link>
            </li>
            <li className='flex text-[30px] text-center hover:bg-primary ease-out duration-200'>
              <Link
                to='products'
                ignoreCancelEvents={true}
                className='w-full py-5'
                activeClass='bg-[#5792fb]'
                spy={true}
                smooth={true}
                duration={1200}
                offset={-110}
                onClick={toggleNavbar}
              >
                Products
              </Link>
            </li>
            <li className='w-full text-[30px] py-5 text-center hover:bg-primary ease-out duration-200 button-63'>
              <Link
                to='contact'
                className='flex items-center justify-center gap-4'
                spy={true}
                ignoreCancelEvents={true}
                smooth={true}
                duration={1200}
                offset={-110}
                onClick={toggleNavbar}
              >
                <FiSend /> Contact Us
              </Link>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
