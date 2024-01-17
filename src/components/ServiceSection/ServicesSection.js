'use client';

import { Element } from 'react-scroll';
import ServiceItem from './ServiceItem';

const AboutSection = () => {
  return (
    <section className='w-full'>
      <Element
        name='services'
        id='services'
        className='flex flex-wrap gap-10 px-10'
      >
        <ServiceItem />
      </Element>
    </section>
  );
};

export default AboutSection;
