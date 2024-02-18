'use client';

import { Element } from 'react-scroll';

import ServiceList from './ServiceList';
import LineSeperator from '../UI/LineSeperator';

const ServicesSection = () => {


  return (
    <section>
      <Element name='service' id='service' className='flex flex-col items-center phone:px-3 laptop:px-12 '>
        <h2 className='text-[32px] mb-2 text-center'>Our Services</h2>
        <LineSeperator />
        <ServiceList />
      </Element>
    </section>
  );
};

export default ServicesSection;
