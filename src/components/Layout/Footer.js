'use client';
import { Link } from 'react-scroll';
import Image from 'next/image';

import Logo from '@/assets/Logo.png';

import LineSeperator from '.././UI/LineSeperator';

const Footer = () => {
  return (
    <footer className='flex flex-col gap-[10px] bg-bgColor mt-[100px]'>
      <LineSeperator />
      <div className='flex justify-between items-ceneter py-[40px] px-[16px] flex-wrap gap-[50px]'>
        <div className='flex justify-center items-center gap-[20px]'>
          <Image
            alt='TeleNet Logo'
            src={Logo}
            className='rounded-full laptop:ml-2 laptop:w-[65px] phone:w-[50px]'
          />
          <h3 className='font-black text-[28px]'>TELENET</h3>
        </div>
        <div className='flex flex-col gap-y-[3px]'>
          <h3 className='font-black text-[22px] text-white tracking-[1px] mb-[3px]'>
            Main
          </h3>
          <Link
            to='products'
            ignoreCancelEvents={true}
            smooth={true}
            duration={1200}
            offset={-110}
            className='text-[#ffffffb2] text-[18px]'
          >
            Products
          </Link>
          <Link
            to='domains'
            ignoreCancelEvents={true}
            smooth={true}
            duration={1200}
            offset={-110}
            className='text-[#ffffffb2] text-[18px]'
          >
            Domains
          </Link>
          <Link
            to='solutions'
            ignoreCancelEvents={true}
            smooth={true}
            duration={1200}
            offset={-110}
            className='text-[#ffffffb2] text-[18px]'
          >
            Solutions
          </Link>
          <Link
            to='services'
            ignoreCancelEvents={true}
            smooth={true}
            duration={1200}
            offset={-110}
            className='text-[#ffffffb2] text-[18px]'
          >
            Services
          </Link>
        </div>
        <div className='flex flex-col gap-y-[3px]'>
          <h3 className='font-black text-[22px] text-white tracking-[1px] mb-[3px]'>
            Company
          </h3>
          <Link
            to='about'
            ignoreCancelEvents={true}
            smooth={true}
            duration={1200}
            offset={-110}
            className='text-[#ffffffb2] text-[18px]'
          >
            About Us
          </Link>
          <Link
            to='contact'
            ignoreCancelEvents={true}
            smooth={true}
            duration={1200}
            offset={-110}
            className='text-[#ffffffb2] text-[18px]'
          >
            Cotact Us
          </Link>
        </div>
        <div className='flex flex-col gap-y-[3px]'>
          <h3 className='font-black text-[22px] text-white tracking-[1px] mb-[3px]'>
            Follow Us
          </h3>
          <a
            target='_blank'
            href='https://www.linkedin.com/in/rabar-marouf-36a30392/'
            className='text-[#ffffffb2] text-[18px]'
          >
            LinkedIn
          </a>
        </div>
      </div>
      <div className='flex items-center gap-x-[50px]'>
        <LineSeperator />
        <Image
          alt='TeleNet Logo'
          src={Logo}
          className='rounded-full w-[65px]'
        />
        <LineSeperator />
      </div>
      <p className='text-center p-10 text-[20px]'>
        &copy; 2024 TeleNet. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
