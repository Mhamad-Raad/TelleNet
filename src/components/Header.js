'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';

import Logo from '@/assets/Logo.jpg';

const Header = () => {
  const { scrollY } = useScroll();
  const [backgroundColor, setBackgroundColor] = useState('');

  useMotionValueEvent(scrollY, 'change', (latest) => {
    console.log('Page scroll: ', latest);
    if (latest >= 100 && backgroundColor !== 'bg-[#36454f]') {
      setBackgroundColor('bg-[#36454f]');
    } else if (latest < 100 && backgroundColor !== '') {
      setBackgroundColor('');
    }
  });

  return (
    <header className='w-full h-[90px] bg-gradient-to-r from-cyan-500 to-blue-500'>
      <nav
        className={`${backgroundColor} w-full fixed flex ease-out duration-100 phone:justify-between laptop:items-center laptop:py-6 laptop:px-10 phone:py-6 phone:px-3`}
      >
        <div className='flex items-center laptop:gap-5 phone:w-full'>
          <Image
            alt='TelleNet Logo'
            src={Logo}
            className='rounded-full laptop:ml-2 laptop:w-[50px] phone:w-[40px]'
          />
          <h1 className='font-black tracking-wider laptop:inline laptop:mx-0 laptop:text-xl phone:mx-auto phone:text-lg'>
            TelleNet
          </h1>
        </div>
        <ul className='font-bold laptop:flex laptop:text-lg laptop:gap-12 phone:hidden'>
          <li>
            <Link href='/'>About</Link>
          </li>
          <li>
            <Link href='/'>Services</Link>
          </li>
          <li>
            <Link href='/'>Contact</Link>
          </li>
        </ul>
        <button className='laptop:hidden phone:inline'>
          <div className='p-[10px] space-y-[5px] border-[1px] border-gray-600 rounded shadow'>
            <span className='block w-6 h-0.5 bg-gray-100 animate-pulse'></span>
            <span className='block w-6 h-0.5 bg-gray-100 animate-pulse'></span>
            <span className='block w-6 h-0.5 bg-gray-100 animate-pulse'></span>
          </div>
        </button>
      </nav>
    </header>
  );
};

export default Header;
