'use client';
import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import dynamic from 'next/dynamic';

import LineSeperator from '../UI/LineSeperator';
const DynamicGlobe = dynamic(() => import('../UI/Globe'), {
  ssr: false,
  loading: () => <p>loading...</p>,
});

import './AboutSection.css';
import { Element } from 'react-scroll';

const AboutSection = () => {
  const [showText, setShowText] = useState(false);
  const globeRef = useRef(null);
  const globeIsInView = useInView(globeRef, { once: true });
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
        <motion.div
          ref={globeRef}
          className='hover:cursor-grab focus:cursor-grabbing mt-2'
          style={{
            transform: globeIsInView ? 'none' : 'translateY(200px)',
            opacity: globeIsInView ? 1 : 0,
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
          {`At `}
          <span className='font-bold'>
            TeleNet <sub>Pro</sub>
          </span>{' '}
          {`, our mission is to empower businesses with advanced
          connectivity solutions designed to thrive in today's ever-changing
          digital realm. With a focus on future-proof networks, we specialize in
          delivering personalized connectivity solutions tailored to meet the
          specific needs of every industry. Whether you're a service provider,
          mobile operator, financial institution, or research network, our
          solutions are meticulously crafted to optimize your connectivity
          infrastructure for success in your sector. Explore the potential of
          next-generation connectivity solutions customized to elevate your
          business efficiency, foster innovation, and drive growth`}
          .
        </motion.p>
        <div
          className='mt-8 rounded-md bg-gradient-to-r from-bgSecondary via-primary to-bgSecondary py-[4px] px-[3px] btn-bg min-[1406px]:hidden'
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
