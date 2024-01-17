'use client';

import { Element } from 'react-scroll';
import ServiceItem from './ServiceItem';
import LineSeperator from '.././UI/LineSeperator';


const AboutSection = () => {
  return (
    <section className='w-full'>
      <Element
        name='services'
        id='services'
        className='flex flex-col gap-[10px]'
      >
        <h2 className="text-textColor text-[28px] font-black text-center">How Can We Help</h2>
        <LineSeperator />
        <p className="text-center mt-1">
          Experience exponential business growth with Netspot's services. Develop your business like never before with our innovative solutions and expert guidance.
        </p>
        <div className="flex flex-wrap gap-10 mt-16">

        <ServiceItem />
        </div>
      </Element>
    </section>
  );
};

export default AboutSection;
