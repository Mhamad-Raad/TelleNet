'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

import Image from 'next/image';

const SolutionItem = ({ solution, animation }) => {
  const animationRef = useRef();
  const isInView = useInView(animationRef, { once: true });

  let style =''

    if (animation === 0) style = 'translateX(-100px)';
  else if (animation === 1) style = 'translateY(-100px)';
  else if (animation === 2) style = 'translateY(100px)';
  else style = 'translateX(100px)';

  return (
    <motion.div className='bg-[#0d1c2b] phone:px-4 tablet:px-8 py-4 flex flex-col items-center rounded-2xl tablet:w-1/2' ref={animationRef} 
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'none' : style,
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
      }}
    >
      <Image src={solution.image} alt='' className='phone:h-[40%] computer:h-1/2 phone:w-[80%] computer:w-full max-w-[500px]' />
      <h3 className='phone:text-[20px] laptop:text-[28px] computer:text-[32px] text-center phone:mt-2 tablet:mt-5'>{solution.title}</h3>
      <p className='phone:text-[16px] tablet:text-[18px] computer:text-[24px] phone:mt-2 tablet:mt-5 text-center'>{solution.description}</p>
    </motion.div>
  );
};

export default SolutionItem;