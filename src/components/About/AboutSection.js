'use client';
import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import LineSeperator from '.././UI/LineSeperator';
import Globe from '../UI/Globe';

import './AboutSection.css';

const AboutSection = () => {
  const [showText, setShowText] = useState(false);
  const textRef = useRef(null);
  const textIsInView = useInView(textRef, {once: true});
  const pRef = useRef(null);
  const pIsInView = useInView(pRef, {once: true});

  const toggleShow = () => {
    setShowText(!showText);
  };

  return (
    <section className='flex flex-col gap-[10px] items-center' id='about'>
      <h2 className='text-textColor text-[28px] font-black'>Get to Know Us</h2>
      <LineSeperator />
      <p
        className='text-center mt-10 phone:px-5 tablet:px-10 text-[18px]'
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
      <Globe textIsInView={textIsInView} />
      <motion.p
        className={`phone:text-justify tablet:text-center phone:px-5 tablet:px-10 ${
          showText ? '' : 'line-clamp-3'
        } text-[18px]`}
        animate={{
          height: showText ? 'auto' : 75,
        }}
        ref={pRef}
        style={{
          transform: pIsInView ? 'none' : 'translateY(-100px)',
          opacity: pIsInView ? 1 : 0,
          transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
        }}
      >
        <span className='font-bold'>
          TelleNet <sub>Pro</sub>
        </span>{' '}
        is guided by four principles: customer obsession rather than competitor
        focus, passion for invention, commitment to operational excellence, and
        long-term thinking. We are driven by the excitement of building
        technologies, inventing products, and providing services that change
        lives. We embrace new ways of doing things, make decisions quickly, and
        are not afraid to fail. We have the scope and capabilities of a large
        company, and the spirit and heart of a small one.
      </motion.p>
      <div
        className='mt-8 rounded-md bg-gradient-to-r from-bgSecondary via-primary to-bgSecondary py-[4px] px-[3px] btn-bg computer:hidden'
        style={{
          transform: pIsInView ? 'none' : 'translateY(100px)',
          opacity: pIsInView ? 1 : 0,
          transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
        }}
      >
        <button
          onClick={toggleShow}
          className='bg-bgColor rounded-md px-16 py-4 font-black tracking-[1px] transition-colros duration-500 ease-in-out read-more-btn'
        >
          {showText ? 'Show Less' : 'Show More'}
        </button>
      </div>
    </section>
  );
};

export default AboutSection;
