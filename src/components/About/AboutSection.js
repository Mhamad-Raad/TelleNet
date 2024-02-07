'use client';
import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import dynamic from 'next/dynamic';

import LineSeperator from '.././UI/LineSeperator';
const DynamicGlobe = dynamic(() => import('../UI/Globe'), {
  ssr: false,
  loading: () => <p>loading...</p>
});

import './AboutSection.css';
import { Element } from 'react-scroll';



const AboutSection = () => {
  const [showText, setShowText] = useState(false);
  const textRef = useRef(null);
  const textIsInView = useInView(textRef, { once: true });
  const pRef = useRef(null);
  const pIsInView = useInView(pRef, { once: true });

  const toggleShow = () => {
    setShowText(!showText);
  };

  return (
    <section className='w-full overflow-hidden'>
      <Element
        className='flex flex-col gap-[10px] items-center'
        id='about'
        name='about'
      >
        <h2 className='text-textColor text-[28px] font-black'>
          Get to Know Us
        </h2>
        <LineSeperator />
        <p
          className='text-center my-10 phone:px-5 tablet:px-10 text-[18px]'
          style={{
            transform: textIsInView ? 'none' : 'translateX(-200px)',
            opacity: textIsInView ? 1 : 0,
            transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
          }}
          ref={textRef}
        >
          NetSpot provides cutting-edge technology solutions tailored to your
          business needs, From cybersecurity to software development, trust our
          experts to enhance your digital world.
        </p>
        <motion.div
          className='hover:cursor-grab focus:cursor-grabbing'
          style={{
            transform: textIsInView ? 'none' : 'translateY(-200px)',
            opacity: textIsInView ? 1 : 0,
            transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
          }}
        >
          <DynamicGlobe />
        </motion.div>

        <motion.p
          className={`phone:text-justify tablet:text-center phone:px-5 tablet:px-10 overflow-hidden text-[18px] mt-8`}
          animate={{
            height: showText ? '100%' : '112px',
          }}
          transition={{ ease: 'linear', duration: 1 }}
          ref={pRef}
          style={{
            transform: pIsInView ? 'none' : 'translateY(-100px)',
            opacity: pIsInView ? 1 : 0,
          }}
        >
          <span className='font-bold'>
            TeleNet <sub>Pro</sub>
          </span>{' '}
          is guided by four principles: customer obsession rather than
          competitor focus, passion for invention, commitment to operational
          excellence, and long-term thinking. We are driven by the excitement of
          building technologies, inventing products, and providing services that
          change lives. We embrace new ways of doing things, make decisions
          quickly, and are not afraid to fail. We have the scope and
          capabilities of a large company, and the spirit and heart of a small
          one.
        </motion.p>
        <div
          className='mt-8 rounded-md bg-gradient-to-r from-bgSecondary via-primary to-bgSecondary py-[4px] px-[3px] btn-bg min-[1065px]:hidden'
          style={{
            transform: pIsInView ? 'none' : 'translateY(100px)',
            opacity: pIsInView ? 1 : 0,
            transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
          }}
        >
          <button
            onClick={toggleShow}
            className='bg-bgColor rounded-md px-16 py-4 font-black tracking-[1px] transition-colors duration-500 ease-in-out read-more-btn'
          >
            {showText ? 'Show Less' : 'Show More'}
          </button>
        </div>
      </Element>
    </section>
  );
};

export default AboutSection;
