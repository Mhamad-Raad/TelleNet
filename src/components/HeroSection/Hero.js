'use client';
import { motion } from 'framer-motion';
import { IoIosArrowDown } from 'react-icons/io';

import Lights from './Lights';

import './hero.css';

const Hero = () => {
  return (
    <section className='flex flex-col w-full items-center justify-center py-[100px] relative overflow-hidden'>
      <Lights />
      <div className='phone:p-[20px] tablet:p-[50px]'>
        <motion.h1
          initial={{
            opacity: 0,
            x: -50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          className='laptop:text-[68px] computer:text-[98px] tablet:text-[49px] phone:text-[32px]'
        >
          WE ARE
        </motion.h1>
        <motion.h3
          initial={{
            opacity: 0,
            x: 50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          className='laptop:text-[68px] computer:text-[98px] tablet:text-[49px] phone:text-[32px]'
        >
          CUTTING EDGE SOLUTIONS
        </motion.h3>
        <div className='flex gap-10 tablet:items-center phone:flex-col-reverse tablet:flex-row'>
          <motion.p
            initial={{
              opacity: 0,
              y: -50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className='phone:w-full tablet:w-1/2 phone:text-center tablet:text-justify'
          >
            We are a team of professionals that can provide you with the best
            solutions for your business. We are here to help you grow and
            improve your business. Our solutions are fast, reliable and secure.
            We are here to help you grow and improve your business. Our
            solutions are fast, reliable and secure.
          </motion.p>
          <motion.h2
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            className='laptop:text-[68px] computer:text-[98px] tablet:text-[49px] phone:text-[32px]'
          >
            TELLENET<sub>PRO</sub>
          </motion.h2>
        </div>
      </div>
      {/* write me a button with an animation of pointing down */}
      <motion.button
        initial={{
          opacity: 0,
          y: 50,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className='mt-14 phone:py-4 tablet:px-20 tablet:py-5 w-full flex justify-center items-center gap-10 bg-gradient-to-r from-[#1f2930] via-[#3856FF] to-[#1f2930] font-black text-[24px] tracking-[2px] rounded-md'
      >
        Read More
        <div className='p-3 rounded-full bg-[black] bounce'>
          <IoIosArrowDown className='animate text-[28px]' />
        </div>
      </motion.button>
    </section>
  );
};

export default Hero;
