import Link from 'next/link';
import Image from 'next/image';

import Logo from '@/assets/Logo.jpg';

const Footer = () => {
  return (
    <footer className='flex flex-col gap-[10px]'>
      <div className='h-[2px] w-full bg-gradient-to-r from-[#ffffff29] via-white to-[#ffffff29] mb-[10px]' />
      <div className='flex justify-between items-ceneter py-[40px] px-[16px] flex-wrap gap-[50px]'>
        <div className='flex justify-center items-center gap-[20px]'>
          <Image
            alt='TelleNet Logo'
            src={Logo}
            className='rounded-full laptop:ml-2 laptop:w-[65px] phone:w-[50px]'
          />
          <h3 className='font-black text-[28px]'>TELLENET</h3>
        </div>
        <div className='flex flex-col gap-y-[3px]'>
          <h3 className='font-black text-[22px] text-white tracking-[1px] mb-[3px]'>
            Main
          </h3>
          <Link href='/' className='text-[#ffffffb2] text-[18px]'>
            Solutions
          </Link>
          <Link href='/' className='text-[#ffffffb2] text-[18px]'>
            Home
          </Link>
          <Link href='/' className='text-[#ffffffb2] text-[18px]'>
            Services
          </Link>
        </div>
        <div className='flex flex-col gap-y-[3px]'>
          <h3 className='font-black text-[22px] text-white tracking-[1px] mb-[3px]'>
            Company
          </h3>
          <Link href='/' className='text-[#ffffffb2] text-[18px]'>
            About Us
          </Link>
          <Link href='/' className='text-[#ffffffb2] text-[18px]'>
            Cotact Us
          </Link>
        </div>
        <div className='flex flex-col gap-y-[3px]'>
          <h3 className='font-black text-[22px] text-white tracking-[1px] mb-[3px]'>
            Follow Us
          </h3>
          <Link href='/' className='text-[#ffffffb2] text-[18px]'>
            LinkedIn
          </Link>
        </div>
      </div>
      <div className='flex items-center gap-x-[50px]'>
        <div className='h-[2px] w-full bg-gradient-to-r from-[#ffffff29] via-white to-[#ffffff29]' />
          <Image
            alt='TelleNet Logo'
            src={Logo}
            className='rounded-full w-[65px]'
          />
        <div className='h-[2px] w-full bg-gradient-to-r from-[#ffffff29] via-white to-[#ffffff29]' />
      </div>
      <p className='text-center p-10 text-[20px]'>
        {/* write a copywrite */}
        &copy; 2024 TelleNet. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
