'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const Banner = () => {
  return (
    <motion.div
      className='w-full h-[100px] flex justify-between items-center bg-slate-50 absolute'
      style={{ y: 0 }}
      animate={{ y: -100 }}
    >
      <p></p>
      <ul className='font-bold text-black phone:flex phone:gap-12 phone:text-lg phone:px-3'>
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
    </motion.div>
  );
};

export default Banner;
