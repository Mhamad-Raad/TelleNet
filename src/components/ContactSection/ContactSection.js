'use client';

import { Element } from 'react-scroll';

import ContactForm from './ContactForm';
import LineSeperator from '.././UI/LineSeperator';

import { IoCallOutline } from 'react-icons/io5';
import { MdMailOutline } from 'react-icons/md';
import { IoLocationOutline } from 'react-icons/io5';

import './style.css';

const Contact = () => {
  return (
    <section>
      <Element
        name='contact'
        id='contact'
        className='p-10 flex justify-between items-center gap-20 phone:flex-col laptop:flex-row'
      >
        <div className='phone:w-full laptop:w-1/2'>
          <h3 className='font-black text-[24px] text-textColor mb-[10px]'>
            Get in Touch with Us
          </h3>
          <p className='font-bold text-[16px] text-[#697a7e] mb-8'>
            We Value your feedback, questions, and suggestions. Please Reach out
            to us if you have any inquiries or concerns we are here to help.
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
        </div>
        <ContactForm />
      </Element>
    </section>
  );
};

export default Contact;
