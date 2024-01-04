import Image from 'next/image';
import Link from 'next/link';

import Logo from '@/assets/Logo.jpg';

const Header = () => {
  return (
    <nav className='w-full'>
      <div className='desktop:w-full desktop: flex'>
        <div className='desktop:flex'>
          <Image alt='TelleNet Logo' src={Logo} width={20} height={20} />
          <h1>TelleNet</h1>
        </div>
        <ul className='desktop:flex'>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/about'>About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
