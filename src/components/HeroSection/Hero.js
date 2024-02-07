'use client';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { IoIosArrowDown } from 'react-icons/io';

import Lights from './Lights';

import './hero.css';

// Future ready networks, Tailored for every business

const Hero = () => {
  return (
    <section className='flex flex-col w-full items-center justify-center phone:py-[25px] tablet:py-0 relative overflow-hidden'>
      <Lights />
      <div className='phone:p-[20px] tablet:p-[10px] laptop:p-[25px]'>
        <motion.h1
          initial={{
            opacity: 0,
            x: -50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          className='laptop:text-[64px] computer:text-[92px] tablet:text-[49px] phone:text-[20px] phone:text-center tablet:text-left tablet:leading-[70px] laptop:leading-[80px] computer:leading-[120px]'
        >
          FUTURE READY NETWORKS
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
          className='laptop:text-[64px] computer:text-[92px] tablet:text-[49px] phone:text-[20px] phone:text-center tablet:text-left tablet:leading-[70px] laptop:leading-[80px] computer:leading-[120px]'
        >
          TAILORED FOR EVERY BUSINESS
        </motion.h3>
        <div className='flex tablet:gap-10 phone:flex-col-reverse tablet:flex-row tablet:mt-5'>
          <motion.p
            initial={{
              opacity: 0,
              y: -50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className='phone:w-full tablet:w-1/2 phone:text-center tablet:text-justify laptop:text-[20px]'
          >
            Harness the power of next-gen connectivity solutions, tailored to
            your needs. In today's dynamic business landscape, staying ahead
            means embracing the future of connectivity. Our solutions are
            crafted to fit your industry—be it service providers, mobile
            operators, financial institutions, or research networks. With our
            expertise, navigate your sector confidently, knowing your
            connectivity is optimized for success.
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
            className='laptop:text-[68px] computer:text-[98px] tablet:text-[49px] phone:text-[42px] phone:text-center tablet:text-left phone:my-2 tablet:mt-0 tablet:leading-[60px] computer:leading-[80px]'
          >
            TELENET<sub>PRO</sub>
          </motion.h2>
        </div>
      </div>
      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className='w-full'
      >
        <Link
          to='about'
          ignoreCancelEvents={true}
          smooth={true}
          duration={1200}
          className='phone:mt-10 tablet:mt-14 phone:py-4 tablet:px-20 tablet:py-5 w-full flex justify-center items-center gap-10 bg-gradient-to-r from-bgColor via-[#063868] to-bgColor font-black phone:text-[20px] tablet:text-[24px] tracking-[2px] rounded-md'
        >
          Read More
          <div className='phone:p-[5px] tablet:p-3 rounded-full bg-bgColor bounce'>
            <IoIosArrowDown className='phone:text-[20px] tablet:text-[28px]' />
          </div>
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
