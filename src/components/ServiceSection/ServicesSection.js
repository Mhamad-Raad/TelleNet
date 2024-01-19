'use client';

import { Element } from 'react-scroll';
import ServiceItem from './ServiceItem';
import LineSeperator from '.././UI/LineSeperator';

import Layer from '@/assets/layer.png';

const AboutSection = () => {
  return (
    <section className='w-full'>
      <Element
        name='services'
        id='services'
        className='flex flex-col gap-[10px]'
      >
        <h2 className='text-textColor text-[28px] font-black text-center'>
          How Can We Help
        </h2>
        <LineSeperator />
        <p className='text-center mt-1 phone:px-4 computer:text-[20px]'>
          Experience exponential business growth with Netspot's services.
          Develop your business like never before with our innovative solutions
          and expert guidance.
        </p>
        <div className='flex flex-wrap items-center justify-center gap-10 mt-16 phone:px-4'>
          <ServiceItem
            ImageSrc={Layer}
            Title='Composition'
            Description="NetSpot's solutions let you build a flexible and adaptable business
          with unmatched agility and efficiency."
          />
          <ServiceItem
            ImageSrc={Layer}
            Title='Composition'
            Description="NetSpot's solutions let you build a flexible and adaptable business
          with unmatched agility and efficiency."
          />
          <ServiceItem
            ImageSrc={Layer}
            Title='Composition'
            Description="NetSpot's solutions let you build a flexible and adaptable business
          with unmatched agility and efficiency."
          />
        </div>
      </Element>
    </section>
  );
};

export default AboutSection;
