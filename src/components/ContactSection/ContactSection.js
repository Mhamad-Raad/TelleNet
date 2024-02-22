'use client';

import { Element } from 'react-scroll';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import ContactForm from './ContactForm';
import LineSeperator from '.././UI/LineSeperator';

import { IoCallOutline } from 'react-icons/io5';
import { MdMailOutline } from 'react-icons/md';
import { IoLocationOutline } from 'react-icons/io5';

import './style.css';

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <Element
        name='contact'
        id='contact'
        className='phone:p-6 tablet:p-10 flex justify-between items-center gap-20 phone:flex-col laptop:flex-row overflow-hidden'
      >
        <motion.div
          className='phone:w-full laptop:w-1/2'
          style={{
            transform: inView ? 'none' : 'translateX(-100px)',
            opacity: inView ? 1 : 0,
            transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
          }}
        >
          <h3 className='font-black text-[24px] text-textColor mb-[10px]'>
            Get in Touch with Us
          </h3>
          <p className='font-bold text-[16px] text-[#697a7e] mb-8'>
            Take action today and elevate your business to new heights!
          </p>
          <LineSeperator />
          <div className='flex flex-col gap-4 mt-[50px]'>
            <div className='flex gap-3 items-center'>
              <IoCallOutline className='text-[22px]' />
              <p className='font-semibold text-[17px]'>+964 (770) 123 4567</p>
            </div>
            <div className='flex gap-3 items-center'>
              <MdMailOutline className='text-[22px]' />
              <p className='font-semibold text-[17px]'>info@company.com</p>
            </div>
            <div className='flex gap-3 items-center'>
              <IoLocationOutline className='text-[22px]' />
              <p className='font-semibold text-[17px]'>
                Bakrajo, Sulaimaniyah, Kurdistan Region, Iraq
              </p>
            </div>
          </div>
        </motion.div>
          <div className="phone:w-full laptop:w-1/2">

        <ContactForm inView={inView} />
          </div>
      </Element>
    </section>
  );
};

export default Contact;
