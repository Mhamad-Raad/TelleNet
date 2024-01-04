import Image from 'next/image';
import Link from 'next/link';

import Logo from '@/assets/Logo.jpg';

const Header = () => {
  return (
    <header className='w-full'>
      <nav className='bg-[#36454f] w-full flex desktop:justify-between desktop:items-center desktop:py-9 desktop:px-14'>
        <div className='desktop:flex desktop:gap-9 desktop:items-center'>
          <Image
            alt='TelleNet Logo'
            src={Logo}
            width={50}
            height={50}
            className='rounded-full desktop:ml-10'
          />
          <h1 className='font-black tracking-widest desktop:text-3xl'>
            TelleNet
          </h1>
        </div>
        <ul className='font-bold desktop:flex desktop:text-2xl desktop:gap-16'>
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
      </nav>
    </header>
  );
};

export default Header;
