import Image from 'next/image';
import Link from 'next/link';

import Logo from '@/assets/Logo.jpg';

const Header = () => {
  return (
    <header className='w-full'>
      <nav className='bg-[#36454f] w-full flex laptop:justify-between laptop:items-center laptop:py-9 laptop:px-14'>
        <div className='flex laptop:gap-7 laptop:items-center'>
          <Image
            alt='TelleNet Logo'
            src={Logo}
            width={50}
            height={50}
            className='rounded-full laptop:ml-4'
          />
          <h1 className='font-black tracking-wider laptop:text-3xl'>
            TelleNet
          </h1>
        </div>
        <ul className='font-bold laptop:flex laptop:text-2xl laptop:gap-16'>
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
