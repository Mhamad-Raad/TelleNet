'use client';

import { Element } from 'react-scroll';

import ContactForm from './ContactForm';
import LineSeperator from '.././UI/LineSeperator';

import './style.css';

const Contact = () => {
  return (
    <section>
      <Element name='contact' id='contact' className='p-10 flex gap-20'>
        <div className='w-1/2'>
          <h3 className='font-black text-[24px] text-textColor mb-[10px]'>
            Get in Touch with Us
          </h3>
          <p className='font-bold text-[16px] text-[#697a7e] mb-8'>
            We Value your feedback, questions, and suggestions. Please Reach out
            to us if you have any inquiries or concerns we are here to help.
          </p>
          <LineSeperator />
          <div className='flex'>
            
          </div>
        </div>
        <ContactForm />
      </Element>
    </section>
  );
};

export default Contact;
