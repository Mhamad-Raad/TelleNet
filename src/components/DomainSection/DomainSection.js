'use client';

import { Element } from 'react-scroll';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

import DomainItem from './DomainItem';
import LineSeperator from '../UI/LineSeperator';

import Layer from '@/assets/layer.png';

const AboutSection = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  return (
    <section className='w-full overflow-hidden'>
      <Element
        name='services'
        id='services'
        className='flex flex-col gap-[10px]'
      >
        <h2 className='text-textColor text-[28px] font-black text-center'>
          How Can We Help
        </h2>
        <LineSeperator />
        <motion.p
          className='text-center mt-1 phone:px-4 computer:text-[20px]'
          ref={ref}
          style={{
            transform: isInView ? 'none' : 'translateY(100px)',
            opacity: isInView ? 1 : 0,
            transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
          }}
        >
          {`Experience exponential business growth with Netspot's services.
          Develop your business like never before with our innovative solutions
          and expert guidance.`}
        </motion.p>
        <div className='flex flex-wrap items-center justify-center gap-10 mt-16 phone:px-4'>
          <DomainItem
            ImageSrc={Layer}
            Title='Composition'
            Description="NetSpot's solutions let you build a flexible and adaptable business
          with unmatched agility and efficiency."
            animation={1}
          />
          <DomainItem
            ImageSrc={Layer}
            Title='Composition'
            Description="NetSpot's solutions let you build a flexible and adaptable business
          with unmatched agility and efficiency."
            animation={2}
          />
          <DomainItem
            ImageSrc={Layer}
            Title='Composition'
            Description="NetSpot's solutions let you build a flexible and adaptable business
          with unmatched agility and efficiency."
            animation={3}
          />
        </div>
      </Element>
    </section>
  );
};

export default AboutSection;
